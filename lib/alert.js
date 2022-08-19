exports.text = (_text)=>{
    return `
        <head><meta charset="UTF-8"></head>
        <script charset="UTF-8">alert('${_text}');</script>
        <script>history.back()</script>
    `;
}