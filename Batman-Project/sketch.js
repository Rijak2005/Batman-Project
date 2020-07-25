const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops=[];
var batman;
var bg,sound,thunder;
var count = 0;

function preload(){
    bg = loadImage("assets/bg.jpg");
}

function setup(){
   var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    sound = createAudio('assets/im-batman.mp3');
    thunder = createAudio('assets/thunder_strike_1-Mike_Koenig-739781745.mp3');
    batman = new Batman(300,300,150);
    for(var i=0; i<1000; i++){
        drops.push(new Drops(random(0,8000),random(-400,-2000),random(0,50)));
    }
}

function draw(){
    
    background(bg);
    Engine.update(engine);

    

    batman.display();

    for(var j=0; j<drops.length;j++){
        
        currentDrop = drops[j];
        currentDrop.display();
        
        if(currentDrop.body.position.y>400){
            Matter.Body.setPosition(currentDrop.body, {x: random(0,8000) , y: random(-400,-2000)});
        }
        
        
    }

    thunder.play();

}   


function mouseClicked() {

    count = count+1;

    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height && count<10) {
      sound.play();
    } 
    else {

    alert("Okay! I've said it "+count+" times! Now I am tired of saying i'm batman!");

    }
  }
