var racerSize = 40;
var startX = 0;
var startY = 100;
var winningSpeed = 2.3;
var averageSpeed = 2;
var losingSpeed = 1.5;
var superLoserSpeed = 1.3;
var racer1X = startX;
var racer2X = startX;
var racer3X = startX;
var racer4X = startX;
var Xspeed = 2;
var Xposition = 0
var playing = false;
var img = img_src;
var img_src = "https://previews.123rf.com/images/clairev/clairev0812/clairev081200012/3952986-Mexican-sombrero-on-white-background-vector-illustration--Stock-Vector.jpg"

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(200, 225, 255);

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);


  strokeWeight(2)

  ellipse(racer1X, startY, racerSize, racerSize);
  ellipse(racer2X, startY * 2, racerSize, racerSize);
  ellipse(racer3X, startY * 3, racerSize, racerSize);
  ellipse(racer4X, startY * 4, racerSize, racerSize);
  

  racer1X = racer1X + winningSpeed;
  racer2X = racer2X + losingSpeed;
  racer3X = racer3X + averageSpeed;
  racer4X = racer4X + superLoserSpeed;
}