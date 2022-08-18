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
            response.write(`<head><meta charset="UTF-8"></head>`)
            response.write(`<script charset="UTF-8">alert('아이디는 6자리 이상이여야 합니다.');</script>`);
            response.write(`<script>history.back()</script>`);
            response.end();
        } else if (post.pw.length < 8){
            response.write(`<head><meta charset="UTF-8"></head>`)
            response.write(`<script charset="UTF-8">alert('패스워드는 8자리 이상이여야 합니다.');</script>`);
            response.write(`<script>history.back()</script>`);
            response.end();
        } else if (post.nickname.length < 3){
            response.write(`<head><meta charset="UTF-8"></head>`)
            response.write(`<script charset="UTF-8">alert('닉네임은 3글자 이상이여야 합니다.');</script>`);
            response.write(`<script>history.back()</script>`);
            response.end();
        } else if (post.age === ''){
            response.write(`<head><meta charset="UTF-8"></head>`)
            response.write(`<script charset="UTF-8">alert('나이를 입력해주세요.');</script>`);
            response.write(`<script>history.back()</script>`);
            response.end();
        } else if (post.answer.length < 1){
            response.write(`<head><meta charset="UTF-8"></head>`)
            response.write(`<script charset="UTF-8">alert('선택한 질문에 대한 답변을 입력해주세요. 추후 비밀번호 분실시에 이용됩니다.');</script>`);
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