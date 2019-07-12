// MESSAGES 

//STARTING MESSAGE
function firstMessage(){
    document.getElementById("message-p").innerHTML = "Use the arrows to pick the right vegetables!";
}

// RIGHT VEGETABLE PICKED
function goodPick(){
    document.getElementById("message-p").innerHTML = "One more delicious ingredient for your recipe!";
}

// WRONG VEGETABLE PICKED
function wrongPick(){
    document.getElementById("message-p").innerHTML = "This vegetable is not part of your recipe!"
}

// This recipe is finished
var numberOfRecipeDone = 0;

function recipeReady(){
    numberOfRecipeDone++;
    var audio = new Audio();
    audio.src = "sounds/win.wav";
     audio.play();
    document.getElementById("message-p").innerHTML = `You are now ready to cook a ${currentRecipe["recipe-name"]}!`;
    checkWinToggle2();
    return numberOfRecipeDone;
    }

function checkWinToggle2(){
    if ($("#win").hasClass("hidden")){
       $("#win").toggleClass("hidden");
        };
    }

// New recipe button onclick event
$("#new-recipe-button").click(function(){
    document.getElementById("message-p").innerHTML = "";
    document.getElementById("picked-vg").innerHTML = "";
    $("#win").toggleClass("hidden");
    myBasket = {};
    document.getElementById("recipe-ingredients").innerHTML = "";
    currentRecipe = loadRecipe();
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    myCharacter['x'] = 270;
    myCharacter['y'] = 270;
    updateCanvas(myCharacter, defaultVegetables);
    myVegetables = [].concat(defaultVegetables);
    })