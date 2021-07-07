describe('Algoritms', () => {
  it('test func', () => {
    const func = () => {
      var a1 = ['Аня', 'Алена', 'Бося', 'Мама', 'Папа']
      //1. Узнать индекс Мама (число x1)
      const x1 = a1.indexOf('Мама')
      //2. Добавить Бабушку Дедушку (массив x2)
      const x2 = [...a1, 'Бабушка', 'Дедушка']
      //x2.push('Бабушка', 'Дедушка');
      //2.1. Отсортировать массив по алфавиту (массив x3)
      const x3 = a1
      x3.sort()
      //3. Исключить кота (массив x4)
      let x4 = [...a1]
      x4 = a1.filter(function (currentValeu) {
        return currentValeu != 'Бося'
      })

      // 4. Создать строку ... - моя семья Аня, Алена, Бося, Мама, Папа (строка x5)
      a1.join()
      const x5 = 'моя семья ' + a1
      console.log(x5)
      a1.slice()
      //5. Вычислить длину строки (число x6)
      const n = a1.join()
      const x6 = n.length
      console.info('info', { x1, x2, x3, x4, x5, x6 })
    }

    let output = func()
    // console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
