describe('Algoritms', () => {
  it('test IsInteger', () => {
    function IsInteger(a) {
      if (a % 1 === 0) {
        return true
      } else {
        return false
      }
    }

    const arrTest = [0, 5.5, 5, 10, 10.000001]

    let output = arrTest.map(item => IsInteger(item))
    console.info('[]', { output })
    const expected = [true, false, true, true, false]
    expect(output).toEqual(expected)
  })
})
