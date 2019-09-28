var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function myAwesomeFunction(element, index, array) {
    console.log("Element: " + element);
    console.log("Index: " + index);
    console.log("Array: " + array);
}

donuts.forEach(myAwesomeFunction);

// use inline function
donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

// use inline function in map
var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
