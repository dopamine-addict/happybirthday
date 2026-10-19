const message = document.getElementById("message");

let x = 10;
let y = 15;
let vx = 3;
let vy = 1;

const gravity = 0.15;
const bounce = 0.9;

function animate() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const textWidth = message.offsetWidth;
  const textHeight = message.offsetHeight;

  // Calculate maximum allowed positions to keep the message within bounds
  const maxX = Math.max(0, width - textWidth);
  const maxY = Math.max(0, height - textHeight);

  // Apply gravity to vertical velocity
  vy += gravity;
  // Update position based on velocity
  x += vx;
  y += vy;

  // Handle horizontal collisions with screen edges
  if (x >= maxX) {
    x = maxX; // Snap to the edge
    vx = -Math.abs(vx) * bounce; // Reverse and dampen horizontal velocity
  } else if (x <= 0) {
    x = 0; // Snap to the edge
    vx = Math.abs(vx) * bounce; // Reverse and dampen horizontal velocity
  }

  // Handle vertical collisions with screen edges
  if (y >= maxY) {
    y = maxY; // Snap to the edge
    vy = -Math.abs(vy) * bounce; // Reverse and dampen vertical velocity
  } else if (y <= 0) {
    y = 0; // Snap to the edge
    vy = Math.abs(vy) * bounce; // Reverse and dampen vertical velocity
  }

  // Apply the calculated position to the message element
  message.style.transform = `translate(${x}px, ${y}px)`;

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();