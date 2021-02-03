//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOpt = document.querySelector('.filter-todo');



//Eventlisteners
todoButton.addEventListener("click", addTODO);
todoList.addEventListener("click", deleteCheck);
filterOpt.addEventListener("click", filterTodo);



//Functions
function addTODO(event){
    //preventing the form from submitting
    event.preventDefault();
    //adding(injecting) div which contains a li check symbol and delete symbol

    //creating div the main container which will be then be injected to ul and it will containg li, a check button and a delete button
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //--------------------------------------------------------------------------------------
    //creating the li which will be injected to the above div
    const newLi = document.createElement('li');
    newLi.innerText = todoInput.value;
    newLi.classList.add("todo-item");

    //appending newLi to the div we have created
    todoDiv.appendChild(newLi);

    //---------------------------------------------------------------------------------------
    //creating a check mark button so we can press it when our task is completed
    const checkButtonContainer = document.createElement('button');
    checkButtonContainer.innerHTML = '<i class="fas fa-check"></i>';
    checkButtonContainer.classList.add("checkButtonContainer-btn");

    //appending the check button to todoDiv
    todoDiv.appendChild(checkButtonContainer);

    //---------------------------------------------------------------------------------------
    //creating the trash button
    const trashButtonContainer = document.createElement('button');
    trashButtonContainer.innerHTML = '<i class="fas fa-trash"></i>';
    trashButtonContainer.classList.add("trashButtonContainer-btn");

    //appending the trash button to todoDiv
    todoDiv.appendChild(trashButtonContainer);
    //----------------------------------------------------------------------------------------

    //appending the whole div to ul
    todoList.appendChild(todoDiv);

    //clearing the todoinput after appending the whole div
    todoInput.value=" ";

}


function deleteCheck(e){
    const item = e.target;

    //deleting the task
    if(item.classList[0] === 'trashButtonContainer-btn')
    {
        const par = item.parentNode; //todoDiv is the parent 
        par.classList.add("fall");

        par.addEventListener('transitionend', () => {
            par.remove();
            // todoList.removeChild(par);
        })
    }

     
    //check button
    if(item.classList[0] === 'checkButtonContainer-btn')
    {
        const par = item.parentNode;
        //toggle means it adds the class is the class is not present to the element 
        //but the class if it is already present then it will remove it
        par.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = document.getElementsByClassName('todo');

    for(let i=0; i<todos.length; i++)
    {
        switch(e.target.value)
        {
            case "all":
                todos[i].style.display = 'flex';
                break;
                
            case "completed":
                if(todos[i].classList.contains('completed')){
                    todos[i].style.display = 'flex';
                }
                else{
                    todos[i].style.display = 'none';
                }
                break;
            
            case "uncompleted":
                if(todos[i].classList.contains('completed')){
                    todos[i].style.display = 'none';
                }
                else{
                    todos[i].style.display = 'flex';
                }
                break;
        }
    }
};

function saveLocalTodos(todo)
{
    
}