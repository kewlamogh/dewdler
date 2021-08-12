let pen = document.getElementById("c").getContext("2d");
let mouse = {isDown: false};
let line = {size: 10, color: "black", colorResetKeyCode: 8};
document.body.onload = e => {
    mouse = {
        isDown: false,
        pos: {x: e.clientX, y: e.clientY}
    }
}
document.body.onmousemove = e => {
    mouse.pos.x = e.clientX;
    mouse.pos.y = e.clientY - 85;
}
document.body.onmousedown = () => {
    mouse.isDown = true;
}
document.body.onmouseup = () => {
    mouse.isDown = false;
}
document.getElementById("color").onclick = () => {
    line.color = document.getElementById("penCol").value;
}
document.getElementById("erase").onclick = ev => {
    line.color = "lightgray" 
}

function main() {
    if (mouse.isDown) {
        pen.lineWidth = line.size;
        pen.strokeStyle = (line.color == "eraser" ? "lightgray" : line.color);
        pen.beginPath();
        pen.moveTo(mouse.pos.x, mouse.pos.y);
        pen.lineTo(mouse.pos.x + 1, mouse.pos.y);
        pen.stroke();
    }
    requestAnimationFrame(main);
}

main();
