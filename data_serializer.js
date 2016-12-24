const path = require('path');

const xlsx = require('node-xlsx');
const fs = require('fs-extra');

const SOURCE_DIR = path.join(__dirname, './data_excel/chart1');
const DIST_DIR = path.join(__dirname, './data/chart1');

fs.readdir(SOURCE_DIR, (err, files) => {
  if (err) {
    return console.log('readdir error!');
  }
  files.forEach(file => {
    const content = xlsx.parse(path.join(SOURCE_DIR, file));
    const datas = content[0].data.slice(1);
    let three_points = [];
    let win_rate = [];
    datas.forEach(row => {
      three_points.push(row[1]);
      win_rate.push(row[2]);
    });

    console.log(file);
    console.log('场均三分出手：', three_points.toString());
    console.log('胜率：', win_rate.toString());
    console.log('\n');

    // const resFile = path.join(DIST_DIR, file.split('.')[0] + '.json');
    // fs.ensureFileSync(resFile);
    // fs.writeJSONSync(resFile, {
    //   three_points, win_rate
    // }, (err) => console.log(err));
  });
});
