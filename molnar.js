function setup(){
  createCanvas(400,600);
  drawingContext.shadowOffsetX = -5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "white"
}

function draw() {
  background(247,231,220);
  // rect(60,60,40,40);
  if (mouseIsPressed){
    // left rect
  rect(80,80,75,75);
  //middle top
  rect(155,85,75,75);
  //right top
  rect(245,85,75,75);
  //left mid
  rect(75,150,75,75);
  //mid mid 
  rect(165,160,75,75);
  //right mid
  rect(235,160,75,75);
  //left down
  rect(80,240,75,75);
  //mid down
  rect(155,237,75,75);
  //right down
  rect(240,245,75,75);

  } else{
    for(let i=1; i<4; i++){
      for (let j = 1;j<4;j++){
        fill('red');
        rect(i*80,j*80, 75, 75);

      }
   }
  }
} 
