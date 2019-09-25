var x = 1;

while (x <= 20) {
	if (x % 3 === 0) {
		console.log("Julia");
	}

	if (x % 5 === 0) {
		console.log("James");
	}

	if (x % 15 === 0) {
		console.log("JuliaJames");
	}

	if (x % 3 !== 0 && x % 5 !== 0) {
		console.log(x);
	}

	x = x+1;
}
