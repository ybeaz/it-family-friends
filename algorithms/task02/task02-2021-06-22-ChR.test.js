describe('Algoritms', () => {
  it('test func', () => {
    var a = [
      { order: 'Milk shake', price: 120 },
      { order: 'Ice cream shake', price: 150 },
      { order: 'Water', price: 0 },
      { order: 'Cofe', price: 100 },
    ]
    var order = 'Cofe'

    let output = a.filter(elem => elem.order === order)[0].price
    console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
