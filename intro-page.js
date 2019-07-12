// Choose character button
$("#girl-button").click(function(){
    clickCharacter();
    prepareCharacter(myCharacter);
})

$("#boy-button").click(function(){
    clickCharacter();
    myCharacter['path'] = "images/boy.png";
    prepareCharacter(myCharacter);
})

// What happen when the character button is clicked
function clickCharacter(){
    $("#intro").toggle();
    firstMessage();
    chronometer.startTimer();
}