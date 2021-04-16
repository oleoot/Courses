

// let message = 5
// message = 4
// console.log(message)



// const message = 5
// message = 4
// console.log(message)




// var message = 5
// console.log(message)


// let age = 25
// let Age = 60
// let ageType = "type"
// let message = "Hello"



// let class = 0

// NUMBER ========================================================
// let number = 123
// number = 12.45
// let newNuber = "Привет"
// // let sum = number + newNuber
// console.log(newNuber / 6 + 2)


// String =======================================================
// let personName = "Oleg"
// let str = 'Privet'



// let backTicks = `Privet, ${name}`

// console.log(str + personName)


// Boolean =======================================================

// let isGreater = 4 < 1


// console.log(isGreater)


// Null ============================================================

// let age = null



// Undefined ============================================================

// let message = 10


// Object ===============================================================

// let newObject = {
// age: 23,
// weight: 70,


// }



// BigInt ===============================================================
// let newNumber = 482579247589247524753475345637456347567346587434358743657437856n




// console.log(typeof message)




// Alert, Prompt, Confirm ===============================================
// alert("Hello")
// let message = prompt("Какой твой возраст?")

// alert(`Тебе ${message} лет`)
// alert("")
// let result = confirm("Любишь мороженное?")

// alert(result)







// Урок JS 2 =====================================================================================================

// Boolean
// String
// Number


// let value = null
// value = Boolean(value)

// console.log(value)





// + - * /


// Операнд

// let x = 1


// Унарный
// x = -x

// Бинарный

// x = y


// Математические операторы

// +
// -
// *
// /

// %
// **

// console.log(8 ** 3)

// let stroka = "1"
// let stroka1 = 5
// let result = stroka + stroka1
// console.log(result)
// 1 + 1 * 2


// let n = 2

// n = n + 5
// n += 5

// console.log(n)


// let n = 2
// // n--
// // n++


// --n
// ++n
// console.log(n)


// let counter = 1

// let a = ++counter
// console.log(a)



// let counter = 1

// let a = counter++
// console.log(a)


// const NUMBER = (3 + 6, 3 + 5)
// console.log(NUMBER)



// Операторы сравнения
// a > b
// a < b
// a >= b
// a <= b
// a == b
// a === b
// a != b


// let a = "Привет"
// let b = "Пока"
// console.log(a == b)



// let a = 0
// let b = undefined

// console.log(b <= 0)
// "1" + 1


// 3 урок =======================================================================================


// let number1 = "Привет"
// let number2 = 2
// let test = false


// if(number1 < number2){
//     console.log("Больше")
// } else if((number1 > number2) && test){
//     console.log("Больше Меньше")
// } else {
//     console.log("Меньше")
// }


// switch(number1){
//     case "Привет":
//     console.log("5")
//     break
//     case "Пока":
//     console.log("4")
// }


// Логические операторы

// ||
// &&
// !


// if(number1 < number2 || 1 > 0 || true == true || false == false){
//     console.log("Больше")
// }



// let hour = 12
// let minute = 28


// if(a && b || c && d){
//     console.log(`Текущее время ${hour}:${minute}`)
// }


// let value = false
// let value1 = false
// console.log(!value1)

// if(!value1 && 1 == 1 || 2 == 3){

// }



// Циклы


// While



// let value = 5


// while(value){
//   console.log(value)
//   value--
// }




// do While


// let value = 0

// do {
//     console.log(value)
//     value++
// } while(value < 0)


// For

// for(let i = 0; i < 6; i++){
//     if(i == 3 || i == 4) continue
//     console.log(i)
// }



// let array = ["Привет", "Пока"]


// for(let i = 0; i < array.length; i++){
//     // if(i == 3 || i == 4) continue
//     console.log(array[i])
// }



// Функции
// let valueNew = "Пока"

// function show(){
//    let valueNew = "Как дела"
//    let value = "Привет"
//    console.log(value)
//    console.log(valueNew)
// }


// function show(firstName, secondName){
//    let fullName = `Привет ${firstName} ${secondName}`
//    console.log(fullName)
// }
//  let value = 2
// show("Ваня", "Попов")


// function calc(a, b){
//     if(a + b > 10){
//     return "Сумма больше 10"
//     } else {
//     return "Сумма меньше 10"
//     }
// }




// let result = sum(2, 20)




// console.log(result)




// function sum(a, b){
//     if(a + b > 10){
//     return "Сумма больше 10"
//     } else {
//     return "Сумма меньше 10"
//     }
// }


// let sum = (a, b)=> {
//     return a + b
// }

let alertMessage = () => {
    console.log("Привіт")
    console.log("Привіт")
    console.log("Привіт")
}




let result = alertMessage()
