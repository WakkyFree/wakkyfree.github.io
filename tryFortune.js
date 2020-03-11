function tryFortune() {
    var resultInt = Math.floor(Math.random () * 7);
    var tryDay = new Date();
    var year = tryDay.getFullYear();
    var month = tryDay.getMonth() + 1;
    var day = tryDay.getDate();
    var ymdDate =  "最後におみくじを引いた日：" + year + "年" + month + "月" + day + "日";
    switch (resultInt) {
        case 0 : resultText = "大凶";   resultClass = "bad";   break;
        case 1 : resultText = "凶";     resultClass = "bad";   break;
        case 2 : resultText = "末吉";   resultClass = "normal";   break;
        case 3 : resultText = "小吉";   resultClass = "normal";   break;
        case 4 : resultText = "中吉";   resultClass = "good";   break;
        case 5 : resultText = "吉";     resultClass = "good";   break;
        default : resultText = "大吉";  resultClass = "good";   break;
    }
    document.getElementById("result").textContent = resultText;
    document.getElementById("result").className = resultClass;
    document.getElementById("date").textContent = ymdDate;
}
