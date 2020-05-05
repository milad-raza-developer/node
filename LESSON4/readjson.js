// Reading Json Files Using Node.js
// Generating Right Json From Routing Using Node.js
// Json Files: Staff.json

var http = require('http');

var staff = require('./public/data/staff.json');

var server = http.createServer(function(req, res){
    if(req.url === "/") {
        res.writeHead(200, {"content-Type": "text/json"});
        res.end(JSON.stringify(staff));
    }
    else if(req.url === "/react.js") {
        var data = staff.filter(function (item){
            return item.language === "React.js";
        });
        res.writeHead(200, {"content-Type": "text/json"});
        res.end(JSON.stringify(data));
    }
    else if(req.url === "/angular.js") {
        var data = staff.filter(function (item){
            return item.language === "Angular.js";
        });
        res.writeHead(200, {"content-Type": "text/json"});
        res.end(JSON.stringify(data));
    }
    else if(req.url === "/node.js") {
        var data = staff.filter(function (item){
            return item.language === "Node.js";
        });
        res.writeHead(200, {"content-Type": "text/json"});
        res.end(JSON.stringify(data));
    }
    else {
        res.writeHead(404, {"content-Type": "text/html"});
        res.end("No Record Found");
    }
});

server.listen(3000, function(){
    console.log("Listing at port 3000");
})

