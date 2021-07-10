describe('Algoritms', () => {
  it('test func', () => {
    function isPrime(a) {
      let j = false
      let i = 2
      for (i = 2; i * i <= a && j != true; i++) {
        if (a % i === 0) {
          j = true
        }
      }
      if (j === true) {
        return false
      } else {
        return true
      }
    }

    const testArr = [
      { argument: 0, expected: true },
      { argument: 1, expected: true },
      { argument: 2, expected: true },
      { argument: 3, expected: true },
      { argument: 4, expected: false },
      { argument: 5, expected: true },
      { argument: 6, expected: false },
      { argument: 7, expected: true },
      { argument: 8, expected: false },
      { argument: 9, expected: false },
      { argument: 10, expected: false },
      { argument: 11, expected: true },
    ]

    let output = testArr.map(item => isPrime(item.argument))
    console.info('[]', { output })
    // output = true
    const expected = testArr.map(item => item.expected)
    expect(output).toEqual(expected)
  })
})
