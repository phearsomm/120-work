let orbsX = [ 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600];
let orbsY = [ 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600];



function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(0);
  //custom orb function
for (let idx = 0; idx < orbsX.length; idx++){
  for (let idy = 0; idy < orbsY.length; idy++){
    orbsObj(orbsX[idx], orbsY[idy] , 1.0, 1.0);
  }
}
//custom square function
mSquare(0, 0, 1.0, 1.0);
}//end draw

//create the custom orb function
function orbsObj( pos_x, pos_y, scale_x, scale_y) {
  push(); //sandbox
translate( pos_x, pos_y);
scale(scale_x, scale_y);

  //draw it
  stroke(212, 175, 55);
  strokeWeight(1);
  fill(102, 205, 170);
  ellipse( 0, 0, 20, 20)
  noStroke();
  fill(255, 255, 255);
  ellipse(0, 0, 5, 5);
  pop();
}

//custom square function
function mSquare(pos_x, pos_y, scale_x, scale_y){
  push();
  noCursor();
  //sandbox
translate(0, 0);
 scale( scale_x, scale_y);

//draw it
  noStroke();
  fill(random(40, 250));
  rect(mouseX, mouseY, 15, 15);
  pop();
}
