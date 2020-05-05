// Node.js: HTTP SERVER Hnadling GET & POST Request
// Show Html Form At GET Request.
// At POST Request: Grab Form Data & Display Them.

var http = require("http");

var fs = require("fs");

var server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
  } else {
    // console.log("Caliing via POST Method");

    var data = "";

    req.on("data", function (chunk) {
      data += chunk;
    });
    req.on("end", function () {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
            ${data}
            `);
    });
  }
});
server.listen(3000);
