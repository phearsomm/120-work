// Maxwell Briggs, animation sketch
// create pearl

let pearlsize = 88

// pearltwosize

let pearltwosize = pearlsize * .87;

//orb var

let orbsize = 179

// orb 2 size

let orbsizetwo = orbsize * .425;

// rotation information

let rotationRate = 0;
let Angle = 0;

//sphere size

let sphereH = 0;
let sphereW = 0;

// define pointP

let pointP = 10;

function setup(){
  //setup steps
  createCanvas( windowWidth, 1000 );
}

function draw(){
//no mouse
  background ( 'rgb(125, 109, 104)' );
  noCursor();

//expanding circles

push();
translate( width/2, height/2 );
stroke( 'rgb(255, 142, 130)');
fill( 'rgb(255, 142, 130)' );
ellipse( 0, 0, sphereW, sphereH );
sphereH = sphereH + 5;
sphereW = sphereW + 5;

pop();

//update values
  push();
  frameRate( 36 );
  translate( mouseX, mouseY );
  rotationRate = (mouseY * .04) - 15;
  Angle = Angle + rotationRate;
  rotate( radians(Angle) );

  //Outer gold ring

  push();
  strokeWeight( 3 );
  stroke( 'rgb(194, 184, 113)' );
  noFill();
  ellipse( 0, -13, 496 );
  pop();

//gold triangle upper

  push();
  stroke( 'rgb(194, 184, 113)' );
  noFill();
  strokeWeight( 3 );
  triangle( -104, -160, 104, -160, 0, -340 );
  pop();

//gold square

  push();
  stroke( 'rgb(194, 184, 113)' );
  noFill();
  strokeWeight( 3 );
  rect( -172, -160, 343, 325 );
  pop();

  //black triangle

  push();
  stroke( 'rgb(194, 184, 113)' );
  fill( 'rgb(0, 0, 0)' );
  strokeWeight( 3 );
  triangle( -228, 130, 228, 130, 0, -260 );
  pop();

  // 3 outer circles

  push();
  strokeWeight( 3 );
  stroke( 'rgb(194, 184, 113)' );
  fill( 'rgb(125, 109, 104)' );
  ellipse( -152, 86, pearlsize );
  ellipse( 152, 86, pearlsize );
  ellipse( 0, -173, pearlsize );
  pop();

  // red circle

  push();
  strokeWeight( 3 );
  stroke( 'rgb(194, 184, 113)' );
  fill( 'rgb(138, 32, 32)' );
  ellipse( 0, 0, 262 );
  pop();
  //
  //teal square

  push();
  stroke( 'rgb(194, 184, 113)' );
  fill( 'rgb(33, 177, 145)' );
  strokeWeight( 3 );
  quad( -130, 0, 0, -130, 130, 0, 0, 130 );
  pop();

  //orb one

  push();
  strokeWeight( 3 );
  stroke( 'rgb(194, 184, 113)' );
  fill( 'rgb(0, 0, 0)' );
  ellipse( 0, 0, orbsize );
  pop();

  //teal triangle

  push();
  stroke( 'rgb(194, 184, 113)' );
  fill( 'rgb( 33, 177, 145 )' );
  strokeWeight( 3 );
  triangle( -76, -43, 76, -43, 0, 86 );
  pop();

  //orb 2

  push();
  strokeWeight( 3 );
  stroke( 'rgb(194, 184, 113)' );
  fill( 'rgb(0, 0, 0)' );
  ellipse( 0, 0, orbsizetwo );
  pop();

  pop();
}
