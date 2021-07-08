const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const palette = document.getElementById('lineColor');
const brush = document.getElementById('lineWidth');
const clearButton = document.getElementById('clearBtn');

let brushColor = 'blue';
let brushWidth = '5';
let isDrawing = false;


const changeColor = function() {
    brushColor = this.value;
};

const clearCanvas = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
};

const changeWidth = function() {
    brushWidth = this.value;
};

const start = function(event) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
};

const draw = function(event) {
    if (isDrawing) {

        if (event.which == 1) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.strokeStyle = brushColor;
        context.lineWidth = brushWidth;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.stroke();
        } else if (event.which == 3) {
            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.strokeStyle = 'white';
            context.lineWidth = brushWidth;
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.stroke();
        }
    } 
};

const stopDraw = function() {
    if (isDrawing) {
        context.closePath();
        isDrawing = false;
    }
   
};


canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDraw);

canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

palette.addEventListener('input', changeColor);
brush.addEventListener('input', changeWidth);
clearButton.addEventListener('click', clearCanvas);

