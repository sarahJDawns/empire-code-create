let big = 25;
let ball;
let maze = [];
let mazeSize = 0;
let xoff = 0;

function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(500, 500);
  canvas.parent(canvasDiv);
  frameRate(60);

  ball = {
    x: width / 2,
    y: height / 2,
    speed: 2,
  };

  mazeSize = Math.floor(width / big);
  for (let x = 0; x < mazeSize; x++) {
    maze[x] = [];
    for (let y = 0; y < mazeSize; y++) {
      const c = random(0, 4);
      maze[x][y] = c;
    }
  }

  startAnimation();
}

function draw() {
  background(236, 255, 160);

  let noiseValue = noise(xoff);
  let newX = map(noiseValue, 0, 1, -1, 1);
  let newY = map(noiseValue, 0, 1, -1, 1);

  let dx = newX * ball.speed;
  let dy = newY * ball.speed;

  ball.x += dx;
  ball.y += dy;

  stroke(255, 97, 84);
  strokeWeight(3);

  for (let x = 0; x < mazeSize; x++) {
    for (let y = 0; y < mazeSize; y++) {
      if (maze[x][y] < 1) {
        line(x * big, y * big, (x + 1) * big, (y + 1) * big);
      } else if (maze[x][y] < 2) {
        line(x * big, (y + 1) * big, (x + 1) * big, y * big);
      } else if (maze[x][y] < 3) {
        line(x * big, y * big, x * big, (y + 1) * big);
      } else if (maze[x][y] < 4) {
        line(x * big, y * big, (x + 1) * big, y * big);
      }
    }
  }

  fill(149, 147, 255);
  stroke(149, 147, 255);
  circle(ball.x, ball.y, big / 2);

  xoff += 0.05;
}

function startAnimation() {
  loop();
}

function stopAnimation() {
  noLoop();
}
