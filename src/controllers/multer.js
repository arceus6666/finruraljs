const fs = require('fs');
const path = require('path');
const multer = require('multer');
const excel = require('./excel')

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: (req, file, cb) => {
    // console.log(excel.readXlsx(file));

    cb(null, 'file.xlsx');
  }
});

const uploadFile = multer({
  storage,
  limits: { fileSize: 1000000 }
}).single('archivo');



module.exports = {
  uploadFile
}
