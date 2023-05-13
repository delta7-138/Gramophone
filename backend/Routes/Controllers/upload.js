const multer = require("multer"); 
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({ url: process.env.CONNECTION_URI });

const upload = multer({ storage });

module.exports = {upload}; 