var http = require("http");
var url = require("url");
var fs = require("fs");
var instance = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    var requestedURL = url.parse(request.url).pathname;

    if ((requestedURL == "/" || requestedURL == "/home") ) {
        fs.readFile("Home1.html",(error,data)=>{
            if(error)
                console.log("error Occured");
            else{
                response.write(data);
                response.end();
            }
        })
    }
    else if ((requestedURL == "/register" ) ) {
        fs.readFile("register.html",(error,data)=>{
            if(error)
                console.log("error Occured");
            else{
                response.write(data);
                response.end();
            }
        })
    }
    else if ((requestedURL == "/viewDetails" ) ) {
        var data = url.parse(request.url,true).query;
        response.write("Username : "+data.username+"<br>");
        response.write("Email : "+data.email+"<br>");
        response.write("Password : "+data.password+"<br>");
        response.write("Address : "+data.address+"<br>");
        response.write("<a href='/home'style='background-color: red;'>Go back</a>")
        response.end(); 
    }
    else {
        response.write("<h1>404 - Page Not Found</h1>");
        response.end();
    }
    
});

instance.listen(3000, () => {
    console.log(`Server connection established`);
});