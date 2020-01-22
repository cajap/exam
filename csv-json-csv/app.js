var fs = require('fs');
const path = require('path');
const parse = require('csv-parse');
const file = fs.readFileSync(path.resolve(__dirname, "phonenumbers.csv"), "utf8");
const Parser = require('json2csv').Parser;


//from csv to json
const output = [];
parse(file, {
  trim: true,
  skip_empty_lines: true,
  columns: true
})
  // Use the readable stream api
  .on('readable', function () {
    let record;
    while (record = this.read()) {
      output.push(record);
      console.log(record);
    }
  });

//json to csv
const fields = ['to phone', 'message'];

var data = [
  { 'to phone': '23434567', message: 'hej hej hej' },
  { 'to phone': '23456654', message: 'hej farvel hej' }

]
const json2csvParser = new Parser({ fields, quote: '' });
const csv = json2csvParser.parse(data);

console.log(csv)

