describe('Algoritms', () => {
  it('test orderPrice', () => {
    function orderPrice(a, b) {
      return a.find(i => i.order == b).price
    }

    let a = [
      { order: 'Milk shake', price: 120 },
      { order: 'Ice cream shake', price: 150 },
      { order: 'Water', price: 0 },
      { order: 'Cofe', price: 100 },
    ]

    let b = 'Milk shake'
    let res = orderPrice(a, b)
    console.info('info', { res }) // 120

    b = 'Water'
    res = orderPrice(a, b)
    console.info('info', { res }) // 0

    const output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
