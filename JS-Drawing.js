var mycanvas = document.getElementById('canvas');
var context = mycanvas.getContext("2d");

context.beginPath();

//background w/ Codecademy grey #2
context.fillStyle = "#e6e7e8";
context.fillRect(0,0,200,200);
context.strokeRect (0,0,200,200);

//upper bar
context.fillStyle = "#204056";
context.fillRect(25,25,150,6);

//vert left
context.fillRect(25,25,6,100);

//bottom
context.fillRect(25,125,150,6);

//vert right
context.fillRect(169,55,6,70);

//center swirl
context.fillRect(40,55,130,6);
context.fillRect(40,55,6,60);
context.fillRect(40,110,55,6);
context.fillRect(89,70,6,45);
context.fillRect(55,70,40,6);

//text lines
context.fillRect(105,70,55,6);
context.fillRect(105,83,55,6);
context.fillRect(105,96,55,6);
context.fillRect(105,109,55,6);

//dots
context.fillRect(40,40,6,6);
context.fillRect(52,40,6,6);
context.fillRect(64,40,6,6);
