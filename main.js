let http = require('http');
let url = require('url');
let app = http.createServer((request, response) =>{
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    if (pathname === '/'){
        let html = `
        <!doctype html>
        <html>
            <head>
                <title>Hello, World</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Hello, World</h1>
            </body>
        </html>
        `;
        response.writeHead(200);
        response.end(html);
    }
});
app.listen(3000);