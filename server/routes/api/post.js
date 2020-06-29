const express = require("express");
const router = express.Router();
const { check, validationResult, checkBody } = require("express-validator");
const auth = require("../../middleware/auth"); // Middleware function To make the user has a profile
const multer = require("multer");
const path = require("path");
const User = require("../../models/User"); // Bring in mongodb model ( Schema )
const Post  = require("../../models/Post"); // Bring in mongodb model ( Schema )
const Profile  = require("../../models/Profile"); // Bring in mongodb model ( Schema )

// Multer Image Upload Requirements for clear and persie code
const storage = multer.diskStorage({
  destination: "../public/uploads",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const filterFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: filterFilter
});

// @route   GET API/Post
// @Desc    Create a post
// @access  Private

router.post(
  "/",
  [
    upload.single("image"),
    auth
  ],
  async (req, res) => {
    console.log(req.file);
    try{
        const user = await User.findById(req.user.id).select('-password');
        if(!req.file){
          return res.status(500).send('Please Add An Image')
        }; 
      
        let hashtags = '';
        if(req.body.hashtags){
         hashtags = req.body.hashtags.split('#').map(tag => tag.trim()).filter(tag => tag !== '');
        };

        const newPost = new Post({
            caption:  req.body.caption,
            image: "uploads/" + req.file.filename,
            location: req.body.location,
            name: user.name,
            profileImage: user.profileImage,
            hashtags: hashtags,
            user: req.user.id
        });
         
        const post = await newPost.save();
        return res.json(post);
    } catch(err){
        console.log(err.message);
       return  res.status(500).send('Server Error')
    }
  }
);

module.exports = router;
