let pen = document.getElementById("c").getContext("2d");
let mouse = {isDown: false};
document.body.onload = (e) => {
    mouse = {
        isDown: false,
        pos: {x: e.clientX, y: e.clientY}
    }
}
document.body.onmousemove = (e) => {
    mouse.pos.x = e.clientX;
    mouse.pos.y = e.clientY;
}
document.body.onmousedown = () => {
    mouse.isDown = true;
}
document.body.onmouseup = () => {
    mouse.isDown = false;
}

function main() {
    if (mouse.isDown) {
        pen.beginPath();
        pen.moveTo(mouse.pos.x, mouse.pos.y);
        pen.lineTo(mouse.pos.x, mouse.pos.y);
        pen.stroke();
    }
    requestAnimationFrame(main);
}

main();
