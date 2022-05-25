# **JS_HW_3** 
**Task 1. Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в 3.task1.txt**  
```js
const users = [ 
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
const userFiltered = users.filter((user) => { /* метод filter фильтрует массивпо дате регистрации
здесь по дате регистрации*/
    if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
        return user;
    }
})

console.log(userFiltered)

// вариант 2
const userFiltered1 = users.filter((user) => {
    if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
        console.log(user.firstName + '/' + user.lastName + '/' + user.registrationDate)   
    }
})

// вариант 3
users.forEach(user => { /* метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве
здесь сравнивает дату регистрации для каждого элемента массива*/
    if(user.registrationDate == '10.10.2021') 
    console.log('Пользователь ' + user.firstName + ' ' + user.lastName + ' зарегистрирован 10.10.2021')
    else if (user.registrationDate == '09.10.2021')
    console.log('Пользователь ' + user.firstName + ' ' + user.lastName + ' зарегистрирован 09.10.2021')
})

// вариант 4
users.forEach(user => {
    if(user.registrationDate == '10.10.2021' || user.registrationDate == '09.10.2021') 
    console.log('Пользователь ' + user.firstName + ' ' + user.firstName + ` зарегистрирован ${user.registrationDate}`)
})
```
