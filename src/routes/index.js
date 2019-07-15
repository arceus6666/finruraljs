const express = require('express');
const files = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/upload', (req, res) => {
  res.render('index');
});

router.post('/upload', (req, res) => {
  files.uploadFile(req, res, (err) => {
    if (err) {
      err.message = 'The file is so heavy for my service';
      return res.send(err);
    }
    // console.log(req.file);
    res.render('index');
  });
});

module.exports = router;
