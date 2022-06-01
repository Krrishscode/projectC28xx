const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var gameState = 0;
var play = 1, home = 0, end = 2;
var sounds;

function preload() {

  sounds = loadSound("gameClick.mp3")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, 400, 180, 150);
//create a player object from the Player class.
player = new Player(
  width - 1260,
  playerBase.body.position.y - 153,
  50,
  180);

  computerBase = new ComputerBase(
    width - 300,
    400,
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  
  
}

function draw() {
  background(189);

  Engine.update(engine);


  if (gameState === home) {

    if (keyCode === UP_ARROW) {

      gameState = play;
      sounds.play();

    }

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  }

  if ((gameState === play)) {

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("SCORE: ", width / 2, 100);

  textAlign("center", "center")
  text("game under construction :)", width / 2, height / 2)


  }

 
  playerBase.display();
//call the display() function for the player object.
  
player.display();

  computerBase.display();
  computer.display();

  

}
