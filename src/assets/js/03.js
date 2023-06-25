function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(500, 500);
  canvas.parent(canvasDiv);
  frameRate(1);
}

function draw() {
  // noLoop();
  background(0, 15);

  const posX = width / 2;
  const rectSize = 2;
  const rectSpacing = 10;

  for (let posY = 0; posY < height; posY += rectSpacing) {
    for (let posX = 0; posX < width; posX += rectSpacing) {
      const hue = random(0, 360);
      const saturation = 100;
      const brightness = 100;
      fill(hue, saturation, brightness);
      noStroke();
      rect(posX, posY, rectSize, rectSize);
    }
  }

  rotate(radians(frameCount));

  const circleSpacing = 200;

  const xPos = posX + rectSize + circleSpacing;
  const yPos = 0;

  noStroke();
  fill(255, 225, 0);
  ellipse(xPos, yPos, 30, 30);
}
