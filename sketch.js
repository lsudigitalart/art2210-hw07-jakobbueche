/* let soundPlayed = false
let sound
//let startTime

function preload() {

  sound = loadSound('dimeback.mp3');

}

function setup() {
  createCanvas(400, 400);

  if (!soundPlayed) {
    sound.play();
    soundPlayed = true;
}

}

function draw() {
   background(220);

} */



let sound;
let fft

function preload() {
  sound = loadSound('dimeback.mp3');
}
   
function setup() {
  createCanvas(600, 600);

  let button = createButton('Start');
  button.mousePressed(playSound);

  fft = new p5.FFT();

}
   
function playSound() {
  if (sound.isPlaying()) {
    sound.stop();
  }
  sound.play();
}
   
function draw() {

  background(0, 0, 40);

  /*fill(0,0,100)
  let currentTime = sound.currentTime();
  text(`Current time: ${currentTime} s`, 10, 20);*/

  let spectrum = fft.analyze();

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    fill(i, i, 200);
    noStroke()
    ellipse(300,300,x, h/1.2)
  }

 } 
