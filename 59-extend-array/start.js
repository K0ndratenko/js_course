/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */


class ExtendedArray extends Array {
 

 sum() {
    
   return this.reduce((accum,elm)=>  
         accum += elm
   )  
}

onlyNumbers(){
    return this.filter((elm) => {
        if (typeof elm === 'number'){
        return true
 } })

}

}





let a = new ExtendedArray(1,'s',3,4,5)
let someArr = [1,2,3,4,5]

console.log(a)