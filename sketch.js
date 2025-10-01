
let r, angle1, angle2, angle3, angle4, angle5, red, blue;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  angleMode (DEGREES);
  rectMode (CENTER);
  angle1 =0;
  angle2 =45;
  angle3 =90;
  angle4 =0;
  angle5 =45;
  
  r = 0;
  red = 0;
  blue = 200;
}

function draw() {
background(red += 0.1, 0, blue-= 0.1);
push();
//rotate(r += 0.25);
translate(width/2, height/2);

rotate(angle1);
fill(100,0,100,190);
rect (0, 0, 750);

fill(100,100,200,100);
rotate(angle1);
rect (0, 0, 600);

fill(200,50,100,200);
rotate(angle4);
rect (0, 0, 600);

fill(100, 50, 200);
rotate(angle4);
rect (0, 0, 500);

fill(250,0,20,150);
rotate(angle4);
rect (0, 0, 450);

fill(100,50,200);
rotate(angle1);
rect (0, 0, 400);

fill(red, 0, blue, 150);
rotate(angle5);
rect(100,100,150);

rotate(angle5);
rect(-100,100,150);


rotate(angle5);
rect(-100,-100,150);


rotate(angle5);
rect(100,-100,150);
pop();

translate(width/2,height/2);

fill(100,150,blue, 150);
rotate(angle3);
rect(0,0,200);

fill(red,50,100);
rotate(angle3);
rect(0,0,100);

fill(red,0,blue);
rotate(angle3);
rect(0,0,5);

angle1 += 1;
angle2 += 1;
angle3 += 1;
angle4 += 1;
angle5 += 5;
}