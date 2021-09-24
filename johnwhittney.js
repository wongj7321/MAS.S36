function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(0);
  r=150;
  x = 300;
  y = 300;
   for(let b=0;b<180;b+=3.4){
      ellipse(x+r*cos(b),y+r*sin(b),10,10);
      fill(212,89,216);
      }
  for (let i = 0; i < 20; i++){
      let angle = map(i, 0, 19, 0, TWO_PI);
      let angle2 = map(i, 0, 19, 0, TWO_PI) + PI/3.0;
      let xP = x + r * Math.cos(angle);
      let yP = y + r * Math.sin(angle);
      push();
      translate(xP, yP);
      rotate(angle2);
     
      for (let j = 0; j < 20; j+=2){
          ellipse(0 + j * 10,0, 10);
      }
      pop();
  }
}
