//siapkan berkas rumah
const fs = require("fs");
const { createServer } = require('node:http');

//tentuin dimana alamat rumahnya
const hostname = '127.0.0.1';
const port = 3000;

//perintahkan untuk buatkan rumah
const server = createServer((req, res) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


//rumah bisa didatangi
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  fs.readFile("temp.txt", "utf-8", (err, data) => {
    console.log(data);
  })
});