// Дз 2
//1
var s = '*'

for (var i = 0; i < 7; i++) {
    // console.log(s);
    s += '*'
}

// 2
var num = 0
while (num <= 100) {

    if (num % 2 === 0) {
        // console.log(num);
    }
    // num = num + 2
    num += 1
}

// 3
var people = [
    {
        name: 'Adilet',
        salary: 23000
    },
    {
        name: 'Syimyk',
        salary: 59000
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Nurdin',
        salary: 15000
    }
]


for (var i = 0; i < people.length; i++) {
    var person = people[i]
    if (person.name === 'Nurdin') {
        person.salary += 2000
    } else {
        person.salary += 1000
    }
    // 4
    if (people[i].salary <= 20000) {
        people[i].level = 'jun'
    } else if (people[i].salary <= 50000) {
        people[i].level = 'mid'
    } else {
        people[i].level = 'senior'
    }
}

// Functions (Функции)
// реализовал метод find у массивов ввиде своей функции
function find(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) return arr[i]
    }
}

var cat = {
    // метод - функция объекта
    makeVoice: function () {
        console.log('meow');
    }
}
cat.makeVoice()


// callback для функции find()
function checkIfAdilet(person) {
    if (person.name === 'Adilet') return true
}

// функция для подсчёта зарплаты у всех сотрудников
function getSumOfSalaries() {
    var sum = 0
    for (var i = 0; i < people.length; i++) {
        // sum = sum + people[i]
        sum += people[i].salary
    }
    return sum
}

// функция для удаления человека из списка по имени
function deleteWorker(name) {
    for (var i = 0; i < people.length; i++) {
        if (name === people[i].name) {
            people.splice(i, 1)
        }
    }

    console.log(people);
} 
// удаляем преподавателя, т.к. он там лишний)
deleteWorker('Adilet')


// функция для увеличения з/п на определённую сумму
function increaseSalary(name, inc) {
    //                         это callback - функция, которую мы перередаём другой функции. Она используется внутри метода find
    var foundPerson = people.find(function (person) {
        // метод find перебирает массив people и по очереди передаёт в этот коллбэк его элементы(person) 
        if (person.name === name) {
            // если мы нашли нужного нам человека, то тогда возвращаем true.После в переменную foundPerson запишится нужный нам человек
            return true
        }

        // если нет, то false, значит это не наш человек
        return false
    })
    // увеличиваем ему зарплату
    foundPerson.salary += inc
}
// увеличим зарплату Нургазы на 30000
increaseSalary('Nurgazy', 30000)


// функция для добавления человека(объекта) в массив people
function addWorker(name, salary) {
    people.push({
        name,
        salary
    })
}

// добавили Нургазы с зарплатой 200000
addWorker('Nurgazy', 200000)





var nums = [1, 2, 3, 54, 76, 12, 12, 102]
var nums1 = [1, 2, 3, 54, 12, 76, 12, 12, 102]
var nums2 = [1, 2, 3, 54, 76, 3290, 12, 12, 102]
var nums3 = [1, 2, 3, 54, 76, 12, 12, 102]

// написали функцию для подсчёта суммы массивов
function getSum(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

// теперь мы можем использовать эту функцию когда угодно и где угодно
var sum1 = getSum(nums)
var sum2 = getSum(nums)
var sum3 = getSum(nums2)
var sum4 = getSum(nums3)



function sumTwo(a, b, c, b) {
    // если вызовем sumTwo(5, 5, 3),  то получим undefined
    // в параметре b  будет лежать undefined - т 
    return a + b + c + b
}

var sumOfTwo = sumTwo(5, 5, 3) // здесь будет лежать тип данных NaN(Не число), 
// мы можем получить, в след. выражениях: 
// 'a' * 2  при умножении строки на число
// 3 / 'e' при делении числа на строку
// 'x' - 3 при вычитании из строки числа
// и т.п.



