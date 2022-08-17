let css = require('./template.css.js');

exports.login = ()=>{
    return  `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <title>LoginPage</title>
            <meta charset="UTF-8">
            <style>
                ${css.login()}
            </style>
        </head>
        <body>
            <h1>Login</h1>
            <form action="/login_process" method="post">
                <p>ID</p>
                <input type="text" name="id" class="loginText">
                <p>PASSWORD</p>
                <input type="password" name="pw" class="loginText">
                <input type="submit" value="Login" id="loginButton">
            </form>
            <ul>
                <li class="findText"><a href="/newAcc">회원가입</a></li>
                <li class="findText"><a href="/findId">아이디 찾기</a></li> 
                <li class="findText"><a href="/findPw">비밀번호 찾기</a></li>
            </ul>
        </body>
        </html>
        `;//네이버에 ::before 들어가있던데 뭐지?
}

exports.newAcc = ()=>{
    return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>newAcc</title>
        <style>
            ${css.newAcc()}
        </style>
    </head>
    <body>
        <div class="contents">
            <form action="/newAcc_process" method="post">
                <p class="textContent">ID : <input type="text" class="textBox" name="id"></p>
                <p class="textContent">Password : <input type="password" class="textBox" name="pw"></p>
                <p class="textContent">Nick Name : <input type="text" class="textBox" name="nickname"></p>
                <p class="textContent">Age : <input type="number" class="textBox" name="age"></p>
                <p class="textContent">
                    Gender : 
                    <input type="radio" id="man" name="gender" value="man" class="radio_gender"><label for="man">Man</label>
                    <input type="radio" id="woman" name="gender" value="woman"><label for="woman">Woman</label>
                </p>
                <p class="textContent">
                    Question : 
                    <select name="question" class="comboBox">
                        <option value="1">질문1</option>
                        <option value="2">질문2</option>
                        <option value="3">질문3</option>
                    </select>
                </p>
                <p class="textContent">Answer : <input type="text" class="textBox" name="answer"></p>
                <div class="button">
                    <input type="submit" value="ok">
                    <input type="button" onclick="history.back()" value="back" style="float: right;">
                </div>
            </form>
        </div>
    </body>
    </html>
    `
}