let len;
let cloud1X;
let cloud2X;
let cloud3X;

function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(500, 500);
  canvas.parent(canvasDiv);

  len = height * 0.25;
  cloud1X = width * 0.2;
  cloud2X = width * 0.5;
  cloud3X = width * 0.8;
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

  drawCloud(cloud1X, height * 0.2, width * 0.3, height * 0.1);
  drawCloud(cloud2X, height * 0.4, width * 0.2, height * 0.06);
  drawCloud(cloud3X, height * 0.3, width * 0.36, height * 0.12);

  push();
  translate(width / 2, height);
  branch(len);
  pop();
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

function drawCloud(x, y, cloudWidth, cloudHeight) {
  noStroke();
  fill(255);
  ellipse(x, y, cloudWidth, cloudHeight);
  ellipse(x - cloudWidth / 2, y, cloudWidth * 0.6, cloudHeight * 1.2);
  ellipse(x + cloudWidth / 2, y, cloudWidth * 0.6, cloudHeight * 1.2);
}
