// function yolochka1(item_1, item_2){ // функция

// let mass = 'Hello!!!'
// console.log(mass, item_1, item_2)
// console.log(mass, item_1 + item_2);

// }

// yolochka1(11, 22)

// стрелочная функция

// function f1(){
//     console.log("Hello")
// }
// f1()

// let f11 = () => {console.log("Hello!!!")}

// f11()

let t1 = 10
let t2 = 20
let t3 = 30
let t4 = 40

// let f22 = (t1, t2) => {console.log('Sum = ' + (t1 + t2))}

// f22(t1,t2)

// let f33 = (t1 < t2) ?
// (t1, t2) => console.log('order = ' , t1 + t2): // если (t1 < t2) true , т.е. выполняется, то первая строка
// (t1, t2) => console.log('order = ' , t1 - t2); // если не выполняется, то вторая строка

// f33(t3, t4)

// запись обычной функцией посмотреть в лекции

function f55(t1, t2){
    if (t1 < t2) {
        console.log('order IF = ', t1 + t2)
    }
    else {
        console.log('order IF = ', t1 - t2)
    }
}
f55(t1, t2)