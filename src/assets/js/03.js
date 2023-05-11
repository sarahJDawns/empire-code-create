function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(canvasDiv);
  frameRate(1);
}

function draw() {
  noLoop();
  background(0, 15);

  const posX = width / 2;
  const rectSize = 10;
  const rectSpacing = 75;

  for (let posY = 0; posY < 10; posY++) {
    const hue = random(0, 360);
    const saturation = 100;
    const brightness = 100;

    fill(hue, saturation, brightness);
    rect(posX, posY * rectSpacing + 25, rectSize, rectSize);
  }
  rotate(radians(frameCount));

  const circleSpacing = 200;

  const xPos = posX + rectSize + circleSpacing;
  const yPos = 0;

  fill(190, 132, 0);
  ellipse(xPos, yPos, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
