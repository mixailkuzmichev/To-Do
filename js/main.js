const form = document.querySelector('#form')
const taskInput = document.querySelector('#taskInput')
const tasksList = document.querySelector('#tasksList')
const emptyList = document.querySelector('#emptyList')
const btnRemove = document.getElementById('removeDoneTasks')



// добавление задачи
form.addEventListener('submit', addTask)


//удаление задачи
tasksList.addEventListener('click', deleteTask)


//выполнение задачи
tasksList.addEventListener('click', doneTask)


btnRemove.addEventListener('click', deleteDoneTasks)


function addTask (event) {
    event.preventDefault();


    const taskText = taskInput.value;
    

    const taskHTMl = 
    `
                <li class="list-group-item d-flex justify-content-between task-item">
					<span class="task-title">${taskText}</span>
					<div class="task-item__buttons">
						<button type="button" data-action="done" class="btn-action">
							<img src="./img/tick.svg" alt="Done" width="18" height="18">
						</button>
						<button type="button" data-action="delete" class="btn-action">
							<img src="./img/cross.svg" alt="Done" width="18" height="18">
						</button>
					</div>
				</li>
    `

    tasksList.insertAdjacentHTML('beforeend', taskHTMl)

    taskInput.value = ''
    taskInput.focus()


    if(tasksList.children.length > 0){
        emptyList.classList.add('none')
    }

}

function deleteTask(event) {

    if(event.target.dataset.action === 'delete'){
        const parenNode = event.target.closest('li')
        parenNode.remove();
    }

    if(tasksList.children.length === 1){
        emptyList.classList.remove('none')
    }
    
}

function doneTask(event) {
    if(event.target.dataset.action === 'done'){
       
        
        const parenNode = event.target.closest('li').querySelector('.task-title');
        
        parenNode.style.textDecoration = 'line-through'
        //убираем кнопку
        event.target.classList.add('none')
    }
}

function deleteDoneTasks(event) {
    const parenNode = tasksList.getElementsByClassName('list-group-item d-flex justify-content-between task-item')
    //проходка по всем элементам
    for (let i = 0; i <= parenNode.length-1; i++){
        //проверка выполнения задачи
        if(parenNode[i].querySelector('span').style.textDecoration == 'line-through'){
            parenNode[i].remove();
            i--
        }
        
        
    }
    //вертаем "список пуст"
    if(tasksList.children.length === 1){
        emptyList.classList.remove('none')
    }
    
}