function make_blue(){
    let color;
    color = prompt("Please choose a color:","#FFFFFF");
    window.Telegram.WebApp.MainButton.color = color;
}
document.getElementById("demo").innerHTML = "Date : ";
window.Telegram.WebApp.MainButton.color = "#FF00FF"
window.Telegram.WebApp.MainButton.setText("Ora!");
window.Telegram.WebApp.MainButton.onClick(make_blue);
window.Telegram.WebApp.MainButton.show();
window.Telegram.WebApp.ready();
// alert(data);

