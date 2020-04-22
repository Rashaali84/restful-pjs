const http = require('http');
   fs = require('fs');
const port = process.env.PORT || 3000

fs.readFile('./public/index.html', function (err, html) {
    if (err) {
        throw err; 
    }  
  
const server =  http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    });
  
server.listen(port,() => {
  console.log(`Server running at port `+port);
});
