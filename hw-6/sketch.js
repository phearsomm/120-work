//Variable definitions
let p_x;
let p_y;
let max_p_m = 10;

//SETUP CANVAS
function setup(){

createCanvas(windowWidth, 700);

}

//BEGIN SKETCH!

function draw(){
background('rgb(0, 0, 0)' );

//random random size
let ringsize = random(15, width-15);

//px and y location
p_x = width * 0.5;
p_y = height * 0.5;

p_x += floor(random(15, width-15));
p_y += floor(random(15, height-15));


//ring
let red = floor(random(256));
let yellow = floor(random (256));
let purple = floor( random(256));
strokeWeight( 5 );
stroke(red, yellow, purple);
noFill();
ellipse(p_x, p_y , ringsize );

//center circle
strokeWeight( 5 );
stroke(red, yellow, purple);
noFill();
ellipse( p_x, p_y, ringsize );


//random location

frameRate(36);
}
