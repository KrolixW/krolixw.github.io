// JavaScript
let firstname = window.Telegram.WebApp.initDataUnsafe.user.first_name;
let lastname = window.Telegram.WebApp.initDataUnsafe.user.last_name;
const mainbutton = window.Telegram.WebApp.MainButton;
const closing =  window.Telegram.WebApp.close;
let clicks = 0;
const buttons = document.getElementsByClassName("button");
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter-10}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle); 
}
function add_click(){
    if(clicks >= 5 & mainbutton.isVisible != true){
        mainbutton.show();
        mainbutton.setText('What is happening?');
    }
    if (clicks >= 25 & mainbutton.isProgressActive != true){
        mainbutton.showProgress();
        mainbutton.setText('My powers are returning!');
    }
    if (clicks >= 50 & mainbutton.isActive != true){
        mainbutton.enable();
        mainbutton.setText('Congratulation! You may leave now!');
        mainbutton.onClick(closing);

    }
    clicks++;
    document.getElementById('click_counter').innerText = "Button was clicked "+clicks+" time(s)";
}
for (const button of buttons){
    button.addEventListener('click',createRipple);
}
document.getElementById('welcome').innerText += " "+firstname +" "+lastname;
document.getElementById('clicker').onclick = add_click;
