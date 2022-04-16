
let data;
document.getElementById("demo").innerHTML = "Date : " + Date();
data = window.Telegram.WebApp.initData;
document.getElementById("test").innerHTML(data);
window.Telegram.WebApp.ready();
// alert(data);

