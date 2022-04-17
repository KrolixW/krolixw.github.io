// JavaScript
let firstname = window.Telegram.WebApp.initDataUnsafe.user.first_name;
let lastname = window.Telegram.WebApp.initDataUnsafe.user.last_name;
document.getElementById('welcome').innerText += " "+firstname +" "+lastname;
