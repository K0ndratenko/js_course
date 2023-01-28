/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */




let min, max
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */


function minMax(...args){
    let  arr = args
    console.log(args)
  let maxValue =  args.reduce((accum,elm)=>{
            if(elm > accum){
accum= elm
            }
return accum

    })


    let minValue =  args.reduce((accum,elm)=>{
        if(elm < accum){
accum= elm
        }
return accum

})


return [minValue,maxValue]
}
console.log(minMax(24, 5, 34, 10 )) // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
console.log(minMax(18, 23, 103, 70, 80, 25)) // 18, 103
