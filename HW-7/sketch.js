
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
ball.r = 255;
ball.g = 255;
ball.b = 255;


function setup() {
    createCanvas(windowWidth, 400);
    background(200);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }


    fill(ball.r, ball.g, ball.b);
    ellipse(ball.x, ball.y, ball.width, ball.width);

//mouse is pressed statement to change the color o the ball dependant on where the ball is and where the mouse is
    if (mouseIsPressed) {
    ball.r = abs((width - ball.x) % 255);
    ball.g = abs((height - ball.y) % 255);
    ball.b = abs((width - mouseX) % 255);
    }
    else {
      ball.r = 255;
      ball.g = 255;
      ball.b = 255;
}


}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
    // new addition to change direction with click
    ball.delta_x = -ball.delta_x;
}
