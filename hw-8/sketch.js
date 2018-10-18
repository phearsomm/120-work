let r = 255;
let g = 255;
let b = 255;
let option = 3;
function setup() {
	createCanvas(windowWidth, 750);
}

function draw() {
	background('rgb( 45, 72, 196)');
  let home = map(mouseX, 0, width, 20, 50);
  r = abs ((width - mouseX) % width);
  b = abs ((height - mouseY) % height);
  g = abs (((mouseX + mouseY) /2) % height );

  if (option == 1) {
      // Option 1
      for (let x = 50; x <= width-50; x += home) {
        for (let y = 50; y <= height-50; b+=home) {
          line(x, y, width/2, height/2);
        }
      }
    }
  else if (option == 2) {
    // Option 2
    let count = 120;
    for (let x = 50; x <= width-50; x += home) {
      for (let y = 50; y <= height-50; y+=home) {
        let s = map(count, 120, 0, 0, TWO_PI*2);
        arc(x, y, 14, 14, s, s + PI);
        count--;
      }
    }
  }
else if (option == 3){
	for (let y = mouseY; y <= height; y += home) {
		for (let x = 16; x <= width; x += home) {
			fill( r, g, b);
			ellipse(x + y, y, 100 - y/6.0, 100 - y/6.0);
		}
	}
}
}
function mousePressed() {
  option++;
  if (option > 3) option = 1;
}
