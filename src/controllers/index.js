const fs = require('fs');
const path = require('path');
const multer = require('multer');
const xlsx = require('xlsx');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: (req, file, cb) => {
    cb(null, 'file.xlsx');
  }
});

const uploadFile = multer({
  storage,
  limits: { fileSize: 1000000 }
}).single('archivo');


const readXlsx = () => {
  return xlsx.readFile(path.join(__dirname, `../public/uploads/file.xslx`))
}

module.exports = {
  uploadFile,
  readXlsx
}
