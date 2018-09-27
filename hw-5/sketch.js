//global variables
let p1 = 0;
let p2 = 0;
let p3 = 650;
let p4 = 650;
let mouseAngle = 0;
let mouseRotationRate = 0;

//setup
function setup(){
  createCanvas(650,650);
  background( 'rgb( 144, 180, 184)');
}

//draw board
function draw(){

//BACKGROUND
  background( 'rgb( 144, 180, 184)');

  //background shapes

  push();
  translate( width/2, height/2);
  strokeWeight(20);
  stroke( 'rgb( 48, 99, 123)');
  fill( 'rgb( 94, 32, 27)');
  quad( 0, -325, 325, 0, 0, 325, -325, 0);
  pop();

  //no cursor
  noCursor();

// set rotation mouseRotationRate
mouseRotationRate = (mouseX * 0.2) -30;

// mouse mouseAngle
mouseAngle = mouseAngle + mouseRotationRate;
  //push mouse shape

// center on mouse
translate( mouseX, mouseY);

  push();
  rotate( radians(mouseAngle) );
  noFill();
  strokeWeight(3);
  stroke( 'rgb( 255, 204, 0)');
  ellipse(0, 0, 100, 17);
  ellipse(0, 0, 17, 100);
  ellipse(0, 0, 18);
  ellipse(0, 0, 12);
  pop();

//add fill center
  push();
  fill( 'rgb( 255, 204, 0)');
  noStroke();
  ellipse(0, 0, 6);
  pop();

//variables for background dots
strokeWeight(10);
noFill();
stroke( 'rgb( 154, 132, 43)');

//top left corner dots
point( p1, p2);
point( p1 + 20, p2);
point( p1 + 40, p2);
point( p1 + 60, p2);

//top right corner dots
point(p3, p2);
point(p3 - 20, p2);
point(p3 - 40, p2);
point(p3 - 60, p2);

//bottom left corner dots
point(p1, p4);
point(p1 + 20, p4);
point(p1 + 40, p4);
point(p1 + 60, p4);

//bottom right corner dots
point(p3, p4);
point(p3 - 20, p4);
point(p3 - 40, p4);
point(p3 - 60, p4);
//point( p2, p2);

p1 = p1 + 10;
p2 = p2 + 10;
p3 = p3 - 10;
p4 = p4 - 10;

}
