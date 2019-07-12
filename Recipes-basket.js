// Choose a random recipe

function randomRecipe(){
    let currentRecipe = recipeBook[Math.floor(Math.random()*recipeBook.length)];
    return currentRecipe;
}

// Display the recipe on the screen 
function loadRecipe(){
    var currentRecipe = randomRecipe();
    document.getElementsByTagName("h1")[0].innerHTML = currentRecipe['recipe-name'];
    for (i=0 ; i< currentRecipe['ingredients'].length ; i++){
        let newIngredient = document.createElement("li");
        newIngredient.innerHTML = currentRecipe['ingredients'][i];
        document.getElementById("recipe-ingredients").appendChild(newIngredient);
    }
    return currentRecipe;
}
var currentRecipe = loadRecipe();

//Add the img of the picked vegetable to the basket
function updateBasket(){
    var newImg = document.createElement("IMG");
    newImg.setAttribute ("src", pickedVegetables[0].path);
    document.getElementById("picked-vg").appendChild(newImg);
}