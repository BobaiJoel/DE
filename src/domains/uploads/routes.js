const express = require("express");
const multer = require("multer");
const { getUrlFromFirebaseStorag } = require("./controller");
const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

// request single file upload
router.post("/", upload.array("files"), async (req, res) => {
  try {
    const file = req.files;
    if (!file[0]) {
      console.log("no file provided");
      throw Error("no file provided");
    }
    let Url = await getUrlFromFirebaseStorag(file);

    res.status(200).json({ url: Url });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
