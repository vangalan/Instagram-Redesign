const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: "../public/uploads/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single('recfile');


// @route   GET api/profile/me
// @Desc    get current users profile
// @access  Private

router.get("/me",auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "username"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/profile/me
// @Desc    Create / Update a users profile
// @access  Private

router.post("/", auth, async (req, res) => {
    console.log(req.body);
    return res.send('File');
  /* const {
    imgFile,
    bio,
    location,
    marital,
    music,
    hobbies,
    food,
    movie,
  } = req.body;

  // Build profiles object
  const profileFields = {};
  profileFields.user = req.user.id;
  if(imgFile) profileFields.imgFile = req.file.path;
  if (bio) profileFields.bio = bio;
  if (location) profileFields.location = location;
  if (marital) profileFields.marital = marital;
  if (music) profileFields.music = music;
  if (food) profileFields.food = food;
  if (movie) profileFields.movie = movie;
  if (hobbies) {
    profileFields.hobbies = hobbies.split(",").map((hobby) => hobby.trim());
  }
  console.log(profileFields);

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {

      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }

    // Create Profile

    profile = new Profile(profileFields);

    await Profile.save();

    res.json(profile);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  } */
});

module.exports = router;
