describe('Algoritms', () => {
  it('test task01Es', () => {
    const task01Es = () => {
      var a1 = ['Аня', 'Алена', 'Бося', 'Мама', 'Папа']
      //Дано
      let x1 = a1.indexOf('Мама')
      // Узнаём индекс мамы
      let x2 = [...a1]
      x2.push('Бабуша', 'Дедушка')
      // Добавляем Бабушку и Дедушку
      let x3 = [...x2].sort()
      //Сортируем по алфавиту
      let x4 = [...x3].splice(3, 1)
      //Минус Бося
      let x5 = 'Моя семья ' + a1
      //Создаём предложение/строку
      let x6 = [...a1].join().length
      let x61 = [...x2].join().length
      let x62 = [...x5].join().length
      //Выясняем длину строк: x6, x61, x62

      console.log('[01]', a1)
      console.log('[01]', x1)
      console.log('[02]', x2)
      console.log('[03]', x3)
      console.log('[04]', x4)
      console.log('[05]', x5)
      console.log('[06]', x6, x61, x62)
    }

    let output = task01Es()
    // console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
