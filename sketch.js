
let bellsound;
let playButton;
let pauseButton;
let stopButton;

let font;

let imgPlay;

function preload(){
    
    bellsound = loadSound("Bell.mp3");
    
    font = loadFont('font/CountrysideTwo-r9WO.ttf');
    
    imgPlay = loadImage('image/Play.png'); 
}

    

function setup() {
    
    textFont(font);
    
    
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

function showImage(){
    
    image(imgPlay,100,100,400,300);
}


function pauseMusic(){
    bellsound.pause();
}

function stopMusic(){
    bellsound.stop();
}

function draw() {
    // put drawing code here
    background(150,0,86, 59);  
    
    textSize(50);
    text('Music Player',200,200);
    
    
    
    fill('yellow')
    ellipse(350,350,50,50);
    
    fill('yellow')
    ellipse(450,350,50,50);
    
    fill('yellow')
    ellipse(550,350,50,50);
    

}