// Задача №1 Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1 
for (let i = 1; i < 11; i++) 
    console.log(2 ** i) 
    

// Задача №1* Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2 

const exponenta1 = function(i) {
    console.log(2 ** i)
}
    exponenta1(2)
    exponenta1(5)
    exponenta1(10)

let exponenta2 = function(i) { //можно использовать метод Math.pow()
    console.log(Math.pow(2, i))
}
exponenta2(2)
exponenta2(8)

// Функция для любых чисел
const exponenta3 = function(p1, i) {
     console.log("Число " + p1 + " в степени " + i + " равно " + p1 ** i)
}
    exponenta3(3, 4)

const exponenta4 = function(p_1, i) {
            console.log("Число " + p_1 + " в степени " + i + " равно " + Math.pow(p_1, i))
    }
    exponenta4(4, 5)


// Задача №2 Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее*/

let s_2 = ""
for (let i = 0; i < 5; i++)
console.log(s_2+=':)') //присвоение нужно, чтобы каждая последующая строка увеличивалась на один смайл


/*Задача №2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/
r1=''
function printSmile(stroka, numberOfRows) {
    for (let i=1; i<=numberOfRows; i++){
    console.log(r1+=stroka)
    }
}
printSmile('(-:-)',6)

function printSmile(stroka, numberOfRows) {
    for (let i=1; i<=numberOfRows; i++){
        console.log(stroka.repeat(i))
    }
}
printSmile('(-:-)',6)     


/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'*/

console.log('Roman and Andrey'.split(' ')) /* чтобы разбить предложение по словам, нужно поставить разделитель пробел. 
                                            Если поставить '', то разобъется по буквам */
console.log([1,2,3,4,5].join('/ _ /'))


function getWordStructure(word){

    let vowelsArray = ['a','e','i','o','u','y']
    let consonantsArray = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
    let tempArray = word.toLowerCase().split('') /*toLowerCase приводит строку в нижний регистр. split разделяет строку в массив, пустые кавычки разделяет
    строку на отдельные элементы, т. е. букыв*/
    let vowelsSum = tempArray.filter(x => vowelsArray.includes(x)).length;
    /*Метод filter() создаёт новый массив с элементами прошедшими проверку
    Свойство length позволяет узнать длину строки*/ 
    let consonantsSum = tempArray.filter(x => consonantsArray.includes(x)).length;
    console.log(`Слово ${word} содержит гласных букв: `+vowelsSum+" и согласных букв: "+consonantsSum) 
    console.log(tempArray) // выведет введеное слово в виде массива
    let tempArray2 = tempArray.join(''); // метод join наоборот сливает массив в строку
    console.log(tempArray2) // выводит наше слово строкой, но внижнем регистре    
}

getWordStructure('Error word')