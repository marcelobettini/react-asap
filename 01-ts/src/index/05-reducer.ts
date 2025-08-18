const numbers: number[] = [4, 7, 9, 2, 8]

// let accum: number = 0
// for (let i = 0; i < numbers.length; i++) {
//     accum += numbers[i]
// }

// numbers.forEach((num) => {
//     accum += num
// })
// for (const number of numbers) {
//     accum += number
// }

const result = numbers.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(result)