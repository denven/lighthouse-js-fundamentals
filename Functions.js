//anounymous function
var laugh = function(number) /* finish the function expression */
{
    var str = "";
    for (i = 1; i <= number; i++) {
        str += "ha";
    }
    return str+"!";
};

console.log(laugh(10));


//named function
var cry = function dontcry() {
    console.log("boohoo!");
    return "boohoo!";
};

cry();

//inline function expression example 1
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
 
//inline function expression 1 call
emotions("happy", function(){
    return "haha!";
});

//inline function expression example 2
//declare a function
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

