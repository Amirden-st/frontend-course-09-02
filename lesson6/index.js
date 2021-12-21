// var
// ECMA Script 5 - ECMA Script 6
// var 

// hoisting - поднятие переменных вверх
var testVar;
var variable = 1
var variable = ''

for (var i = 0; i < 5; i++) {
  var innerVar = 0
  console.log(i);
}

console.log(innerVar, 'innerVar');
console.log(i);

// let
let letVar = 'letVar'
// let letVar = ''

for (let j = 0;  j < 5; j++) {
  console.log(j, 'j');
}

// console.log(j)




const constVar = 'const var'
// constVar = 1

const user = {
  name: 'User',
  password: 123
}

user.name = 'Adi'


if (true) {
  const innerConst = 'innerCOnst'
}
// console.log(innerConst);
console.log(testVar);
var testVar = 1

// functions
// function declaration
function func(a, b) {
  var funcVar = 'funcVar'
  return a
}

// function expression
const funcExpression = function (a, b) {
  return a
}

// arrow functions
const arrowFunc = (a, b) => a + b

// this
console.log(this); // Window

function logThis() {
  console.log(this);
}
logThis()

const obj = {
  // logThis: logThis
  name: 'my obj',
  innerObj: {
    logThis
  },
  logThis,
}


obj.logThis()
obj.innerObj.logThis()


const worker = {
  name: 'Adam',
  salary: 43000,
  increaseSalary: function (num) {
    this.salary += num
  }
}

worker.increaseSalary(2000)
console.log(worker);

const logThisArrow = () => console.log(this, 'from arrow'); 
logThisArrow()
const objForArrow = {
  logThisArrow,
  innerObj: {
    logThisArrow
  }
}

objForArrow.logThisArrow()
objForArrow.innerObj.logThisArrow()


// spread/rest operator

let workers = [
  {
      name: 'Adilet',
      salary: 23000,
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque vel facilis velit! Culpa ad debitis temporibus vitae nemo sit ut dolor asperiores error. Nisi accusamus architecto numquam neque laboriosam sequi!'
  },
  {
      name: 'Syimyk',
      salary: 59000,
      info: 'he is from 08-02'
  },
  {
      name: 'Meerim',
      salary: 38000,
      info: 'She is in 09-02 now'
  },
  {
      name: 'Nurdin',
      salary: 15000,
      info: 'Mentor'
  },
  {
      name: 'Ayras',
      salary: 31000,
      info: 'teacher'
  }
]

function getMin(...nums) {
  return Math.min(...nums)
}
console.log(getMin(1,2,3,4,56,2));

const a = [1,2,3,4]
const b = [...a]

function deleteWorker(workerName) {
  const index = workers.findIndex(({ name }) => name === workerName)
  console.log(index, 'index');
  workers = [...workers.slice(0, index), ...workers.slice(index + 1)]
} 
deleteWorker('Nurdin')


const Syimyk = {
  name: 'Syimyk',
  salary: 59000,
  info: 'he is from 08-02'
}

const { salary } = Syimyk  

console.log(salary)