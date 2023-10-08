function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(500, 500);
  canvas.parent(canvasDiv);
  frameRate(1);
}

function draw() {
  // Set background color
  background(0, 15);

  // Define rectangle properties
  const rectSize = 2;
  const rectSpacing = 10;

  // Draw the grid of rectangles
  for (let y = 0; y < height; y += rectSpacing) {
    for (let x = 0; x < width; x += rectSpacing) {
      // Generate random color
      const hue = random(0, 360);
      const saturation = 100;
      const brightness = 100;
      fill(hue, saturation, brightness);
      noStroke();
      
      // Draw rectangle
      rect(x, y, rectSize, rectSize);
    }
  }

  // Rotate canvas
  rotate(radians(frameCount));

  // Define circle properties
  const circleSpacing = 200;
  const xPos = width / 2 + rectSize + circleSpacing;
  const yPos = 0;

  // Draw the circle
  noStroke();
  fill(255, 225, 0);
  ellipse(xPos, yPos, 30, 30);
}
