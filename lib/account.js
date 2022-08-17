const template = require('./template');
const fs = require('fs');
const qs = require('querystring');

exports.login = (request, response)=>{
    let html = template.login();

    response.writeHead(200);
    response.end(html);
}

exports.login_process = (request, response)=>{
    let body = '';
    request.on('data', (data)=>{
        body = body + data;
    });
    request.on('end', ()=>{
        let post = qs.parse(body);
 
        fs.readFile('./lib/db.json', 'utf8', (error, jsonFile) =>{
            if (error) throw error;

            let jsonData = JSON.parse(jsonFile);

            if (post.id === jsonData.id && post.pw === jsonData.pw){
                response.writeHead(200);
                response.end('success');
            } else {
                response.writeHead(200);
                response.end('fail');
            }
        });
    });
}

exports.newAcc = (request, response)=>{
    let html = template.newAcc();

    response.writeHead(200);
    response.end(html);
}

exports.newAcc_process = (request, response)=>{
    let body = '';
    request.on('data', (data)=>{
        body = body + data;
    });
    request.on('end', ()=>{
        let post = qs.parse(body);

        if (post.id.length < 6){
            response.write(`<script charset="utf-8">alert('asdf가나다.');</script>`);
            response.write(`<script>history.back()</script>`);
            response.end();
        } else {
            fs.writeFile('./lib/db.json', JSON.stringify(post), ()=>{ // db대신
                response.writeHead(302, {Location: `/`});
                response.end();
            });
        }

        
    });
}

exports.idInquery = (request, response)=>{

}

exports.pwInquery = (request, response)=>{

}