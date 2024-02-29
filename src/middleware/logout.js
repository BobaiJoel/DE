const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const logout = async (req, res, next) => {
  let cookies = req.headers.cookie;

  if (!cookies) {
    return res.status(403).send("Access Denied, Token is required!");
  }

  const inputString = cookies;
  let prevToken = "";
  // Use a regular expression to find all key-value pairs in the string
  const regex = /(\w+=[^;]+)/g;
  const matches = inputString.match(regex);

  if (matches) {
    const keyValuePairs = {};

    // Iterate through the matches and extract key-value pairs
    matches.forEach((match) => {
      const [key, value] = match.split("=");
      prevToken = value;
      keyValuePairs[key] = value;
    });
  } else {
    console.log("No key-value pairs found in the string.");
  }
  try {
    if (!prevToken)
      return res.status(403).send("Access Denied, Token is required!");

    if (prevToken.startsWith("Bearer ")) {
      prevToken = prevToken.slice(7, prevToken.length).trimLeft();
    }

    const verified = await jwt.verify(String(prevToken), JWT_SECRET);
    res.clearCookie(`${verified.user}`);
    req.cookies[`${verified.user}`] = "";

    return res.status(200).json({ message: "Successfully Logged Out" });
  } catch (err) {
    return res
      .status(401)
      .json({ error: err.message, message: "Invalid Token provided!" });
  }

  // procceed with request
  // return next();
};

module.exports = logout;
