/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

let a = 'first'
let b = 'second'

//console.log(a, b)
// first second

a = a.concat(' ',b)
a = a.slice(6,a.length)

b= a.slice(0,5)

console.log(a,b)
// second first
