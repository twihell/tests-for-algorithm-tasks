// 178 в)
// Даны натуральные числа n, a1,..., an. Определить количество членов аК последовательности: являющихся квадратами четных чисел

const checkSquareEvenNumbers = array => {
  let numberCounter = 0
  array.forEach(element => {
    const checkIfNumberIsASquare = Math.sqrt(element) % 1 === 0
    if (element === 1 || element % 2 === 0 && checkIfNumberIsASquare) numberCounter++
    // else if (typeof element !== 'number') {
    //     throw new TypeError(`${element} is not a number type`)
    // }
  })
  return numberCounter;
}

// checkSquareEvenNumbers(array)

module.exports = { checkSquareEvenNumbers };