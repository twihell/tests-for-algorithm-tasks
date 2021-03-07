// 178 б)
// Даны натуральные числа n, a1,..., an. Определить количество членов аК последовательности: кратных 3 и не кратных 5

const checkMultiplicity = arr => {
  let numberCounter = 0
  arr.forEach(element => {
    if (element % 3 === 0 && element !== 5) numberCounter++
    // else if (typeof element !== 'number') {
    //     throw new TypeError(`${element} is not a number type`)
    // }
  })
  return numberCounter;
}


module.exports = { checkMultiplicity };