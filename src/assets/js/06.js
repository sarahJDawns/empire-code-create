let len = 300;
let cloud1X = 200;
let cloud2X = 500;
let cloud3X = 800;

function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(canvasDiv);
}

function draw() {
  background(170, 245, 255);
  stroke(255);

  cloud1X += 0.2;
  cloud2X += 0.15;
  cloud3X += 0.1;

  if (cloud1X > width + 150) {
    cloud1X = -150;
  }
  if (cloud2X > width + 100) {
    cloud2X = -100;
  }
  if (cloud3X > width + 180) {
    cloud3X = -180;
  }

  drawCloud(cloud1X, 100, 150, 50);
  drawCloud(cloud2X, 200, 100, 30);
  drawCloud(cloud3X, 150, 180, 60);

  translate(400, height);
  branch(175);
}

function branch(len) {
  let angle = PI / 6;

  if (len < 10) {
    strokeWeight(3);
    stroke(0, 128, 0);
  } else {
    strokeWeight(1);
    stroke(139, 69, 19);
  }

  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}

function drawCloud(x, y, width, height) {
  noStroke();
  fill(255);
  ellipse(x, y, width, height);
  ellipse(x - width / 2, y, width * 0.6, height * 1.2);
  ellipse(x + width / 2, y, width * 0.6, height * 1.2);
}
