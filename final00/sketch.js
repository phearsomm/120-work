var score = 0;
let candy;
//color = ('red');
function preload(){
  window.alert('Use ARROW keys to move the candy! Reload Page to Restart!');
}


function setup(){
  //create canvas
  createCanvas(600, 600);
//create new Candy
candy = new Candy((random(1, 600)), (random(1, 600)), 50, 'red');
}
function draw(){
  background('black');

  fill('white');
  ellipse(300, 300, 40, 40);

  fill(0, 255, 255);
  textSize(35);
  text("Score: " + score, 20, 30);



  //call candy methods

  candy.display();
  candy.mouthCheck();
  score.display();
}

//////////////////////////////////////////
//CANDY class
/////////////////////////////////////////

class Candy {
  constructor(x, y, size, color){
  this.size = size;
//  this.rad = (this.size / 2);
  this.color = color;
  this.posX = (random(1, 600));
  this.posY = (random(1, 600));
  //this.diameter = 50;
}
display(){
  push();
  translate(this.posX, this.posY);
  fill('red');
  noStroke();
  ellipse(0, 0, this.size, this.size);
  pop();
}
mouthCheck(){
  if ((this.posX +10) >= ((windowWidth / 2) +10) && (this.posX -10) <= ((windowWidth / 2) - 10) && (this.posY + 10) >= ((windowHeight / 2) + 10) && (this.posY -10) <= ((windowHeight / 2) - 10)){
    score++;
    this.posX = random(1, windowWidth);
    this.posY = random(1, windowHeight);
}
}
}
//function drawScore(){

//}
//control Candy
function keyIsPressed() {
  if (keyCode === 'A') {
    this.posX = this.posX - 1;
  } else if (keyCode === 'D') {
    this.posX = this.posX + 1;
  } else if (keyCode === 'W') {
    this.posY = this.posY + 1;
  } else if (keyCode === 'S') {
    this.posY = this.posY - 1;
  }
}
