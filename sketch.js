
let Food;

class food {
x;
y;

constructor() {
  this.#x = this.#newRandomCoordinate();
  this.#y = this.#newRandomCoordinate();


}}



// Global variables

/**
 * @type {number} Use different logic to control the snake using GRID_SIZE to control the speed of the snake.
 */
const GRID_SIZE = 20;

/**
 * @type {boolean} This is the game over logic; it checks whether the game is over or not.
 */
let gameOver = false;

/**
 * @type {number} Snake length tracker.
 */
let snakeLength = 1; // restored to keep track of snake length

/**
 * @type {object} Snake object containing X/Y coordinates and direction.
 */
let snake = {
  segments: [
    { x: 100, y: 100 } // initial head position
  ],
  direction: "right"
}; // replaced 

/**
 * @type {object} Food object storing its X/Y coordinates.
 */
let food = { x: 5, y: 10 }; // replaced 

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
  frameRate(5);

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
  
  moveSnake();           // move snake
  checkFoodCollision();  // check food collision
  snak();                // draw snake body
  control();             // steering logic variable

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
  ellipse(food.x, food.y, GRID_SIZE, GRID_SIZE);

  // Snake body section
  for (let i = 0; i < snake.segments.length; i++) {
    if (i === 0) {
      fill(0, 255, 0); // adding the colours!
    } else {
      fill(0, 200, 0); // body colouring!
    }
    rect(snake.segments[i].x, snake.segments[i].y, GRID_SIZE, GRID_SIZE);
  }

  // Check if snake hits walls
  if (
    snake.segments[0].x < 0 ||
    snake.segments[0].y < 0 ||
    snake.segments[0].x >= width ||
    snake.segments[0].y >= height
  ) {
    gameOver = true;// added 
  }
}

function moveSnake() {
  // Move snake section
  //for (let i = snake.segments.length - 1; i > 0; i--) {
    // each part of the snake moves to the position of the previous one
    //snake.segments[i].x = snake.segments[i - 1].x;
    //snake.segments[i].y = snake.segments[i - 1].y;
  
  // now move the head forward in its current direction
  //snake.segments[0].x += xDirection * GRID_SIZE;
  //snake.segments[0].y += yDirection * GRID_SIZE;

   for (let i = snake.segments.length - 1; i > 0; i--) {
    snake.segments[i].x = snake.segments[i - 1].x;
    snake.segments[i].y = snake.segments[i - 1].y;
  }
  snake.segments[0].x += xDirection * GRID_SIZE;
  snake.segments[0].y += yDirection * GRID_SIZE;
}

// Control function
function control() {
  // (empty for now)
}

// Global keyPressed — must stay outside to work
function keyPressed() {
  if (keyCode === LEFT_ARROW && xDirection !== 1) {
    xDirection = -1;
    yDirection = 0;
  } else if (keyCode === RIGHT_ARROW && xDirection !== -1) {
    xDirection = 1;
    yDirection = 0;
  } else if (keyCode === UP_ARROW && yDirection !== 1) {
    xDirection = 0;
    yDirection = -1;
  } else if (keyCode === DOWN_ARROW && yDirection !== -1) {
    xDirection = 0;
    yDirection = 1;
  }

  return false; // Prevent browser scrolling
}

// Global spawnFood
function spawnFood() {
  food.x = floor(random(width / GRID_SIZE)) * GRID_SIZE;
  food.y = floor(random(height / GRID_SIZE)) * GRID_SIZE;
}

function checkFoodCollision() {
  //if (snake.segments[0].x === food.x && snake.segments[0].y === food.y) {
    //spawnFood();   // make new food
    //snakeLength++; // grow snake
   // addSegment();  // add new segment
  
  if (snake.segments[0].x === food.x && snake.segments[0].y === food.y) {
    spawnFood();
    addSegment(); // grow snake
  }
}

// Add new segment to snake tail
function addSegment() {
  // get last tail position
  //let lastSegment = snake.segments[snake.segments.length - 1];
  // add new segment at tail
  //snake.segments.push({ x: lastSegment.x, y: lastSegment.y });

  let lastSegment = snake.segments[snake.segments.length - 1];
  // Add new segment at tail
  snake.segments.push({ x: lastSegment.x, y: lastSegment.y });
}// added 

function showGameOver() {
  background(0);
  fill(255, 0, 0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Game Over Sorry!", width / 2, height / 2);
}
function restartGame(){








}