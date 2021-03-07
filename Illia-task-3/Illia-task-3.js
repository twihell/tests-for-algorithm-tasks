//554 
// Дано натуральное число. Получить все пифагоровы тройки натураных чисел, каждое из которых не превосходит n, т.е. все такие тройки натуральных чисел a,b,c, что a^2+b^2=c^2(a<=b<=c<=n)

const pythagoreanTriplet = n => {
  // if (typeof n !== 'number' || n === null) {
  //     throw new TypeError('Invalid input type. Should be number')
  // } else if (n < 5) throw new RangeError('Minimal number is 5')

  let a = 1
  for (a; a < n - 1; a++) {
    for (let b = a; b < n; b++) {
      const c = Math.sqrt(a * a + b * b)
      if (c % 1 === 0) console.log(a, b, c)
    }
  }
}

// pythagoreanTriplet(0)

module.exports = { pythagoreanTriplet };