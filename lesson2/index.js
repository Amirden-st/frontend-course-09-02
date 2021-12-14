// number, string, object, boolean, undefined, null

// array - структура данных
var user; // undefined

var obj = {
    prop: 'dytin'
}

obj.prop = 1;
// массивы
//           0    1    2      3
var arr = ['Adi', 18, {}, 'string', {}, []];

arr[0] = 1;
arr[2] = [];
arr.push(undefined)
arr.push(2)
arr.push(1)


// длина массива
// console.log(arr.length);

// undefined
// console.log(arr[9]);


arr[100] = '1'

// console.log(arr[100]);
// console.log(arr);

var objArr = {
    0: 'first',
    1: '',
    2: '2'
}

// console.log(objArr[0])


// Cycles

var i = 0

// While
while (i < 100) {
    // console.log(i);
    // i = i + 1
    i++
}

{/*
var ящики = 70

while (кол-во ящиков не равно 0) {
    тоскать ящики (i--)
}
*/}
var boxes = 70

while (boxes !== 0) {
    // console.log(boxes);
    boxes--
}


var nums = [1, 2, 3, 5, 123, 6, 12, 4, 6]


// For
for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 3) {
        console.log(i); 
        break   
    }
    console.log(nums[i]);
}


let age = 17;   
if (age < 16) {
    console.log("Ты школьник");
} else if (age > 16, age <= 18) {
    console.log("Ты либо школьник, либо студент");
} else if (age > 18) {
    console.log("Ты либо студент, либо работаешь");
}
