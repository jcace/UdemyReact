var nameVar = 'Andrew';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = ' Brad';
console.log('nameLet', nameLet);

const nameConst = 'Co';
console.log('nameConst', nameConst);

// Block Scoping
var fullName = 'Jen Mead';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);