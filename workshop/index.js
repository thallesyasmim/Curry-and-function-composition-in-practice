const numbers = [1, 2, 3, 4, 5, 6] // Methods of Array: map, filter, reduce - High Order Functions

const double = x => x * 2
const isEven = x => x % 2 === 0
const add = (x, y) => x + y

console.log(
    numbers.map(double), // .map abstracts our iteration
    numbers.filter(isEven), // .filter also abstracts the filtering
    numbers.reduce(add, 0) // .reduce runs through an array and accumulates the results
)