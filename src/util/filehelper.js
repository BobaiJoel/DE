const storage = require("./../config/firebaseStorage");

const uploadFileFirebaseStorage = async (
  fileName,
  fileMimeType,
  fileBuffer
) => {
  try {
    const blob = storage.file(fileName);
    const blobStream = await blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: fileMimeType,
      },
    });

    // if error
    blobStream.on("error", (error) => {
      //throw Error(error);
      res.status(400).json({ mess: error + "hh", sta: "jj" });
    });

    blobStream.on("finish", () => {
      console.log("image uploaded successfully");
    });

    blobStream.end(fileBuffer);
    return storage.name;
  } catch (error) {
    throw error;
  }
};

module.exports = { uploadFileFirebaseStorage };
