// const person = {
//   name: 'Andrew',
//   age: 37,
//   location: {
//     city: 'Cagjwe',
//     temp: 92
//   }
// };

// // Object Destructuring
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);


// // rename syntac: Takes the temp and puts it in a new const called "temperature"
// const {temp: temperature, city} = person.location;
// if (person.location.city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'ego is the Enemy',
//   author: 'Ryan holiday',
//   publisher: {
//     name: 'Penguin',
//   }
// };

// const {name: publisherName = 'Self Published'} = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1299 South juniper Street', 'Philadelpgia', 'FE' , '90210'];
// // DOn't have to destructure all of them. Can skip some if you want.
// const [, city, state = 'CA'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [menuItem, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${menuItem} costs ${mediumPrice}`);