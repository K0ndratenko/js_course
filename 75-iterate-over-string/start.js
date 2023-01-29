/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

function vowelsCountFunction(str){
    for (const iterator of str) {
        if(vowels.includes(iterator)){
            vowelsCount++;
        }
    }
}

vowelsCountFunction(str)
// Напишите код здесь

console.log(vowelsCount)
// 9
