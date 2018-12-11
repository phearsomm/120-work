var score = 0;
let candy;
let mouth;

function preload(){
  window.alert('Use ARROW keys to move the candy! Reload Page to Restart!');
}


function setup(){
  //create canvas
  createCanvas(600, 600);
//create new Candy
//candy = new Candy(width / 2, height / 2, 50);
}
function draw(){
  background('black');

  //call candy methods

  candy.display();
  candy.mouthCheck();
  mouth.display();
  score.display();
}

//////////////////////////////////////////
//CANDY class
/////////////////////////////////////////

class Candy {
  constructor(c, y, size){
  this.size = size;
  this.rad = this.size / 2;
  this.posX = x;
  this.posY = y;
  this.diameter = 50;
}
display(){
  push();
  translate(this.posX, this.posY);
  fill('red');
  noStroke();
  ellipse(this.posX, this.posY, this.diameter, this.diameter);
  fill('white');
  ellipse(this.posX, this.posY, this.diameter * 0.9, this.diameter * 0.9);
  fill('red');
  ellipse(this.posX, this.posY, this.diameter * 0.8, this.diameter * 0.8);
  fill('white');
  ellipse(this.posX, this.posY, this.diameter * 0.7, this.diameter * 0.7);
  fill('red');
  ellipse(this.posX, this.posY, this.diameter * 0.6, this.diameter * 0.6);
  fill('white');
  ellipse(this.posX, this.posY, this.diameter * 0.5, this.diameter * 0.5);
  pop();
}
mouthCheck(){
  if ((this.posX +10) >= (this.xMouth +10) && (this.posX -10) <= (this.xMouth - 10) && (this.posY + 10) >= (this.yMouth + 10) && (this.posY -10) <= (this.yMouth - 10)){
    score++;
    this.posX = random(1, windowWidth);
    this.posY = random(1, windowHeight);
}

}
}

/////////////////////////////////////////////
// mouth class
////////////////////////////////////////////

class Mouth {
  constructor( x, y, color, size){
    this.color = ('red');
    this.size = 50;
    this.xMouth = windowWidth / 2;
    this.yMouth = windowHeight / 2;

  }
  display(){
    fill(this.color);
    noStroke();
    ellipse(this.xMouth, this.yMouth, this.size, this.size);
  }
}

function drawScore(){
  // Draw score
  fill(0, 255, 255);
  textSize(35);
  text("Score: " + score, 20, 30);
}
//control Candy
//function keyIsPressed() {
//  if (keyCode === LEFT_ARROW) {
//    xCandy -= 10;
//  } else if (keyCode === RIGHT_ARROW) {
//    xCandy += 10;
//  } else if (keyCode === UP_ARROW) {
//    yCandy += 10;
//  } else if (keyCode === DOWN_ARROW) {
//    yCandy -=10;
//  }
//}
