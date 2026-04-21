const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", auth, upload.single("image"), (req, res) => {
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

module.exports = router;
