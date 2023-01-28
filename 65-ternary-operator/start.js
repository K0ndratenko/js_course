/** ЗАДАЧА 65 - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */

function isNumber(a) {

 return (typeof a === 'number') ? 'this is number' : 'this isn"t a number'
 
}

console.log(isNumber(10))
// 10 - это число

console.log(isNumber('Привет'))
// Привет - это не число

console.log(isNumber(true))
// true - это не число
