let mouth;
let bubbles = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);

}


function draw(){
  background(139, 219, 233);
  noCursor();
  //create mouth
  mouth = new Mouth(mouseX, mouseY, 100, 100);
  mouth.draw();

  //create bubbles
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].draw();
  }
  //start below the screen
  let b = new Bubble(random(width), height + 120, random(25, 50));
  bubbles.push(b);

  //if mouth eat bubble, the bubble will splice
  for (let i = bubbles.length - 1; i >= 0; i--) {
    let pop = bubbles[i].mouthCheck();
    if (pop) {
      bubbles.splice(i, 1);
    }
  }
}




class Mouth{
  constructor(mouthX, mouthY, w, h){
    this.mouthX = mouthX;
    this.mouthY = mouthY;
    this.mouthW = w;
    this.mouthH = h;
    this.lipsW = this.mouthW * 0.9;
    this.lipsH = this.mouthH * 0.9;
    this.teethW = this.lipsW * 0.8;
    this.teethH = this.lipsH *0.8;
  }

  draw(){

  push();
    translate(this.mouthX, this.mouthY);
    noStroke();
    //mouth
    fill(0, 0, 0);
    ellipse(0, 0, this.mouthW, this.mouthH);
    //lips
    fill(100, 0, 0);
    ellipse(0, 0, this.lipsW, this.lipseH);
    //teeth
    fill(255, 255, 240);
    ellipse(0, 0, this.teethW, this.teethH);
    //black center
    fill(0);
    ellipse(0, 0, 60);
    pop();
  }
}


class Bubble{
  constructor(x, y, d){
    this.x = x;
    this.y = y;
    this.d = d;
    this.fill = color(random(255), random(255), random(255));
  }

  move(){
    //move bubble
    this.x = this.x + random(-2, 2);
    //smaller bubbles move faster than bigger bubbles
    this.y = this.y - 100/this.d;
  }

  draw(){
    //draw bubble
    noStroke();
    fill(this.fill);
    alpha(0.6);
    ellipse(this.x, this.y, this.d);
  }

  mouthCheck() {
    //check if eaten
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.d/2) {
      return true;
    } else {
      return false;
    }
  }
}
