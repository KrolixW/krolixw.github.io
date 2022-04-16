<script src="https://telegram.org/js/telegram-web-app.js"></script>
let data = window.Telegram.WebApp.initData;
document.getElementById("demo").innerHTML = "Date : " + Date();
document.getElementById("later").innerHTML = data;
alert(data)