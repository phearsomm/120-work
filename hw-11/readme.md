# this week in work
We needed to create a class and objects inside each class to do things.

## snow storm
I decided i wanted to snow to fall down so i created a Blizzard class that involved:
1. snow color
2. x and y locations
3. size of snow height and width
4. melted snow color (this didnt seem to work)

## start to finish
I started by creating my array snow, the ammount of snow (flakes), and my bg color variable

after this the setup function was used and i further defined the array by linking it with the flakes number and pushing it.

I then started the draw function, updated the array inside the function and set my framerate and background.

### my class

```
class Blizzard{


  constructor(){

    this.snow_color = 'rgb(255, 255, 245)';
    this.melted_color = 'rgb(200, 200, 255)';
    this.x = random (0, windowWidth);
    this.y = random (-600, 0);
    this.size_w = random(2, 10);
    this.size_h = random(2, 10);
    this.melt_x = random(0, windowWidth);
    this.melt_y = random(575, 600);

  }

  frame(){
    this.snow();
    this.continue();
    this.melt();
    this.show();
  }

//snow movement
  snow(){
    this.x -= 0.1;
    this.y += random (1, 5);
  }


//continue to snow
  continue(){

    if( this.y > height ){
     this.y = random( -100, 0 );
     this.x = random( 0, windowWidth );
   }
  }

//show the snow
  show(){
    fill(this.snow_color);
    ellipse(this.x, this.y, this.size_w, this.size_h);
  }

//melt effect that didnt take
    melt(){
      if (this.y > height){
        this.y = this.melt_y;
        this.x = this.melt_x;
      }
    }
}
```

my class was called blizzard and involved four methods, snow, continue, melt, and show. snow explained movement, continue explained the continued appearance of new snow, melt was supposed to change the color and let it rest but i had problems making it stick, and show was to hold the objects themselves.

# troubles
my only trouble i really had was that I couldn't figure out how to make the snow pool at the bottom and change color. otherwise this was a fun assignment.
