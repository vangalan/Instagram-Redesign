const express = require("express");
const router = express.Router();
const { validationResult, check } = require("express-validator"); //  a set of express.js middlewares that wraps validator.js validator and sanitizer functions.

const User = require('../../models/User'); // Bring in mongodb model ( Schema ) 

// @route  Post api/user
// @Desc   Register User and Back-end Valdiation 
// @access  Access Public 

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty() ,
    check("email", "Please Include a Valid Email").isEmail() , 
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password} = req.body;
    // See if the user exists 
    // Send back a error 
    // Encrpty Password
    // Return jsonwebtoken

    res.send("User Route");
  }
);

module.exports = router;
