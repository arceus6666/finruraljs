const fs = require('fs');
const path = require('path');
if (typeof require !== 'undefined') XLSX = require('xlsx');

const readXlsx = () => {
  path.join(__dirname, 'src/public/uploads')
  return XLSX.readFile('src/public/uploads/file.xlsx')
}

const print = (wb) => {
  console.log(wb);
}

module.exports = {
  readXlsx,
  print
};
