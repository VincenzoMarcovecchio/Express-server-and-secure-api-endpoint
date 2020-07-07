const express = require('express');

const emojis = require('./emojis');

const marsweather = require('./mars-weather');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/mars-weather', marsweather);

module.exports = router;
