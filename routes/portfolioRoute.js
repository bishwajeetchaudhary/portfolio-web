const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');

// router object
const router = express.Router();

// routes
router.post('/sendmail', sendEmailController);

// export
module.exports = router;