mario = "";
spiderman = "";

function preload(){
mario = loadSound("mario.mp3");
spiderman = loadSound("toby.mp3");
}

function setup(){
    canvas = canvasCreate(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function start(){
    mario.play;
}