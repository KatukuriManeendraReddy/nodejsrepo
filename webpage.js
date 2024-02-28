var http=require('http');
var fsr=require('fs');
let myServer=http.createServer(function(request,response){
    let url=request.url;
    if (url=="/"){
        let frontpagedata=fsr.readFileSync("./pages/frontpage.html");
        response.write(frontpagedata);   
    }
    else if(url=="/mobile") {
        let mobiledata=fsr.readFileSync("./pages/mobilepage.html");
        response.write(mobiledata);
    }
    else if(url=="/kitchen"){
        let homeandkitchendata=fsr.readFileSync("./pages/homeandkitcenpage.html");
        response.write(homeandkitchendata);
    }
    else if(url=="/computers"){
        let computersdata=fsr.readFileSync("./pages/computers.html");
        response.write(computersdata);
    }
    else if(url=="/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics"){
        let electronicsdata=fsr.readFileSync("./pages/electronics.html");
        response.write(electronicsdata);
    }
    else if(url=="/todaysdeal"){
        let todaysdealdata=fsr.readFileSync("./pages/todaysdeal.html");
        response.write(todaysdealdata);
    }
    else if(url=="/newrelease"){
        let newdata=fsr.readFileSync("./pages/newrelease.html");
        response.write(newdata);
    }
    response.end();
});
myServer.listen(4000);
