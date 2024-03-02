
let bellsound;
let playButton;
let pauseButton;
let stopButton;

let font;

let btnimg_1 , btnimg_2 , btnimg_3 ;

var bg;

var bgimg;

var playbutn1;

var song;

var slider;

var play_cntl;

var jumpButton;


function preload(){
    
    soundFormats('mp3', 'ogg');
    
    bellsound = loadSound("Bell.mp3");
    
    font = loadFont('font/CountrysideTwo-r9WO.ttf');
    
    btnimg_1 = loadImage('image/Btn-1.png');
    
    btnimg_2 = loadImage('image/Btn-2.png');
    
    btnimg_3 = loadImage('image/Btn-3.png');
    
    bg = loadImage("https://assets-global.website-files.com/5a9ee6416e90d20001b20038/64f59061be566b5a01cfa6a1_Global-Warming.svg")
    
    playbutn1 = loadSound('Sound/islandy.mp3');
    
    bgimg = loadImage('image/BG-3.png');

    song = loadSound('Sound/Desp.wav');





  
}


function setup() {


    play_cntl = createButton("Play");
    play_cntl.mousePressed(togglePlaying);

    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);

    
    slider = createSlider(0,1,0.5,0.01);

    
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


    // song.addCue(5 ,changeBackground);

    song.addCue(5, changeBackground);
    
    
      
}


// function changeBackground () {

//     background (random(255) , random(255),random(255));
// }


function changeBackground() {
    background(random(255), random(255), random(255));
}




function jumpSong(){

    // var jumpTimeInSeconds = 0.5;
    // console.log("Jumping to time",jumpTimeInSeconds);

    // song.jump(jumpTimeInSeconds);

    var len = song.duration();

    var t = 0; //random(len);
    song.jump(t);



}


function togglePlaying (){

    if (!song.isPlaying()){

        song.play();
        song.setVolume(0.5);
        play_cntl.html("Stop");

    }

    else{
        song.stop();
        play_cntl.html("Play");

    }
   

}


function playMusic(){
    
    playbutn1.play();
}




function pauseMusic(){
    playbutn1.pause();
}

function stopMusic(){
    playbutn1.stop();
}

function draw() {
    // put drawing code here
    background(bg);  


    song.setVolume(slider.value());

       
    textSize(50);
    text('Music Player',200,200);
    
    fill('yellow')
    ellipse(350,350,50,50);
    
    fill('yellow')
    ellipse(450,350,50,50);
    
    fill('yellow')
    ellipse(550,350,50,50);
    
    image(btnimg_1,100,250,100,50,);
    
    image(btnimg_2,100,350,100,50,);
    
    image(btnimg_3,100,450,100,50,);
       
    text("Song..1", 500, 500);
     
    image(bgimg , 900,300,500,500);

   
   

}