const { v4: uuidv4 } = require("uuid");
const { uploadFileFirebaseStorage } = require("./../../util/filehelper");
const getUrlFromFirebaseStorag = async (file) => {
  try {
    // create new filename
    const fileName = `${uuidv4()}${
      new Date().toISOString().replace(/:/g, "-") + "-" + file[0].originalname
    }`;
    // geting mimetype from file
    let fileMimeType = file[0].mimetype;
    // geting buffer from file
    let fileBuffer = file[0].buffer;
    const uploadFileData = await uploadFileFirebaseStorage(
      fileName,
      fileMimeType,
      fileBuffer
    );
    const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${uploadFileData}/o/${fileName}?alt=media`;
    return publicUrl;
  } catch (err) {
    throw err;
  }
};

module.exports = { getUrlFromFirebaseStorag };
