// Global variables

/**
 * @type {number} Use different logic to control the snake using GRID_SIZE to control the speed of the snake.
 */
const GRID_SIZE = 20;

/**
 * @type {number} Current position of the X-axis snake head.
 */
let headX = 100;

/**
 * @type {number} Current position of the Y-axis snake head.
 */
let headY = 100;

/**
 * @type {number} Current position of the snake food on the horizontal axis.
 */
let foodX;

/**
 * @type {number} Current position of the snake food on the vertical axis.
 */
let foodY;

/**
 * @type {boolean} This is the game over logic; it checks whether the game is over or not.
 */
let gameOver = false;

// Direction control variables

/**
 * @type {number} These variables are set for the X and Y axes for snake movement.
 */
let xDirection = 1;
let yDirection = 0;

/**
 * @function setup JavaScript has different functions; this function is called setup. It runs once per second.
 */
function setup() {
  const canvas = createCanvas(600, 600);
  canvas.elt.tabIndex = 0;
  canvas.elt.focus();

  /**
   * @type {number}
   */
  frameRate(10);

  /**
   * @type {number} This variable makes the snake food spawn randomly each time during the action.
   */
  spawnFood();
}

/**
 * @returns {void} This function is called draw; it runs more than one time per frame.
 */
function draw() {
  background(220);
  snak();      // 🐍 snake body logic variable
  control();   // 🎮 steering logic variable

  if (gameOver) {
    showGameOver();
    return;
  }
  
}

/**
 * @function snak To organize my code and make it more readable, I have created different functions to keep my code clear for the audience—for example, function snak.
 */
function snak() {
  // Snake food menu section
  fill(255, 0, 0);
  ellipse(foodX, foodY, GRID_SIZE, GRID_SIZE);

  // Snake head section
  fill(0, 255, 0);
  rect(headX, headY, GRID_SIZE, GRID_SIZE);

  // Move snake section
  headX += xDirection * GRID_SIZE;
  headY += yDirection * GRID_SIZE;
  if (
  headX < 0 ||
  headY < 0 ||
  headX >= width ||
  headY >= height
) {
  gameOver = true;
}
}

// Control function
function control() {
  // (empty for now)
}

// Global keyPressed — must stay outside to work
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xDirection = -1;
    yDirection = 0;
  } else if (keyCode === RIGHT_ARROW) {
    xDirection = 1;
    yDirection = 0;
  } else if (keyCode === UP_ARROW) {
    xDirection = 0;
    yDirection = -1;
  } else if (keyCode === DOWN_ARROW) {
    xDirection = 0;
    yDirection = 1;
  }

  return false; // Prevent browser scrolling
}

// Global spawnFood
function spawnFood() {
  foodX = floor(random(width / GRID_SIZE)) * GRID_SIZE;
  foodY = floor(random(height / GRID_SIZE)) * GRID_SIZE;
}

function showGameOver() {
  background(0);
  fill(255, 0, 0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
}
