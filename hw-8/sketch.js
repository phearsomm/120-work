let r = 255;
let g = 255;
let b = 255;
let option = 3;
function setup() {
	createCanvas(windowWidth, 750);
}

function draw() {
	background(r, 174, b);
  //map it
  let home = map(mouseX, 0, width, 20, 50);
    //random fills and strokes
  r = abs ((width - mouseX) % width);
  b = abs ((height - mouseY) % height);
  g = abs (((mouseX + mouseY) /2) % height );
  fill( r, b, g);
  stroke(b, r, g);

  //create option one
  if (option == 1) {
      // Option 1
      for (let x = 50; x <= width-50; x += home) {
        for (let y = 50; y <= height-50; y+=home) {
          strokeWeight(random(10));
          line(x, y, width/2, height/2);
        }
      }
    }
    // create option 2
  else if (option == 2) {
    // Option 2
      strokeWeight(1);
    let count = 120;
    for (let x = 50; x <= width-50; x += home) {
      for (let y = 50; y <= height-50; y+=home) {
        //spacing
        let s = map(count, 120, 0, 0, TWO_PI*0.1);
        arc(x, y, 14, 14, s, s + TWO_PI);
        count--;
      }
    }
  }
  // create option three
else if (option == 3){
  strokeWeight(random(5));
	for (let y = mouseY; y <= height; y += 30) {
		for (let x = 16; x <= width; x += 35) {
			ellipse(x + y, y, 100 - y/6.0, 100 - y/6.0);
		}
	}
}
}

//mouse pressed functionnnn
function mousePressed() {
  option++;
  if (option > 3) option = 1;
}
