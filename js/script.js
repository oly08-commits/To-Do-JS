// fucntion to add task
function addTask() {
    
    // task title
    const taskTilte = document.querySelector('#task-title').value; // value -> pega o valor digitado input

    if (taskTilte != 0) {
        
        // clonar tamplate (no caso o template aqui is o li)
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true); //cloneNode -> como sugere o nome, ele clona o codigo selecionado

        // task name
        newTask.querySelector('.task-title').textContent = taskTilte;

        //remove uneede classes
        newTask.classList.remove("template");

        newTask.classList.remove("hide");

        // task list
        const list = document.querySelector('#task-list');

        // add task to list
        list.appendChild(newTask);

        // remove event
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener("click", function () {
            
            removeTask(this); //esse this se refere ao elemento, a tarefa em si
        
        });

        //task done event
        const doneBtn = newTask.querySelector('.done-btn').addEventListener("click", function () {
            
            doneTask(this); //esse this se refere ao elemento, a tarefa em si
        
        });

        // to clean the text after wright in the input
        document.querySelector('#task-title').value = '';
        
    }
    
}

// function to remove task
function removeTask(task) {

    task.parentNode.remove(true);// acessa o elemento pai (do span no caso, a "li") e o remove
    
}

// function to done task
function doneTask(task) {

    const pai = task.parentNode;

    pai.classList.toggle('done');// toggle -> verifica se tem a class entre parenteses, se tiver, remove, do contrario, adiciona, faz papel de "if else"
    
}

// event to add task
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener('click', function (e) {
    
    e.preventDefault(); //faz com que o form not send os dados no back, apenas espera a next instrucao js

    addTask();

});