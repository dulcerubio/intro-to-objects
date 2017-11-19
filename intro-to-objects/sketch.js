var bubbles = [ ]
function setup() {
  createCanvas(800,600)
  for (var i = 0; i < 100; i++){
      bubbles.push({ 
          x: random(0, width), 
          y: random(0, height),
          size: random(20, 50),
          color: color(random(0, 255), random(0, 255), random(0,255))
      })
  }
}

function draw() {
  background(0)
  fill(250)
  for (var b = 0; b < bubbles.length; b++) {
    fill(bubbles[b].color)
    ellipse(bubbles[b].x, bubbles[b].y, bubbles[b].size, bubbles[b].size)

    bubbles[b].x += random(-3, 3)
    bubbles[b].y += random(-3, 3)      
  }
}