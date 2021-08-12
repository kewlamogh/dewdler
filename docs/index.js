let pen = document.getElementById("c").getContext("2d");
let mouse = {isDown: false};
let line = {size: 10, color: "black"};
document.body.onload = e => {
    mouse = {
        isDown: false,
        pos: {x: e.clientX, y: e.clientY}
    }
}
document.body.onmousemove = e => {
    mouse.pos.x = e.clientX;
    mouse.pos.y = e.clientY;
}
document.body.onmousedown = () => {
    mouse.isDown = true;
}
document.body.onmouseup = () => {
    mouse.isDown = false;
}
document.body.onkeydown = ev => {
    line.color = (ev.keyCode == 16 ? prompt("Enter new color (or type 'eraser' for the eraser)") : line.color) 
}

function main() {
    if (mouse.isDown) {
        pen.lineWidth = line.size;
        pen.strokeStyle = (line.color == "eraser" ? "lightgray" : line.color);
        pen.beginPath();
        pen.moveTo(mouse.pos.x, mouse.pos.y + 50);
        pen.lineTo(mouse.pos.x + 1, mouse.pos.y + 50);
        pen.stroke();
    }
    requestAnimationFrame(main);
}

main();
