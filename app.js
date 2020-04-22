const http = require('http');
const port = process.env.PORT || 3000
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./public');

const server = http.createServer(function (req, res) {

    fileServer.serve(req, res);

});

server.listen(port, () => {
    console.log(`Server running at port ` + port);
});


