const express = require('express');
const router = express.Router();
// @route   GET API/auth
// @Desc    auth Route
// @access  Access Public 

router.get('/', (req, res) => {
    res.send("Auth Route");
});

module.exports = router;