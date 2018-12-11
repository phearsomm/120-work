var score = 0;
function preload(){
  window.alert('Use ARROW keys to move the candy! Reload Page to Restart!');
}


function setup(){
  //create canvas
  createCanvas(600, 600);
//  resetSketch();
}
function draw(){
  background('black');
  //call candy
  this.Candy()
  this.Mouth()
  this.drawScore()


//check for collision with Mouth
if ((xCandy +10) >= (xMouth +10) && (xCandy -10) <= (xMouth - 10) && (yCandy + 10) >= (yMouth + 10) && (yCandy -10) <= (yMouth - 10)){
  score++;
  xCandy = random(1, windowWidth);
  yCandy = random(1, windowHeight);
}


}
//control Candy
function keyIsPressed() {
  if (keyCode === LEFT_ARROW) {
    xCandy -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    xCandy += 10;
  } else if (keyCode === UP_ARROW) {
    yCandy += 10;
  } else if (keyCode === DOWN_ARROW) {
    yCandy -=10;
  }
}
