
var light = document.getElementById('light')
var dark = document.getElementById('dark')
var palette1 = document.getElementById('palette1')
var palette2 = document.getElementById('palette2')



light.addEventListener('click', () => {
  document.body.style.color = '#212121'
  document.body.style.backgroundColor = '#fff'
})

dark.addEventListener('click', () => {
  document.body.style.color = '#fff'
  document.body.style.backgroundColor = '#212121'
})

palette1.addEventListener('click', () => {
  document.body.style.color = '#536DFE'
  document.body.style.backgroundColor = '#7B1FA2'
})

palette2.addEventListener('click', () => {
  document.body.style.color = '#FF5722'
  document.body.style.backgroundColor = '#313131'
})