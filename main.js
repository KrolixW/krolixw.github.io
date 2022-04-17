// JavaScript
let firstname = window.Telegram.WebApp.initDataUnsafe.user.first_name;
let lastname = window.Telegram.WebApp.initDataUnsafe.user.last_name;
let clicks = 0;
function add_click(){
    clicks++;
    document.getElementById('click_counter').innerText = "Button was clicked "+clicks+" time(s)";
}
document.getElementById('welcome').innerText += " "+firstname +" "+lastname;
document.getElementById('clicker').onclick = add_click;
