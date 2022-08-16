let template = require('./template');

exports.login = (request, response)=>{
    let html = template.login();

    response.writeHead(200);
    response.end(html);
}

exports.newAcc = (request, response)=>{
    let html = template.newAcc();

    response.writeHead(200);
    response.end(html);
}

exports.idInquery = (request, response)=>{

}

exports.pwInquery = (request, response)=>{

}