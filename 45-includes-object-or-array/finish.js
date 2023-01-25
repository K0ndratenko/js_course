/** ЗАДАЧА 45 - Поиск элементов в массивах
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 *
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 *
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

let var1 = fruits.toString()

let var2 = tags.toString()
console.log(var1)
console.log(var2)