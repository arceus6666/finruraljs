const express = require('express');
const files = require('../controllers/multer');
const excel = require('../controllers/excel')

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/print', (req, res) => {
  // excel.print(e.Sheets[`${e.SheetNames[0]}`])
  res.render('index');
});

router.get('/upload', (req, res) => {
  res.render('download');
});

router.post('/upload', (req, res) => {
  files.uploadFile(req, res, (err) => {
    if (err) {
      err.message = 'The file is so heavy for my service';
      return res.send(err);
    }
    // console.log(req.file);
    excel.print();
    res.render('download');
  });
});



module.exports = router;
