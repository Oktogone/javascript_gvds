class Test {
	constructor(min) {
		this.min = min;
	}
	filtrerMin1(tab) {
		return tab.filter(function (e) {
			return e >= this.min;
		});
	}
	filtrerMin2(tab) {
		return tab.filter(e => e >= this.min);
	}
}

let test = new Test(5);
console.log(test.filtrerMin1([12, 3, 8, 4])); // [12, 8]
