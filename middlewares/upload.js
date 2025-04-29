const multer = require("multer");

// Using memory storage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;
