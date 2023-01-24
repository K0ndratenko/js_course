/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]

function fromJSONtoArrJs(someFile){
    let resultArr = []


    someFile.forEach(element => {

      // console.log(element)

      resultArr.push(JSON.parse(element))
    })
    return resultArr
}

let newArray   =fromJSONtoArrJs(postsJSON)

console.log(newArray[0].commentsQuantity)
//console.log(postsJSON[0])




// let someVar = JSON.parse(postsJSON[0])
// console.log(Object.keys(someVar))