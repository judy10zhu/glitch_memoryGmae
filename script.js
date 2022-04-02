// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = Array.apply(null, Array(8));
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var turnNum = 0;
var mistakesNum = 0;


 

function startGame(){
    //initialize game variables
    pattern = Array.apply(null, Array(8));
    
    // clueHoldTime = 1000;
    // cluePauseTime = 333;
    progress = 0;
    gamePlaying = true;
    mistakesNum = 0;
   document.getElementById("counts").innerHTML = mistakesNum;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
playClueSequence();
}

function stopGame(){

    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function playSingleClue(btn){
  
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
  
}


function playClueSequence(){
  guessCounter = 0;
  
  context.resume()
  let delay = nextClueWaitTime;
  
  //set delay to initial wait time
  for(let i=0;i<=progress;i++){
    pattern[i] = Math.floor(Math.random() * 5) + 1;
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  //clueHoldTime= clueHoldTime - 100;
  
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // game logic
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
         
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
     mistakesNum++;
    document.getElementById("counts").innerHTML = mistakesNum;
    if(mistakesNum > 2){
      loseGame();
    }else{
       
       playClueSequence();
    }
   
    
    
  }
}

 

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Sound Synthesis Functions
const freqMap = {
  
  1: 190,
  2: 290,
  3: 300,
  4: 400,
  5: 500
 
}
function playTone(btn,len){ 
    
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
 
  },len)
}
function startTone(btn){
  
  if(!tonePlaying){
    
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
