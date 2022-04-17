// JavaScript
let firstname = window.Telegram.WebApp.initDataUnsafe.user.first_name;
let lastname = window.Telegram.WebApp.initDataUnsafe.user.last_name;
let clicks = 0;
const buttons = document.getElementsByTagName("button");
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle); 
    clicks++;
    document.getElementById('click_counter').innerText = "Button was clicked "+clicks+" time(s)";
  }
// function add_click(){
// }
for (const button of buttons){
    button.addEventListener('click',createRipple);
}
document.getElementById('welcome').innerText += " "+firstname +" "+lastname;
// document.getElementById('clicker').onclick = add_click;
