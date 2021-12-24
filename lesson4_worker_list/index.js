// state
var workers = [
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

var list = document.querySelector('.list')
var total = document.getElementById('total')
var form = document.getElementById('form')
var workerContainer = document.querySelector('.workerContainer')

var nameInput = document.getElementById('name')
var salaryInput = document.getElementById('salary')
nameInput.placeholder = 'name'
salaryInput.placeholder = 'salary'

const WorkerInfo = (name, salary, info) => `
    <div class="worker-info">
        <div class="worker-info-avatar"></div>
        <h2 class="worker-info-name">${name}</h2>
        <h3 class="worker-info-salary">${salary} сом</h3>
        <p class="worker-info-desc">${info}</p>
    </div>
`
const Worker = (name, salary) => `
    <div class="worker">
        <div class="avatar"></div>
        <div class="desc">
            <h3>${name}</h3>
            <p>${salary} сом</p>
        </div>
        <button class="delete-btn" type="button">Delete</button>
    <div>
`


function render() {
    list.innerHTML = ''
    workers.map(function (worker, idx) {
        // .....
    })
}

render()


