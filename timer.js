class Chronometer {

    constructor() {
      this.currentTime = 60;
      this.intervalId;
    }
  
    startTimer() {
      this.intervalId = setInterval(function(){
        this.currentTime--;
        if (this.currentTime == 0){
            stopChrono();
        } 
        this.setTime();
        printTime();
      }.bind(this), 1000);
    }
  
    setMinute() {
      return Math.floor(this.currentTime/60);
    }
  
    setSeconds() {
      return this.currentTime % 60;
    }
  
    twoDigitsNumber(aValue) {
        if (aValue<10){
          return `0${aValue}`
        }
        else {
          return aValue;
        }
      }
  
    setTime() { 
      var minutes = this.twoDigitsNumber(this.setMinute());
      var seconds = this.twoDigitsNumber(this.setSeconds());
      return minutes.toString() + seconds.toString();
    }
  
    stopTimer() {
      clearInterval(this.intervalId);
    }
  
    resetTimer() {
      this.currentTime = 60;
      return this.currentTime.toString() + "0" + "0" + "0";
    }
  
}
  
var chronometer = new Chronometer();
  
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
  
function printTime() {
  let currentValue = chronometer.setTime();
  minDec.innerHTML = currentValue.charAt(0);
  minUni.innerHTML = currentValue.charAt(1);
  secDec.innerHTML = currentValue.charAt(2);
  secUni.innerHTML = currentValue.charAt(3);
  return currentValue.charAt(0) + currentValue.charAt(1) + ":" + currentValue.charAt(2) + currentValue.charAt(3);
}
  
function stopChrono(){
  chronometer.stopTimer();
  chronometer.resetTimer();
  $("#over").toggleClass("hidden");
  document.getElementById("message-p").innerHTML = "";
  document.getElementById("you-won").innerHTML = `You've picked ingredients for ${numberOfRecipeDone} recipes, now let's cook!`
}

function startAgain() {
  $("#over").toggleClass("hidden");
  checkWinToggle();
  firstMessage();
  chronometer.startTimer();
  document.getElementById("message-p").innerHTML = "";
  document.getElementById("picked-vg").innerHTML = "";
  myBasket = {};
  document.getElementById("recipe-ingredients").innerHTML = "";
  currentRecipe = loadRecipe();
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  myCharacter['x'] = 270;
  myCharacter['y'] = 270;
  updateCanvas(myCharacter, defaultVegetables);
  myVegetables = [].concat(defaultVegetables);
}

$("#start-again-button").click(function(){
  startAgain();
})

function checkWinToggle(){
  if (!$("#win").hasClass("hidden")){
  $("#win").toggleClass("hidden")
    };
}

