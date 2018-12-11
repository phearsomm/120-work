var xCandy = random (1, windowWidth);
var yCandy = random (1, windowHeight);
var diameter = 50;

function Candy(){
  //draw Candy
  fill('red');
  noStroke();
  ellipse(xCandy, yCandy, diameter, diameter);
  fill('white');
  ellipse(xCandy, yCandy, diameter * 0.9, diameter * 0.9);
  fill('red');
  ellipse(xCandy, yCandy, diameter * 0.8, diameter * 0.8);
  fill('white');
  ellipse(xCandy, yCandy, diameter * 0.7, diameter * 0.7);
  fill('red');
  ellipse(xCandy, yCandy, diameter * 0.6, diameter * 0.6);
  fill('white');
  ellipse(xCandy, yCandy, diameter * 0.5, diameter * 0.5);

}
