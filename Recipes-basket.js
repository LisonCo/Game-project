// Contains all the possible recipes
var recipeBook = { 
    "recipe" : [
        {
        "recipe-name": "Ratatouille",
        "ingredients": [
            "Tomato",
            "Pepper",
            "Aubergine",
            "Garlic",
            "Mushroom",
        ]
        },
        // {
        // "recipe-name" : "Salad",
        // "ingredients" : {
        //     "salad": 2,
        //     "tomato": 3,
        // }
        // }
    ]
}   

//Display the recipe
function loadRecipe(){
    document.getElementsByTagName("h1")[0].innerHTML = recipeBook['recipe'][0]['recipe-name'];
    for (i=0 ; i< recipeBook['recipe'][0]['ingredients'].length ; i++){
        let newIngredient = document.createElement("li");
        newIngredient.innerHTML = recipeBook['recipe'][0]['ingredients'][i];
        document.getElementById("recipe-ingredients").appendChild(newIngredient);
    }
}

//Add the img of the picked vegetable to the basket
function updateBasket(){
    var newImg = document.createElement("IMG");
    newImg.setAttribute ("src", pickedVegetables[0].path);
    document.getElementById("picked-vg").appendChild(newImg);
}

// MESSAGES 

// RIGHT VEGETABLE PICKED
function goodPick(){
    document.getElementById("message-p").innerHTML = "One more delicious ingredient for your recipe!";
}

// WRONG VEGETABLE PICKED
function wrongPick(){
    document.getElementById("message-p").innerHTML = "This vegetable is not part of your recipe!"
}

// This recipe is finished
    function recipeReady(){
        document.getElementById("message-p").innerHTML = `You are now ready to cook a ${recipeBook['recipe'][0]['recipe-name']}!`;
        $("#new-recipe-button").toggleClass("hideButton");
    }

// New recipe button onclick event
    $("#new-recipe-button").click(function(){
        $("#new-recipe-button").toggleClass("hideButton");
        document.getElementById("message-p").innerHTML = "";
        document.getElementById("picked-vg").innerHTML = "";
        myBasket = {};
        document.getElementById("recipe-ingredients").innerHTML = "";
        loadRecipe();
        reDrawEverything(defaultVegetables, myCharacter)
        myVegetables = [].concat(defaultVegetables)
    })
