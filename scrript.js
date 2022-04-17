// function make_blue(){
//     let color;
//     color = prompt("Please choose a color:","#FFFFFF");
//     window.Telegram.WebApp.MainButton.color = color;
// }
// document.getElementById("demo").innerHTML = "Date : ";
// window.Telegram.WebApp.MainButton.color = "#FF00FF"
// window.Telegram.WebApp.MainButton.setText("Ora!");
// window.Telegram.WebApp.MainButton.onClick(make_blue);
// window.Telegram.WebApp.MainButton.show();
window.Telegram.WebApp.ready();
const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")

// previous mouse positions
// They will be null initially
let prevX = null
let prevY = null

// How thick the lines should be
ctx.lineWidth = 5

window.addEventListener("mousemove", (e) => {
    // initially previous mouse positions are null
    // so we can't draw a line
    if(prevX == null || prevY == null){
        // Set the previous mouse positions to the current mouse positions
        prevX = e.clientX
        prevY = e.clientY
        return
    } 

    // Current mouse position
    let currentX = e.clientX
    let currentY = e.clientY

    // Drawing a line from the previous mouse position to the current mouse position
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    // Update previous mouse position
    prevX = currentX
    prevY = currentY
})

// alert(data);

