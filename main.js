canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/
function beginPath() {
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.react(x="150", y="143", width="430", height="200");
ctx.stroke();
}
/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/
function beginPath() {
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.ark(x="250", y="210", r="40", startAngle2, Math.PIendAngle);
ctx.stroke();
}
// Similarly, create a black circle with position 350 and 210
function beginPath() {
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.ark(x="350", y="210", startAngle2, Math.PIendAngle);
ctx.stroke();
}
// Similarly, create a red circle with position 210 and 40
function beginPath() {
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.ark(x="210", y="40", startAngle2, Math.PIendAngle);
ctx.stroke()
}
// Similarly, create an orange circle with position 300 and 250
function beginPath() {
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.ark(x="300", y="250", startAngle2, Math.PIendAngle);
ctx.stroke();
}
// Similarly, create a green circle with position 400 and 250
function beginPath() {
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.ark(x="400", y="250", startAngle2, Math.PIendAngle);
ctx.stroke();
}