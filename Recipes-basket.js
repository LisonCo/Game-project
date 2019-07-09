var recipeBook = { 
    "recipe" : [
        {
        "recipe-name": "Ratatouille",
        "ingredients": [
            "tomato",
            "pepper"
        ]
        },
        {
        "recipe-name" : "Salad",
        "ingredients" : [
            "salad",
            "tomato"
        ]
        }
    ]
}   

function loadRecipe(){
    document.getElementsByTagName("h1")[0].innerHTML = recipeBook['recipe'][0]['recipe-name'];
    document.getElementById("recipe-ingredients").innerHTML = recipeBook['recipe'][0]['ingredients'];
}

function updateBasket(){
    var newImg = document.createElement("IMG");
    newImg.setAttribute ("src", pickedVegetables[0].path);
    document.getElementById("picked-vg").appendChild(newImg);
}

