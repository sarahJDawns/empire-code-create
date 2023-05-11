let x = 200;
let y = 200;
let nextCanvas;

function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(canvasDiv);
  nextCanvas = createGraphics(windowWidth, windowHeight);
  nextCanvas.clear;
  background(0);
}

function draw() {
  background(192, 225, 214);

  x += random(-1, 1);
  y += random(-1, 1);

  nextCanvas.fill(255, 2);
  nextCanvas.noStroke(255);

  let circlex = random(width);
  let circley = random(height);

  nextCanvas.ellipse(circlex, circley, y - circlex);

  image(nextCanvas, 0, 0);

  fill(255, 0, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 10, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
