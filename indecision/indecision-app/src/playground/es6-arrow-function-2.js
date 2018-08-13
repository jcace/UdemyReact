
// Arguments object no longer bound with arrow functions.

const add = (a, b) => {
    return a + b;
};

console.log(add(55,1,1001));

// This keyword is also no longer bound
// Arrow functions don't bind the "this" keyword. IT uses the parent's one.
// Can be useful, but in certain places you don't want "this" to be re-bound

// ES6 method definition syntax - don't need the "function" keyword.
const user = {
    name: 'Jason',
    cities: ['Calgary', 'Edmonton', 'Dublin'],
    printPlacesLived() {
        // Foreach just lets you do something with the data,
        // * Map actually transforms the original array!
        // Function transforms each item, 'return' puts it back in its original place
        return this.cities.map( (city) => this.name + " has lived in " + city);
    }
    };

console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    // numbers array
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num)=> num*this.multiplyBy);
    }
}

console.log(multiplier.multiply());