let loopEnabled = false;

function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(500, 500);
  canvas.parent(canvasDiv);
  canvas.mousePressed(startLoop);
  canvas.mouseReleased(stopLoop);
  noLoop();
}

function draw() {
  background(202, 201, 255);

  // First Circle
  push();
  translate(100, height / 2.5);
  noFill();

  strokeWeight(1);
  stroke(getRainbowColor());
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.05) {
    let r = random(5, 100);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();

  pop();

  // Second Circle
  push();
  translate(300, height / 3);
  noFill();

  strokeWeight(1);
  stroke(getRainbowColor());
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.05) {
    let r = random(5, 100);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();

  pop();

  // Third Circle
  push();
  translate(400, height / 2);
  noFill();

  strokeWeight(1);
  stroke(getRainbowColor());
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.05) {
    let r = random(5, 100);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();

  pop();

  // Draw lines
  stroke(7, 142, 35);
  strokeWeight(3);

  //1st line
  line(100, height / 2.5, 100, height);
  //2nd line
  line(300, height / 3, 300, height);
  //3rd line
  line(400, height / 2, 400, height);

  noStroke();
  fill(7, 142, 35);
  beginShape();
  vertex(0, height);
  for (let x = 0; x <= width; x += 10) {
    let y = height - random(10, 30);
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);
}

function getRainbowColor() {
  if (loopEnabled) {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    return color(r, g, b);
  } else {
    return color(255);
  }
}

function startLoop() {
  loopEnabled = true;
  loop();
}

function stopLoop() {
  loopEnabled = false;
  noLoop();
}
