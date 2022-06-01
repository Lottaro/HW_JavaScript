// Task 1. Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в 3.task1.txt

const users1 = [ 
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021' 
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021' 
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

// вариант 1
const userFiltered = users1.filter((user) => { /* метод filter фильтрует массив, здесь по дате регистрации*/
    if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
        return user;
    }
})

console.log(userFiltered)

// вариант 2
const userFiltered1 = users1.filter((user) => {
    if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
        console.log(user.firstName + '/' + user.lastName + '/' + user.registrationDate)   
    }
})


// вариант 3
users1.forEach(user => { /* метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве
здесь сравнивает дату регистрации для каждого элемента массива*/
    if(user.registrationDate == '10.10.2021') 
    console.log('Пользователь ' + user.firstName + ' ' + user.lastName + ' зарегистрирован 10.10.2021')
    else if (user.registrationDate == '09.10.2021')
    console.log('Пользователь ' + user.firstName + ' ' + user.lastName + ' зарегистрирован 09.10.2021')
})

// вариант 4
users1.forEach(user => {
    if(user.registrationDate == '10.10.2021' || user.registrationDate == '09.10.2021') 
    console.log('Пользователь_' + user.firstName + '_' + user.firstName + `_зарегистрирован_${user.registrationDate}`)
})

/* Task 2*. Откройте в VSCode 3.task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. 
Реализуйте функцию, которая будет выполнять эту работу*/

const fs = require('fs');
const users2 = JSON.parse(fs.readFileSync("./JS_Lesson_3_HW/3.task2.json"))

let uniquePersons = []
users2.forEach((el) => {
    if (uniquePersons.indexOf(JSON.stringify(el)) === -1) {
        uniquePersons.push(JSON.stringify(el));
    }
    console.log(uniquePersons)
});

let chekid = Array.from(new Set(users.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
console.log(chekid)
// Set позволяют вам создавать коллекции значений. Отличия от Array в том, то они могут содержать только уникальные значения
// Метод JSON.stringify() берет объект JavaScript и трансформирует его в строку JSON.
// Метод JSON.parse берет строку JSON и трансформирует ее в объект JavaScript
// Преобразуем JSON в строку затем, что в JSON нет одинаковых объектов, так как они ссылаются на разные ячейки памяти
