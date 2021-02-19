const numbers = [1, 2, 3, 4, 5, 6] // Methods of Array: map, filter, reduce - High Order Functions

const double = x => x * 2
const isEven = x => x % 2 === 0
const add = (x, y) => x + y

console.log(
    numbers.map(double), // .map abstracts our iteration
    numbers.filter(isEven), // .filter also abstracts the filtering
    numbers.reduce(add, 0) // .reduce runs through an array and accumulates the results
)

// High order functions - way to abstract a large piece of code and receive an interesting function

const asyncComputation = () => Promise.resolve(1)

asyncComputation()
    .then(x => x + 15)
    .then(console.log) // The .then is also a High Order Function. It abstracts the whole part of the Event Loop and the Node.js flow to give us only what is interesting


// Decorators

const withLog = fn => // Receives function as parameter and returns another function
    (...args) => {
        console.log('arguments:', args)
        const result = fn(...args)
        console.log('result:', result)
        return result
    }

const multi = (x, y) => x * y

const auditMulti = withLog(multi) /* Return at function:  (...args) => {
                                                console.log('arguments:', args)
                                                const result = fn(...args)
                                                console.log('result:', result)
                                                return result
                                          } */


auditMulti(2, 5)

// 10:37 