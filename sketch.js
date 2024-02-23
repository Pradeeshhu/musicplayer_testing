
let bellsound;
let playButton;
let pauseButton;
let stopButton;

function preload(){
    
    bellsound = loadSound("Bell.mp3");
}

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    
    playButton = createButton("Play Music");
    playButton.position(10,30);
    playButton.mousePressed(playMusic);   
    
    pauseButton = createButton("Pause Music");
    pauseButton.position(100,30);
    pauseButton.mousePressed(pauseMusic);
    
    stopButton = createButton("Stop Music");
    stopButton.position(200,30);
    stopButton.mousePressed(stopMusic);
    
}

function playMusic(){
    bellsound.play();
}

function pauseMusic(){
    bellsound.pause();
}

function stopMusic(){
    bellsound.stop();
}

function draw() {
    // put drawing code here
    background(222);
  
}