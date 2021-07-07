const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/SPACE.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    box1 = new Box(630,335,30,40)
    box2 = new Box(660,335,30,40)
    box3 = new Box(690,335,30,40)
    box4 = new Box(720,335,30,40)
    box5 = new Box(750,335,30,40)
    box6 = new Box(780,335,30,40)
    box7 = new Box(810,335,30,40)
    box9 = new Box(840,335,30,40)
    box10 = new Box(870,335,30,40)
    box11 = new Box(900,335,30,40)
    box12 = new Box(930,335,30,40)
    box13 = new Box(960,335,30,40)
    box14 = new Box(990,335,30,40)
    box15 = new Box(1020,335,30,40)
    box8 = new Box(1050,335,30,40)

    box2r = new Box(660,275,30,40)
    box3r = new Box(690,275,30,40)
    box4r= new Box(720,275,30,40)
    box5r= new Box(750,275,30,40)
    box6r = new Box(780,275,30,40)
    box7r = new Box(810,275,30,40)
    box9r = new Box(840,275,30,40)
    box10r = new Box(870,275,30,40)
    box11r = new Box(900,275,30,40)
    box12r = new Box(930,275,30,40)
    box13r = new Box(960,275,30,40)
    box14r = new Box(990,275,30,40)
    box15r = new Box(1020,275,30,40)

    box3rc = new Box(690,250,30,40)
    box4rc= new Box(720,250,30,40)
    box5rc= new Box(750,250,30,40)
    box6rc = new Box(780,250,30,40)
    box7rc = new Box(810,250,30,40)
    box9rc = new Box(840,250,30,40)
    box10rc = new Box(870,250,30,40)
    box11rc = new Box(900,250,30,40)
    box12rc = new Box(930,250,30,40)
    box13rc = new Box(960,250,30,40)
    box14rc = new Box(990,250,30,40)

    box4rcv= new Box(720,125,30,40)
    box5rcv= new Box(750,125,30,40)
    box6rcv = new Box(780,125,30,40)
    box7rcv = new Box(810,125,30,40)
    box9rcv = new Box(840,125,30,40)
    box10rcv = new Box(870,125,30,40)
    box11rcv = new Box(900,125,30,40)
    box12rcv = new Box(930,125,30,40)
    box13rcv = new Box(960,125,30,40)
   
    box6rcvg = new Box(780,80,30,40)
    box7rcvg = new Box(810,80,30,40)
    box9rcvg = new Box(840,80,30,40)
    box10rcvg = new Box(870,80,30,40)
    box11rcvg = new Box(900,80,30,40)
    
    box9rcvgs = new Box(840,20,30,40)


    

    bird = new Bird(200,200);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:180, y:215});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
  
    ground.display();
   
    fill("orange")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box8.display()

    fill("red")
    box2r.display()
    box3r.display()
    box4r.display()
    box5r.display()
    box6r.display()
    box7r.display()
    box9r.display()
    box10r.display()
    box11r.display()
    box12r.display()
    box13r.display()
    box14r.display()
    box15r.display()

    fill("blue")
    box3rc.display()
    box4rc.display()
    box5rc.display()
    box6rc.display()
    box7rc.display()
    box9rc.display()
    box10rc.display()
    box11rc.display()
    box12rc.display()
    box13rc.display()
    box14rc.display()

    fill("green")
    box4rcv.display()
    box5rcv.display()
    box6rcv.display()
    box7rcv.display()
    box9rcv.display()
    box10rcv.display()
    box11rcv.display()
    box12rcv.display()
    box13rcv.display()
    
    fill("lightblue")
    box6rcvg.display()
    box7rcvg.display()
    box9rcvg.display()
    box10rcvg.display()
    box11rcvg.display()

    fill("brown")
    box9rcvgs.display()


    bird.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body)
    }
}