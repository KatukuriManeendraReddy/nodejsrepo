else if(url=="/mobile") {
    let mobiledata=fsr.readFileSync("./pages/mobilepage.html");
    response.write(mobiledata);
}
else if(url=="/kitchen"){
    let homeandkitchendata=fsr.readFileSync("./page/homeandkitcenpage.html");
    response.write(homeandkitchendata);
}