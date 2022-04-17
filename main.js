// JavaScript
let name = window.Telegram.WebApp.initDataUnsafe.user.first_name;
let surname = window.Telegram.WebApp.initDataUnsafe.user.last_name;
document.getElementById('welcome').innerText += 
"${name} ${surname}";
