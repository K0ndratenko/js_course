/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */



function callBack(){
setTimeout(() => {
    console.log('Hi')
}, 5000);
}


let foo = (callBack)=>{
        callBack()
}

foo(callBack)