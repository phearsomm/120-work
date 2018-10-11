Maxwell Briggs

[Live Sketch Link](https://phearsomm.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball


## Description of What the Original Code is Doing
First the Variables are all define.

```
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
```

This section of code defines all of the variables
1. creating the object - the Ball
2. ball.Width defines the size of the ball
3. ball.x defines the x position of the ball
4. ball.y defines the y postion of the ball
5. ball.delta_x defines the forward or backward motion of the x variable
6. ball.delta_y defines the forward or backward direction of the y variable
7. ball.scale_x defines the angle progresion of the x variable
8. ball.scale_y defines the angle progresion of the y variable

```
function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}
```
This section sets the canvas up with a white background and a cavas size equaling the windowWidth by 400

`function draw(){`
this is used to define the drawing code

`ball.x += ball.delta_x * ball.scale_x;`
This states that the position of x is above or equal to the angle and velocity of the Balls x variable

`ball.y += ball.delta_y * ball.scale_y;`
This states that the position of y is above or equal to the angle and velocity of the balls y variable

```
if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
}
```

This code states that if the x coordinate of the ball is above the maximum width or below the minimum width that the direction of the ball on the x axis will reverse

```
if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
}
```
This code states that if the y coordinate of the ball is above the maximum height or below the minimum height that the direction of the ball on the y axis will reverse

`fill(255);`
This indicates the white color of the balls

`ellipse(ball.x, ball.y, ball.width, ball.width);`
This indicates that the ball will be located at ball.x and ball.y while having the height and width of ball.Width

```
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
```
This block of code starts by defining a mouse pressing function so that if we press the mouse something happens.
based on where the mouse is pressed the angle will change. the location of the ball is based on the multiplication of scale and delta. The scale for x is higher the farther right the mouse is and the y is higher the lower the mouse is. The larger numbers multiply by the delta to create a more drastic movement and angle or a less drastic movement and angle.

## How to make the ball change direction
I put in a the following code so that while my sketch was going i could click to change the direction of the ball instantly using hte x axis.
`  ball.delta_x = -ball.delta_x;`
this code was put into the mouse pressed function along with the scale update so the ball would change when clicked.


## How did you alter the sketch?

in my alteration I added an if(mouseIsPressed) function to make the color of the ball change dependant on both the ball location and mouse location for as long as the mouse is pressed. I also added the function for the ball to change direction when the mouse clicks
