const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

let drawing = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = 5;
context.lineCap = 'round';
context.strokeStyle = '#000';

function startPosition(e) {
    drawing = true;
    draw(e);
}

function endPosition() {
    drawing = false;
    context.beginPath();
}

function draw(e) {
    if (!drawing) return;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
