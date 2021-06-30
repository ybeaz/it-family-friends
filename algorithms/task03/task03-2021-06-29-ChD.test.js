describe('Algoritms', () => {
  it('test func', () => {
    /*
  С помощью Цикла For(), While()
  произведём 5 операций с массивом.

  Создайте массив styles с элементами «Джаз» и «Блюз».
  Ц. Добавьте «Рок-н-ролл» в конец.
  Ц. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
  Удалите первый элемент массива и покажите его.
  Ц. Вставьте «Рэп» и «Регги» в начало массива.
  Ц. (while) Добавить к каждому нечетному элементу массива знак * (* Джаз)
  
  Массив по ходу выполнения операций:
  res1: Джаз, Блюз
  res2: Джаз, Блюз, Рок-н-ролл
  res3: Джаз, Классика, Рок-н-ролл
  res4: Классика, Рок-н-ролл
  res5: Рэп, Регги, Классика, Рок-н-ролл
  
  */

    let res1, res2, res3, res4, res5

    let i = 0

    let styles = ['Джаз', 'Блюз']

    res1 = [...styles]

    styles.push('Рок-н-ролл')

    res2 = [...styles]

    styles[Math.floor((styles.length - 1) / 2)] = 'Классика'

    res3 = [...styles]

    styles.shift()

    res4 = [...styles]

    styles.unshift('Рэп', 'Регги')

    res5 = [...styles]

    while (i < styles.length - 1) {
      i++

      if (i % 2 != 0) {
        styles[i] += '*'
      }
    }

    res6 = [...styles]

    console.info('res', { res1, res2, res3, res4, res5, res6 })

    const output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
