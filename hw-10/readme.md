# Arrays And Custom Functions
For this week we had to create custom functions and use arrays.

## my arrays
```
let orbsX = [ 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300];
let orbsY = [ 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300];
```

The orbsX array indicates the position of each custom orb object's x position
the orbsY array indicates the position of each custom orb object's y position

these were used in tandem with my custom function called `orbsObj`

## custom Functions

1. my first function is the orbsObj functions
```
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
```
this code created my object for the two orbs that repeate through my sketch.

```
for (let idx = 0; idx < orbsX.length; idx++){
  for (let idy = 0; idy < orbsY.length; idy++){
    orbsObj(orbsX[idx], orbsY[idy] , 1.0, 1.0);
  }
}
```
this code was used in my function draw to create the repetition for the object i created. I made the indexes for the x and y arrays and input them into the custom function.

```
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
```

this custom function created the square that follows my mouse. It uses the same variables as the orb object but instead of it being repeated it is set to follow the mouse and only have one.

### my problems
i had originally had translate under my custom mSquare function to pos_x and pos_y but the square never showed up, I eventually realized I needed to update the translation to 0 and the coordinates of the square itself to mouseX and mouseY. otherwise it based the position on distance from the mouse.

#### I had great fun!
