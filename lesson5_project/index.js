var count = document.querySelector('#count')

var increase = document.querySelector('#increase')
var decrease = document.querySelector('#decrease')
var reset = document.querySelector('#reset')
var set = document.querySelector('#set')
var input = document.querySelector('#input')

var num = 0;
count.innerText = num

increase.addEventListener('click', () => {
  num+=1
  count.innerText = num
})

decrease.addEventListener('click', () => {
  num--
  count.innerText = num
})

reset.addEventListener('click', () => {
  num = 0
  count.innerText = num
})

set.addEventListener('click', () => {
  var inputVal = +input.value
  num = inputVal
  count.innerText = num
})

var menuBody = document.getElementById('menu-items')
var menu = document.getElementById('menu')
menu.addEventListener('click', () => {
  menuBody.className = menuBody.className === 'active' ? 'inactive' : 'active' 
  // if (menuBody.className === 'active') {
  //   menuBody.className = 'inactive'
  // } else {
  //   menuBody.className = 'active'
  // }
})

menu.addEventListener('mouseover', () => {
  menuBody.className = 'active'
})

menu.addEventListener('mouseleave', () => {
  menuBody.className = 'inactive'
})