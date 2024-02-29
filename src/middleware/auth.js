const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const verifyToken = async (req, res, next) => {
  let cookies = req.headers.cookie;
  // console.log(cookies + ">");
  if (!cookies) {
    return res.status(403).send("Access Denied, Token is required!");
  }
  let token = cookies.split("=")[1];

  const inputString = cookies;
  let string = "";
  // Use a regular expression to find all key-value pairs in the string
  const regex = /(\w+=[^;]+)/g;
  const matches = inputString.match(regex);

  if (matches) {
    const keyValuePairs = {};

    // Iterate through the matches and extract key-value pairs
    matches.forEach((match) => {
      const [key, value] = match.split("=");
      string = value;
      keyValuePairs[key] = value;
    });

    console.log("All key-value pairs:");
    console.log(string);
  } else {
    console.log("No key-value pairs found in the string.");
  }

  //   let token =
  //     req.body.token ||
  //     req.query.token ||
  //     req.headers["x-access-token"] ||
  //     req.headers[`authorization`];
  //  req.header("Authorization");
  try {
    if (!string)
      return res.status(403).send("Access Denied, Token is required!");

    if (string.startsWith("Bearer ")) {
      string = string.slice(7, token.length).trimLeft();
    }
    // console.log("old", token);
    const verified = await jwt.verify(String(string), JWT_SECRET);
    req.currenUser = verified;
  } catch (err) {
    return res
      .status(401)
      .json({ error: err.message, message: "Invalid Token provided!" });
  }

  // procceed with request
  return next();
};

module.exports = verifyToken;
