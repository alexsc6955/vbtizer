class Test {

	constructor(message) {
		this.message = message;
	};

	get getMessage() {
		return this.message;
	}

};

let test = new Test('Hello World');

console.log(test.getMessage);