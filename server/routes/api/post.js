const express = require('express');
const router = express.Router();

// @route   GET API/Post
// @Desc    auth Post
// @access  Access Public 

router.get('/', (req, res) => {
    res.send("Post Route");
});

module.exports = router;