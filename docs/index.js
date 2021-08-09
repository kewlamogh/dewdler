let pen = document.getElementById("c").getContext("2d");
let mouse;
window.onload = (e) => {
    mouse = {
        isDown: false,
        pos: {x: e.clientX, y: e.clientY}
    }
}
window.onmousemove = (e) => {
    mouse.pos.x = e.clientX;
    mouse.pos.y = e.clientY;
}
window.onmousedown = () => {
    mouse.isDown = true;
}
window.onmouseup = () => {
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
