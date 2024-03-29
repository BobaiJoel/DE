const User = require("./model");
const { hashData, verifyHashedData } = require("./../../util/hashData");
// const { uploadfile } = require("./../../util/filehelper");
const createToken = require("./../../util/createToken");

const loginUser = async (data) => {
  try {
    const { email, password } = data;
    const fetchedUser = await User.findOne({ email });

    if (!fetchedUser) {
      throw Error("We don't have an account with this email!");
    }

    if (!fetchedUser.verified) {
      throw Error("Email hasn't been verified yet. Check your inbox.");
    }

    const hashedPassword = fetchedUser.password;

    const passwordMatch = await verifyHashedData(password, hashedPassword);

    if (!passwordMatch) {
      throw Error("Wrong password!");
    }

    return fetchedUser;
  } catch (error) {
    throw error;
  }
};

const authenticateUser = async (data) => {
  try {
    const { email, password } = data;
    const fetchedUser = await User.findOne({ email });

    if (!fetchedUser) {
      throw Error("We don't have an account with this email!");
    }

    if (!fetchedUser.verified) {
      throw Error("Email hasn't been verified yet. Check your inbox.");
    }

    const hashedPassword = fetchedUser.password;

    const passwordMatch = await verifyHashedData(password, hashedPassword);

    if (!passwordMatch) {
      throw Error("Wrong password!");
    }

    // create user token
    const tokenData = {
      user: fetchedUser._id,
      email,
      name: fetchedUser.name,
      profilePicture: fetchedUser.profilePicture,
    };
    const token = await createToken(tokenData);

    // assign user token
    fetchedUser.token = token;
    return fetchedUser;
  } catch (error) {
    throw error;
  }
};

const createNewUser = async (data) => {
  try {
    // console.log(data);
    const { name, email, password, accountType } = data;

    // checking if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw Error("User with the provided email already exists");
    }
    // hash password
    const hashedPassword = await hashData(password);

    const newUser = new User({
      name,
      email,
      accountType,
      password: hashedPassword,
      myBalance: 2.0,
      myIncome: 2.0,
      mySavings: 2.0,
      myExpense: 2.0,
      mySavingsUp: 0.09,
      myIncomeUp: 0.09,
      status: "Inactive",
    });
    // save user
    const createdUser = await newUser.save();
    return createdUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser, authenticateUser, loginUser };
