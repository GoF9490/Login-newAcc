const template = require('./template');
const fs = require('fs');
const qs = require('querystring');
const alert_tem = require('./alert');

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
 
        fs.readFile('./lib/db.json', 'utf8', (error, jsonFile) =>{ // db쓰면 while post.id == acc_id 이후 있으면 패스워드 체크
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
            response.write(alert_tem.text('아이디는 6자 이상이여야 합니다.'));
            response.end();
        } else if (post.pw.length < 8){
            response.write(alert_tem.text('패스워드는 8자 이상이여야 합니다.'));
            response.end();
        } else if (post.nickname.length < 3){
            response.write(alert_tem.text('닉네임은 3글자 이상이여야 합니다.'));
            response.end();
        } else if (post.age === ''){
            response.write(alert_tem.text('나이를 입력해주세요.'));
            response.end();
        } else if (post.answer.length < 1){
            response.write(alert_tem.text('선택한 질문에 대한 답변을 입력해주세요. 추후 비밀번호 분실시에 이용됩니다.'));
            response.end();
        } else {
            fs.writeFile('./lib/db.json', JSON.stringify(post), ()=>{ // db대신
                response.writeHead(302, {Location: `/`});
                response.end();
            });
        }

        
    });
}

exports.findID = (request, response)=>{

}

exports.findPW = (request, response)=>{
    let html = template.findPW();

    response.writeHead(200);
    response.end(html);
}

exports.findPW_process = (request, response)=>{
    let body = '';
    request.on('data', (data)=>{
        body = body + data;
    });
    request.on('end', ()=>{
        let post = qs.parse(body);

        fs.readFile('./lib/db.json', 'utf8', (error, jsonFile) =>{ // db쓰면 while post.id == acc_id 이후 있으면 패스워드 체크
            if (error) throw error;

            let jsonData = JSON.parse(jsonFile);
            if (post.id === jsonData.id){
                if (post.question === jsonData.question && post.answer === jsonData.answer){
                    response.writeHead(200);
                    response.end(jsonData.pw);
                } else {
                    response.write(alert_tem.text('질문과 답이 올바르지 않습니다. 다시 확인해주세요.'));
                    response.end();
                }
            } else {
                response.write(alert_tem.text('존재하지 않는 아이디 입니다.'));
                response.end();
            }
        });
    });
}