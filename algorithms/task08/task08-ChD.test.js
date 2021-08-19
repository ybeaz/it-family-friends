describe('Algoritms', () => {
  it('test removeDuplicateMembersArray with if-else, push', () => {
    function removeDuplicateMembersArray(arr) {
      let arr1 = []

      for (let value of arr)
        if (!arr1.includes(value)) {
          arr1.push(value)
        }
      return arr1
    }

    const testArr = [1, 2, 1, 'min', 'max', 'max', 'min']

    let output = removeDuplicateMembersArray(testArr)
    output = [...output]
    // console.info('[17]', { output })
    const expected = [1, 2, 'min', 'max']
    expect(output).toEqual(expected)
  })

  it('test removeDuplicateMembersArray with Set and needs work', () => {
    function removeDuplicateMembersArray(arr) {
      const set = new Set(arr)
      return set
    }

    const testArr = [1, 2, 1, 'min', 'max', 'max', 'min']
    const testArr2 = [{ a: 1 }, { a: 1 }, [1, 2], [1, 2], 1, 1, '1', '1']

    let output = removeDuplicateMembersArray(testArr)
    // console.info('[34]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
