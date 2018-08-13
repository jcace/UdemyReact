// function square(x) {
//     return x * x;
// };


// // All arrow functions are anonymous. 
// // You have to assign it to a variable to use it later
// // const squareArrow = (x) => {
// //     return x*x;
// // };

// const squareArrow = (x) => x*x;

// console.log(squareArrow(452));


const getFirstName = (name) => name.split(' ')[0];

const getFirstName2 = (name) => {
    return name.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));