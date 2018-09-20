function setup(){
  //establish canvas area
  createCanvas ( 1000, 1000);
}

function draw(){
  //background color
  background( 'rgb(64,20,29)');

// first push do not forget to pop after drawing
push();

  // center Canvas
  translate( 500, 500);

  // FEATHERS!!!!!___________________________________________
  push();
//Tail feathers
fill ( 'rgb(149, 8, 54)');
noStroke();
triangle( -386, 47, -368, -4, -378, 37);
triangle( -386, 47, -378, 37, -346, 70);
triangle( -367, 77, -428, 79, -395, 69);
triangle( -367, 77, -395, 69, -410, 9);

fill( 'rgb(31, 136, 39)');
noStroke();
triangle( -386, 47, -384, 12, -428, -17);
triangle( -386, 47, -384, 12, -362, -19);

// Head FEATHERS
fill ( 'rgb(149, 8, 54)');
noStroke();
triangle( -129, -317, -141, -325, -165, -306);
triangle( -129, -317, -141, -325, -158, -367);
triangle( -90, -334, -23, -361, -81, -354);
triangle( -90, -334, -81, -354, -81, -400);

fill( 'rgb(31, 136, 39)');
noStroke();
triangle( -99, -264, -123, -380, -73, -460);
triangle( -99, -264, -123, -380, -196, -432);

//FEATHERS DONE- pop
pop();

// LEGS!!!!!! ___________________________________________

push();
fill ( 'rgb(149, 8, 54)');
noStroke();
triangle( -326, 144, -288, 205, -326, 461);
quad(-288, 205, -294, 239, -242, 381, -271, 233);

//End Legs!!!
pop();

//BODY!!!!!_______________________________________________________
push();
fill ( 'rgb(135, 107, 190)');
noStroke();
triangle( -167, 403, -205, 154, -389, 44);
triangle( -167, 403, -205, 154, -52, -90);

stroke(135, 107, 190);
strokeWeight(2);
line( -167, 403, -205, 154);

fill( 'rgb(107, 83, 154)');
noStroke();
quad( -175, 363, -188, 233, -124, 83, -120, 118);

//End body
pop();

//HEAD!!!!!_______________________________________________________
push();
fill ( 'rgb(135, 107, 190)');
noStroke();
ellipse(-44, -182, 325, 325);

//eyes*****
strokeWeight(2);
stroke(51);
fill( 'rgb(186, 186, 186)');
ellipse( -45, -284, 63, 63);
ellipse( 10, -260, 47, 47);
ellipse( 38, -218, 36, 36);
ellipse( 37, -176, 25, 25);
ellipse( -47, -176, 121, 121);

//pupils****

noStroke();
fill( 'rgb(0, 0, 0)');
ellipse( -19, -163, 27, 58);
ellipse( -31, -276, 14, 30);
ellipse( 19, -255, 9, 20);
ellipse( 45, -214, 6, 14);
ellipse( 43, -172, 4, 11);

//shine***
fill( 'rgb(255, 255, 255)');
ellipse( -78, -212, 13, 13);
ellipse( -62, -302, 6, 6);
ellipse( 1, -273, 5, 5);
ellipse( 33, -227, 4, 4);
ellipse( 35, -181, 3, 3);

//end Head
pop();

//BEAK!!!!!_______________________________________________________
push();
fill ( 'rgb(205, 191, 126)');
noStroke();
triangle( -46, -20, 118, -184, 479, 392);

stroke(52);
strokeWeight(1);
line( 479, 392, 55, -52);

//end BEAK
pop();
pop();


}
