const GRID_SIZE = 20;
let headX=0
let headY=400;
let foodX=100
let foodY= 100
function setup() {
  createCanvas(600, 600);
  frameRate(3);
    let numberOfCells = width / GRID_SIZE;
    let randomXCell = floor(random(numberOfCells));
    let randomYCell = floor(random(numberOfCells));
    foodX = randomXCell * GRID_SIZE + GRID_SIZE / 2;
    foodY = randomYCell * GRID_SIZE + GRID_SIZE / 2;
}
function draw() {
  background(220);

let x = random(200, 100);
let y = random(200, 100);
// enimiey 
  strokeWeight(5);
  point(x, y);
  noStroke(0);
  fill(255,0,0)
  circle(foodX, foodY, GRID_SIZE);

  // snak file 
  noStroke(0)
  fill(0);
  square(headX, headY, GRID_SIZE);
    if (headX < width - GRID_SIZE) {
        headX += GRID_SIZE;
    }
  


}
function keyPressed() {
    
     
      
    }