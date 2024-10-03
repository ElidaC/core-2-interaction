let droplets = [];
let maxDroplets = 100;
let addRate = 1; // How many droplets to add per scroll
let lastMouseMoveTime = 0;
let idleTimeThreshold = 300; // Time in ms to be considered idle
let isIdle = false;
let cornerTargets = []; // Array to store target corners for each droplet
let strokeHue = 20;





function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initialize droplets
  for (let i = 0; i < 10; i++) {
    droplets.push(new Droplet(random(width), random(height)));
  }

  strokeWeight(2);
  colorMode(HSB); // Using HSB mode for easier color manipulation
}



function draw() {
  background(10);
  
  // Draw two distinct curve grids: top-left and bottom-right
  drawTopLeftCurve();
  drawBottomRightCurve();

  // Check if the mouse has been idle for the idle time threshold
  if (millis() - lastMouseMoveTime > idleTimeThreshold && !isIdle) {
    // Start idle behavior, droplets begin moving toward corners
    assignCornersToDroplets();
    isIdle = true;
  }

  // Update and display each droplet
  for (let i = 0; i < droplets.length; i++) {
    let d = droplets[i];
    d.update(isIdle);
    d.display();
  }
}



// Detects mouse scrolling
function mouseWheel(event) {
  if (droplets.length < maxDroplets) {
    for (let i = 0; i < addRate; i++) {
      droplets.push(new Droplet(random(width), random(height)));
    }
  }
}

function mouseMoved() {
  lastMouseMoveTime = millis(); // Update the last time the mouse was moved

  if (isIdle) {
    // Scatter droplets back when the mouse moves
    scatterDroplets();
    isIdle = false;
  }
}

// Assign 1/3 of droplets to top-left corner and 2/3 to bottom-right corner
function assignCornersToDroplets() {
  let topLeft = { x: 0, y: 0 };         // Top-left corner
  let bottomRight = { x: width, y: height }; // Bottom-right corner

  cornerTargets = []; // Clear the previous targets

  // Assign 1/3 of droplets to the top-left corner
  let oneThird = floor(droplets.length / 3);
  for (let i = 0; i < oneThird; i++) {
    cornerTargets.push(topLeft);
    droplets[i].isMovingToCorner = true; // Set the flag to move toward corners
  }

  // Assign 2/3 of droplets to the bottom-right corner
  for (let i = oneThird; i < droplets.length; i++) {
    cornerTargets.push(bottomRight);
    droplets[i].isMovingToCorner = true; // Set the flag to move toward corners
  }
}

// Scatter droplets across the page by randomizing velocities
function scatterDroplets() {
  for (let i = 0; i < droplets.length; i++) {
    droplets[i].scatter(); // Scatter all droplets randomly
    droplets[i].isMovingToCorner = false; // Reset the flag so they stop moving to corners
  }
}

class Droplet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.size = random(10, 25);  // Increased the minimum size to make them more visible
    this.isMovingToCorner = false; // Flag for moving to a corner
  }

  update(isIdle) {
    if (this.isMovingToCorner) {
      // Continue moving toward the assigned corner
      let targetCorner = cornerTargets[droplets.indexOf(this)];
      let attractionStrength = 0.0002; // Slow attraction towards the corner

      // Apply attraction force toward the corner
      let dx = targetCorner.x - this.x;
      let dy = targetCorner.y - this.y;
      this.vx += dx * attractionStrength;
      this.vy += dy * attractionStrength;
    }

    // Update position based on velocity
    this.x += this.vx;
    this.y += this.vy;

    // Boundary check
    if (this.x > width || this.x < 0) this.vx *= -1;
    if (this.y > height || this.y < 0) this.vy *= -1;
  }

  display() {
    fill(230, 255, 150);  
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  // Scatter droplets by giving them random velocities
  scatter() {
    this.vx = random(-3, 3);
    this.vy = random(-2, 2);
  }
}

// Function to draw the top-left curve grid with smaller, irregular curves
function drawTopLeftCurve() {
  for (let i = 0; i < 200; i += 20) {
    strokeColor = i + 10;
stroke((strokeColor + frameCount) % 360, 100, 100); 
    noFill();  // Ensure there is no fill for the curves

    // Smaller, more irregular curves in the top-left corner with added randomness
    let x1 = 50 - i / 2 + random(0, 0);
    let y1 = 50 + i + random(0, 0);
    let x2 = 150 + random(0, 0);
    let y2 = 80 + random(0, 0);
    let x3 = 200 + random(0, 0);
    let y3 = 120 + random(0, 0);
    let x4 = 100 - i / 16 + random(0, 0);
    let y4 = 150 + i / 8 + random(0, 0);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}

// Function to draw the bottom-right curve grid with larger, irregular curves
function drawBottomRightCurve() {
  for (let i = 0; i < 400; i += 40) {  // Increased grid size to make the curves larger
    strokeColor = i;
    stroke((strokeColor + frameCount/0.5) % 360, 100, 100);  // Neon-like effect with cycling hues
    noFill();  // Ensure there is no fill for the curves

    // Larger, more irregular curves in the bottom-right corner reaching the edges
    let x1 = width - 50 + i / 2 + random(0, 0);
    let y1 = height - 50 - i + random(0, 0);
    let x2 = width - 300 + random(0, 0);
    let y2 = height - 250 + random(0, 0);
    let x3 = width - 400 + random(0, 0);
    let y3 = height - 400 + random(0, 0);
    let x4 = width - 200 + i / 16 + random(0, 0);
    let y4 = height - 550 - i / 8 + random(0, 0);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
