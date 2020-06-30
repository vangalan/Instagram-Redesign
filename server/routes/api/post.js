const express = require("express");
const router = express.Router();
const { check, validationResult, checkBody } = require("express-validator");
const auth = require("../../middleware/auth"); // Middleware function To make the user has a profile
const multer = require("multer");
const path = require("path");
const User = require("../../models/User"); // Bring in mongodb model ( Schema )
const Post = require("../../models/Post"); // Bring in mongodb model ( Schema )
const Profile = require("../../models/Profile"); // Bring in mongodb model ( Schema )

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
  fileFilter: filterFilter,
});

// @route   GET API/Post
// @Desc    Create a post
// @access  Private

router.post("/", [upload.single("image"), auth], async (req, res) => {
  console.log(req.file);
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!req.file) {
      return res.status(500).send("Please Add An Image");
    }

    let hashtags = "";
    if (req.body.hashtags) {
      hashtags = req.body.hashtags
        .split("#")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");
    }

    const newPost = new Post({
      caption: req.body.caption,
      image: "uploads/" + req.file.filename,
      location: req.body.location,
      name: user.name,
      profileImage: user.profileImage,
      hashtags: hashtags,
      user: req.user.id,
    });

    const post = await newPost.save();
    return res.json(post);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
});

// @route   GET api/Post
// @Desc   Get All Post
// @access  Private

router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
});

// @route   GET api/post/:id
// @Desc   Get All Post
// @access  Private

router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post Not Found" });
    }
    res.json(post);
  } catch (err) {
    console.log(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found" });
    }

    return res.status(500).send("Server Error");
  }
});

// @route   DELETE api/posts/:id
// @Desc    Delete All Post
// @access  Private

router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post Not Found" });
    }

    // Check User
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User Not Athorized" });
    }

    await post.remove();
    res.json({ msg: "Post Removed" });
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found" });
    }

    return res.status(500).send("Server Error");
  }
});

// @route put api/posts/like/:id
// @Desc    Like a post
// @access  Private

router.put("/like/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has been liked by the users

    if (
      post.like.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Post Already Liked" });
    }

    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (error) {
    onsole.log(err.message);

    return res.status(500).send("Server Error");
  }
});

// @route put api/posts/unlike/:id
// @Desc    unlike a post
// @access  Private

router.put("/like/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has been liked by the users

    if (
      post.like.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "hasn't be liked" });
    }

    // Get Remove Index
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);
    post.like.splice(removeIndex, 1);
    await post.save();
    res.json(post.likes);
    
  } catch (error) {
    onsole.log(err.message);

    return res.status(500).send("Server Error");
  }
});

module.exports = router;
