describe('Algoritms', () => {
  it('test func', () => {
    let a = 0 // Один из немногих случаев
    // когда точка с запятой нужна :-(

    // Self invoking function
    ;(a => {
      console.info('[внутри]', { a })
      a = a + 2
    })(a)

    // Arrow function
    const sum = (a, b) => {
      return a + b
    }

    // Constructor function
    function sum2(a, b) {
      this.a = a
      this.b = b
      this.sum = this.a + this.b
      this.mult = function () {
        return this.a * this.b
      }
      return this.a + this.b
    }

    const res3 = new sum2(2, 5)
    const res4 = res3.mult()
    const res = sum(2, 5)

    console.info('info', { a, res, res3, res4 })
  })
})
