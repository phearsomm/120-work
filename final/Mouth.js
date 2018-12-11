var xMouth = windowWidth / 2;
var yMouth = windowHeight / 2;
var mouthDiameter = 50;

function Mouth(){
  //draw Mouth
  fill('red');
  noStroke();
  ellipse(xMouth, yMouth, mouthDiameter, mouthDiameter);
}
