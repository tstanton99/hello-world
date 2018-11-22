var getRecipe = function (callback) {
    console.log("Jennifer is walking to Grandpa's");
        setTimeout(function() {
            console.log("Arriving at Grandpa's. Writing down recipe");
            recipe = ['apples', 'cinamon', 'sauce'];
            console.log("Calling back Victoria with recipe");
            callback(recipe)
            console.log("Jennifer starts walking home");
            setTimeout(function() {
                console.log("Jennifer arriving home.");
            }, 3000)
        }, 3000)
};

var cookDinner = function (recipe) {
    console.log("Victoria here!\nRecipe recived: " + recipe + "\nCooking dinner");
};

getRecipe(cookDinner)