function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(26,87,154);
  strokeWeight(3);
  noFill();
  stroke(230,53,36);
  // for(let i=0; i>6;i++){
    square(25,200,350);
  // }
    strokeWeight(7);
    square(50,225,300);
  
  strokeWeight(10);
    square(75,250,250);
  
  strokeWeight(13);
    square(100,275,200);
  
  strokeWeight(16);
    square(125,300,150);
  
  
  
  strokeWeight(18); 
  fill(230,53,36);
    square(150,325,100);
  
  strokeWeight(4);
  stroke(999);
  //the line crossing left botton -> right top
  line(175,400,225,350);
  //the line crossing right bottom -> left top
  line(225,400,175,350);
  
  fill(999)
  triangle(175,360,165,340,185,350);
  
  triangle(225,360,215,350, 235,340);
  
  
  
  
  
}
