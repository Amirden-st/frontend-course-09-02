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
var nameInput = document.getElementById('name')
var salaryInput = document.getElementById('salary')
var workerContainer = document.querySelector('.workerContainer')
nameInput.value = ''
salaryInput.value = ''


function render() {
    list.innerHTML = ''
    workers.map(function (worker, idx) {
        var workerCard = document.createElement('div');
        workerCard.className = 'worker';
        workerCard.addEventListener('mouseover', () => {
            workerContainer.innerHTML = `
                <div class="worker-info">
                    <div class="worker-info-avatar"></div>
                    <h2 class="worker-info-name">${worker.name}</h2>
                    <h3 class="worker-info-salary">${worker.salary} сом</h3>
                    <p class="worker-info-desc">${worker.info}</p>
                </div>
            `
        })
        workerCard.addEventListener('mouseleave', () => {
            workerContainer.innerHTML = ''
        })
        workerCard.innerHTML = `
            <div class="avatar"></div>
            <div class="desc">
                <h3>${worker.name}</h3>
                <p>${worker.salary} сом</p>
            </div>
        `

        var deleteBtn = document.createElement('button')
        deleteBtn.attributes.type = 'button'
        deleteBtn.id = 'delete-btn'
        deleteBtn.innerText = 'Delete'
        deleteBtn.addEventListener('click', () => {
            console.log(workers);
            workers.splice(idx, 1)
            render(workers)
        })
        workerCard.appendChild(deleteBtn)
        list.appendChild(workerCard)
    })
}

render()


form.addEventListener('submit', (e) => {
    e.preventDefault()
    var name= nameInput.value
    var salary = salaryInput.value
    console.log(name);
    workers.push({
        name,
        salary
    })
    render()
})

