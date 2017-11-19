var dvdImage
function preload(){
    dvdImage = loadImage("dvdlogo.jpg")
}
function setup(){
 createCanvas(800, 600)
}
var xPosition = 50
var yPosition = 50
var xSpeed = 5
var ySpeed = 5
var backgroundColor = "#022d72"

function draw(){
    background(backgroundColor)
    image(dvdImage, xPosition, yPosition, 100, 100)
    
    xPosition = xPosition + xSpeed
    if (xPosition > 700){
        xSpeed = xSpeed * -1
        backgroundColor = "red"
    }
    if (xPosition < 0){
        xSpeed = xSpeed * -1
        backgroundColor = "blue"
    }
    
    yPosition = yPosition + ySpeed
    if (yPosition > 500){
        ySpeed = ySpeed * -1
        backgroundColor = "yellow"
    }
    if (yPosition < 0){
        ySpeed = ySpeed * -1
        backgroundColor = "green"
    }

}