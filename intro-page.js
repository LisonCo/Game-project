// Choose character button
$("#girl-button").click(function(){
    clickCharacter();
    prepareCharacter(myCharacter);
    // loadRecipe();
})

$("#boy-button").click(function(){
    clickCharacter();
    myCharacter['path'] = "images/boy.png";
    prepareCharacter(myCharacter);
   // loadRecipe();
})

// What happen when the character button is clicked
function clickCharacter(){
    $("#intro").toggle();
    firstMessage();
}