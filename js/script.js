class ToDo{
    constructor(){
        this.totalTask = document.querySelectorAll('.task').length;
    }

    addTask(taskText){
        //clona template
        let template = document.querySelector('.task').cloneNode(true);
        //removendo classe hide
        template.classList.remove('hide');
        //manipulando o texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        let list = document.querySelector('#tasks-container');
        //inserindo na lista
        list.appendChild(template);
        //adicionando evento as últimas tasks
        this.addEvents();
        this.checkTasks('add');
    }

    removeTask(task){
        //achar o elemento pai  
        let parentEl = task.parentElement;
        //removendo da lista
        parentEl.remove();
        this.checkTasks('remove');
    }

    completeTask(task){
        //adicionando classe 'done'
        task.classList.add('done');
    }

    addEvents(){
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];
        //adicionando evento de remover
        removeBtn.addEventListener('click', function(){
            todo.removeTask(this);
        });
        //adicionando evento de completar tarefa
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        });
    }

    checkTasks(command){
        let msg = document.querySelector('#empty-tasks');
        //lógica adicionando ou removendo tasks
        if(command === 'add'){
            this.totalTask += 1;
        } else if(command == 'remove') {
            this.totalTask -= 1;
        }

        //checando se tem mais de uma task e adc. ou removendo a classe
        if(this.totalTask == 1){
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide');
        }
    }
}

let todo = new ToDo();
//events
let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    let taskText = document.querySelector('#task');
    if(taskText.value != ''){
        todo.addTask(taskText.value);
    };
    //limpacampo
    taskText.value = '';
});