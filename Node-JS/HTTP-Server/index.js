var http = require("http");
var fs = require("fs")
var {STATUS , TYPE} =require("./utils/utility.js")
dotenv = require("dotenv");
dotenv.config();  

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCESS,TYPE);
    if(request.url == '/' || request.url =='/home'){
        var data = fs.readFileSync('home.html')
                response.write(data);
    }
    else if(request.url == '/about'){
        var data = fs.readFileSync('about.html')
                response.write(data);
    }

    else if(request.url == '/contact'){
       var data = fs.readFileSync('contact.html')
                response.write(data);
    }
    else{
         var data = fs.readFileSync('pageNotFoound.html')
                response.write(data);
    }
    response.end();
})
instance.listen(process.env.PORT,()=>{
    console.log("Server connection established");
});