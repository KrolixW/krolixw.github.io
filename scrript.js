function make_red(){
    window.Telegram.WebApp.MainButton.color = "#FF0000";
    window.Telegram.WebApp.MainButton.onClick(make_blue);
}
function make_blue(){
    window.Telegram.WebApp.MainButton.color = "#00FF00";
    window.Telegram.WebApp.MainButton.onClick(make_red);
}
document.getElementById("demo").innerHTML = "Date : ";
window.Telegram.WebApp.MainButton.color = "#FF00FF"
window.Telegram.WebApp.MainButton.setText("Ora!");
window.Telegram.WebApp.MainButton.onClick(make_blue);
window.Telegram.WebApp.MainButton.show();
window.Telegram.WebApp.ready();
// alert(data);

