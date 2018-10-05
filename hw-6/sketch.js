//Define variables
let r1 = 255;
let b1 = 255;
let g1 = 255;
let bgColor;
let ptx;
let pty;
let ptWidth = 10;
let ptMvt = 1;
let backCircleSize;
let circleMin = 10;
let circleMax;

//setup
function setup(){
  bgColor = color ( 'rgb( 43, 43, 43)');
  createCanvas(windowWidth, 510);
  background (bgColor);
  ptx = 0;
  pty = 0;
}

//draw
function draw(){
  //background(bgColor);
  //translate
  translate ( width * .5, height *.5);
  centerX = width /2;
  centerY = height /2;

//color algorithms
  r1 = abs ((width - mouseX) % width);
  b1 = abs ((height - mouseY) % height);
  g1 = random(255);

//background circle
circleMax = width - 10;
let backCircleSize = map( mouseX, 0, width, circleMin, circleMax);
fill (b1, b1, r1);
ellipse( 0, 0, backCircleSize);

//triangles
noStroke();
fill( r1, b1, g1);
  triangle(-94, 0, 94, 0, 0, 164);
  fill(b1, g1, r1);
  triangle(-94, 0, -186, -162, 0, -162);
  fill( g1, r1, b1);
  triangle(94, 0, 0, -162, 186, -162);

//randomly moving and upating points
fill ( 'rgb( 173, 150, 45)');
ellipse(ptx, pty, ptWidth);
ellipse(ptx*2, pty*2, ptWidth);
ellipse(ptx*3, pty*3, ptWidth);
ellipse(ptx*4, pty*4, ptWidth);

//define movement for random position
ptx += floor(random(-ptMvt, ptMvt +1));
pty += floor(random(-ptMvt, ptMvt +1));

}
  function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
//  background(bgColor);
}

//fullscreen function
function mousePressed(){
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
