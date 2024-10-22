const express = require('express');
const { postJob } = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');  // JWT protection middleware
const router = express.Router();

router.post('/post-job', protect, postJob);

module.exports = router;
