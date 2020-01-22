const convertxml2json = require('xml-js');
var csv = require('csv2json');
var fs = require('fs');
//var json2xml = require('json2xml');
var js2xmlparser = require("js2xmlparser");
 
/*
 //Json to XML
 var obj = {
    "firstName": "John",
    "lastName": "Smith",
    "dateOfBirth": new Date(1964, 7, 26),
    "address": {
        "@": {
            "type": "home"
        },
        "streetAddress": "3212 22nd St",
        "city": "Chicago",
        "state": "Illinois",
        "zip": 10000
    },
    "phone": [
        {
            "@": {
                "type": "home"
            },
            "#": "123-555-4567"
        },
        {
            "@": {
                "type": "cell"
            },
            "#": "890-555-1234"
        },
        {
            "@": {
                "type": "work"
            },
            "#": "567-555-8901"
        }
    ],
    "email": "john@smith.com"
};
 
console.log(js2xmlparser.parse("person", obj));
*/

/*
 // XML to Json
var xml =
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<note importance="high" logged="true">' +
  '    <title>Happy</title>' +
  '       <todo>Work</todo>' +
  '       <todo>Play</todo>' +
  '</note>';

  var result1 = convertxml2json.xml2json(xml, {compact: true, spaces: 4});
console.log(result1);
*/