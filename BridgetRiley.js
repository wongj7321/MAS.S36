function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(225);
  angleMode(DEGREES);
  noStroke();

  //slant negative fourth row every other starting on first column
  for (let i = 0; i < 600; i += 200) {
    push();
    fill(0);
    translate(50 + i, 350);
    rotate(30);
    ellipse(0, 0, 60, 50);
    fill(225, 225, 225);
    rotate(-30);
    ellipse(0, 0, 20, 42);
    pop();
  }

  //slant negative fifth row every other starting on first-second column
  for (let i = 0; i < 200; i += 100) {
    push();
    fill(0);
    translate(50 + i, 450);
    rotate(30);
    ellipse(0, 0, 60, 50);
    fill(225, 225, 225);
    rotate(-30);
    ellipse(0, 0, 20, 42);
    pop();
  }

  //slant positve fourth row every other starting on the second column
  for (let i = 0; i < 600; i += 200) {
    push();
    fill(0);
    translate(150 + i, 350);
    rotate(-30);
    ellipse(0, 0, 60, 50);
    fill(225, 225, 225);
    rotate(30);
    ellipse(0, 0, 20, 42);
    pop();
  }

  //slant positve third row every other
  for (let i = 0; i < 600; i += 200) {
    push();
    fill(0);
    translate(50 + i, 250);
    rotate(-30);
    ellipse(0, 0, 60, 50);
    fill(225, 225, 225);
    rotate(30);
    ellipse(0, 0, 20, 42);
    pop();
  }

  //slant positve on the last row second column
  for (let i = 0; i < 600; i += 100) {
    push();
    fill(0);
    translate(250 + i, 550);
    rotate(-30);
    ellipse(0, 0, 60, 50);
    fill(225, 225, 225);
    rotate(30);
    ellipse(0, 0, 20, 42);
    pop();
  }

  //slant positive on the last column first - third row
  for (let i = 0; i < 300; i += 100) {
    push();
    fill(0);
    translate(550, 50 + i);
    rotate(-30);
    ellipse(0, 0, 60, 50);
    fill(225, 225, 225);
    rotate(30);
    ellipse(0, 0, 20, 42);
    pop();
  }

  //slant negative diagonal row
  for (let i = 0; i < 600; i += 100) {
    push();
    fill(0);
    translate(150 + i, 50 + i);
    rotate(30);
    ellipse(0, 0, 60, 50);
    fill(225, 225, 225);
    rotate(-30);
    ellipse(0, 0, 20, 42);
    pop();
  }
  //all O's
  for (let j = 0; j < 600; j += 100) {
    for (let i = 0; i < 600; i += 100) {
      fill(0);
      ellipse(50 + i, 50 + j, 50, 50);
      fill(225, 225, 225);
      ellipse(50 + i, 50 + j, 20, 42);
    }
  }
}
