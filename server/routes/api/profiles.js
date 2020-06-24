const express = require('express');
const router = express.Router();
// @route   GET API/profile
// @Desc    auth Route
// @access  Access Public 

router.get('/', (req, res) => {
    res.send("Profile Route");
});

module.exports = router;