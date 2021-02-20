// function that takes multiple arguments one at a time

const add = x => y => x + y

// add(3)(4)

const increment = add(1)
console.log(increment(655))