/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// myInterval = setInterval(function, milliseconds);
// Then you can to stop the execution by calling clearInterval():

// clearInterval(myInterval);


let MyInterval = setInterval(() => {
    console.log('1')
    
clearInterval(MyInterval)
}, 2000);


let MyInterval1 = setInterval(() => {
    console.log('2')
    
clearInterval(MyInterval1)
}, 4000);


let MyInterval2 = setInterval(() => {
    console.log('3')
    
clearInterval(MyInterval2)
}, 6000);


let MyInterval4 = setInterval(() => {
    console.log('4')
    
clearInterval(MyInterval4)
}, 8000);


let MyInterval5 = setInterval(() => {
    console.log('5')
    
clearInterval(MyInterval5)
}, 10000);




