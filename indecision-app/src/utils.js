console.log('utils.js is running');

export const square = (x) => x*x;

export const add = (a,b) => a + b;

// each file maintains its own local scope

// Two types of exports:
// 1. Default export
// 2. Named exports.

// Named export:
// not an object definition!
// export { square, add};

const subtract = (a,  b) => a- b;

export default subtract;