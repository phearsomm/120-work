function setup() {
    // created a canvas
    createCanvas( 600, 900 );
}

function draw() {
    // BG COLOR- sky blue
    background( 'rgb(109, 156, 212)' );

    // *****************************************************
    // character sandbox
    push();

    //PANTS START*************************************
    push();

    stroke('rgb(72, 72, 72)');
    fill('rgb(72, 72, 72)');
    quad(344, 440, 425, 513, 357, 900, 335, 900);

    stroke('rgb(72, 72, 72)');
    fill('rgb(72, 72, 72)');
    quad(344, 440, 271, 522, 322, 900, 344, 900);

    stroke('rgb(0, 0, 0)');
    line(340, 900, 342, 728);

    // ** ARMS BEHIND BODY **********************************
    push();
    stroke('rgb(225, 214, 183)');
    fill('rgb(225, 214, 183)');
    triangle(196, 306, 230, 326, 202, 517);

    stroke('rgb(225, 214, 183)');
    fill('rgb(225, 214, 183)');
    triangle(124, 401, 204, 480, 202, 517);

    stroke('rgb(225, 214, 183)');
    fill('rgb(225, 214, 183)');
    triangle(124, 401, 161, 391, 150, 437);

    stroke('rgb(225, 214, 183)');
    fill('rgb(225, 214, 183)');
    triangle(467, 333, 452, 542, 406, 520);



    pop();
    // **END ARMS BB**


    // ** BODY **********************************
    push();
    // body code goes here

    stroke('rgb(79, 116, 67)');
    fill('rgb(79, 116, 67)');
    quad(196, 306, 467, 333, 378, 540, 305, 540);

    stroke('rgb(95, 23, 40)');
    fill('rgb(95, 23, 40)');
    quad(337, 540, 300, 318, 365, 325, 347, 540);

    stroke('rgb(95, 23, 40)');
    fill('rgb(95, 23, 40)');
    rect(375, 375, 55, 4, 5);

    pop();
    //END BODY********************************************

    //HEAD START********************************************
    push();
    stroke('rgb(225, 214, 183)');
    fill('rgb(225, 214, 183)');
    ellipse(332, 266, 156, 156);

//eyes start
    stroke('rgb(0, 0, 0)');
    fill('rgb(0, 0, 0)');
    ellipse(314, 266, 9, 9);

    stroke('rgb(0, 0, 0)');
    fill('rgb(0, 0, 0)');
    ellipse(357, 266, 9, 9);
//eyes end

//HAIR************ *********** *************
stroke('rgb(107, 90, 18)');
fill('rgb(107, 90, 18)');
triangle(330, 227, 404, 227, 422, 263);

stroke('rgb(87, 77, 35)');
fill('rgb(87, 77, 35)');
triangle(259, 226, 385, 226, 244, 277);
//HAIR END**************** ************* *************

//BEANIE START**
stroke('rgb(95, 23, 40)');
fill('rgb(95,23, 40)');
arc(334, 220, 146, 146, PI, TWO_PI);

stroke('rgb(204, 182, 76)');
fill('rgb(204, 182, 76)');
rect(250, 203, 165, 29, 20);
//BEANIE END**
pop();
//HEAD END************************************


//SCARF START**************
push();
  stroke('rgb(204, 182, 76)');
  fill('rgb(204, 182, 76)');
  quad(255, 303, 432, 285, 390, 351, 266, 336);

  stroke('rgb(204, 182, 76)');
  fill('rgb(204, 182, 76)');
  quad(404, 316, 450, 314, 430, 330, 400, 327);

  stroke('rgb(170, 151, 61)');
  fill('rgb(170, 151, 61)');
  quad(263, 330, 382, 325, 364, 355, 266, 336);

  stroke('rgb(170, 151, 61)');
  fill('rgb(170, 151, 61)');
  quad(263, 330, 293, 334, 323, 409, 290, 404);

  pop();
  //scarf end


//arms foreground start
push();
    stroke('rgb(225, 214, 183)');
    fill('rgb(225, 214, 183)');
    triangle(290, 494, 435, 503, 452, 542);

    stroke('rgb(225, 214, 183)');
    fill('rgb(225, 214, 183)');
    triangle(290, 494, 300, 466, 324, 499);
  //arms foreground end
  pop();

    // ** END SANDBOX *******************
    pop();

}
