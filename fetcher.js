const request = require('request');

const site = process.argv[2];
const filePath = process.argv[3];

const fs = require('fs');
const { url } = require('inspector');

// let content = "";

// const writer = fs.writeFile(filePath, content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });


const fetch = function(URL, path) {
  request(URL, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    let content = body; // Print the HTML for the Google homepage.
  
    if (!error) {
      console.log(`Successfully written ${content.length} bytes to ${path}`);
      return fs.writeFile(path, content, err => {
        if (err) {
          console.log(err);
        }
      });
    }

  });

};

fetch(site, filePath);

