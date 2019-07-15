const fs = require('fs');

if (typeof require !== 'undefined') XLSX = require('xlsx');

const readXlsx = () => {
  return XLSX.readFile('src/public/uploads/file.xlsx')
}

const print = () => {
  const wb = XLSX.readFile('src/public/uploads/file.xlsx');
  const ws = wb.Sheets[`${wb.SheetNames[0]}`];
  let data = '';
  console.log(ws.A2)
  data+=ws.A2.v;
  fs.writeFileSync('src/public/downloads/file.txt', data, (err) => {
    if (err) return err;
  })
}

module.exports = {
  readXlsx,
  print
};
