let http = require('http');
let url = require('url');
let account = require('./lib/account.js');

let app = http.createServer((request, response) =>{
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    if (pathname === '/'){
        account.login(request, response);
    } else if (pathname === '/login_process'){
        account.login_process(request, response);
    } else if (pathname === '/newAcc'){
        account.newAcc(request, response);
    } else if (pathname === '/newAcc_process'){
        account.newAcc_process(request, response);
    } else if (pathname === '/findId'){

    } else if (pathname === '/findPw'){

    } else {
        response.writeHead(404);
        response.end("Not Found");
    }
});
app.listen(3000);