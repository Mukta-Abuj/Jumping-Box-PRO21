var canvas, edges;
var music;
var surface1, surface2, surface3, surface4, box;

function preload(){
    music = loadSound("sound.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(700, 580, 190, 30);
    surface1.shapeColor = rgb(0, 102, 24);

    surface2 = createSprite(500, 580, 190, 30);
    surface2.shapeColor = rgb(173, 0, 69);

    surface3 = createSprite(300, 580, 190, 30);
    surface3.shapeColor = rgb(225, 117, 0);

    surface4 = createSprite(100, 580, 190, 30);
    surface4.shapeColor = rgb(0, 5, 253);

    //create box sprite and give velocity
    box = createSprite(0, 0, 30, 30);
    box.velocityY = 6;

}

function draw() {
    background(rgb(169,169,169));
    box.x = World.mouseX;
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = rgb(0, 102, 24);
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = rgb(173, 0, 69);
        music.play();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = rgb(225, 117, 0);
        music.play();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = rgb(0, 5, 253);
        music.play();
    }


    drawSprites();
}
