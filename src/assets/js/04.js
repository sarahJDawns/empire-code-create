let xoff = 0;
let circleClicked = false;

function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(canvasDiv);
}

function draw() {
  background(200);

  let x = map(noise(xoff), 0, 1, 0, width);

  xoff += 0.05;

  if (circleClicked) {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You are amazing!", width / 2, height / 2);
  } else {
    fill(255);
  }
  noStroke();
  ellipse(x, 200, 24, 24);
}

function mouseClicked() {
  const d = dist(mouseX, mouseY, mouseX, 200);

  if (d < 12) {
    if (circleClicked) {
      circleClicked = false;
      loop();
    } else {
      circleClicked = true;
      noLoop();
    }
  }
}
