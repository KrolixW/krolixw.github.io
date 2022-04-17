// JavaScript
let firstname = window.Telegram.WebApp.initDataUnsafe.user.first_name;
let lastname = window.Telegram.WebApp.initDataUnsafe.user.last_name;
let clicks = 0;
function add_click(){
    clicks++;
    document.getElementById('button_output').innerText = "Button was clicked "+clicks+" time(s)";
}
document.getElementById('welcome').innerText += " "+firstname +" "+lastname;
document.getElementById('my_butt').onclick(add_click);
