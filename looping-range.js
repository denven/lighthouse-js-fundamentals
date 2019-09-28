function range(start, end, step) {
  let numArray = [];
  if (end >= start && step > 0) {
    let length = Math.floor((end - start) / step) + 1;
    for(let i = 0; i < length; i++) {
      numArray.push(start + step * i);
    }
  }
  return numArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
