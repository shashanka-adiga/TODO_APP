const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//events
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', checkDelete)



function addTodo(event) {
    event.preventDefault()
        // adding div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
        // adding li
    const todoItem = document.createElement('li')
    todoItem.classList.add('todo-item')
    todoItem.innerText = todoInput.value
    todoDiv.appendChild(todoItem)
        // add complete button
    const completeButton = document.createElement('button')
    completeButton.classList.add('complete-btn')
    completeButton.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>'
    todoDiv.appendChild(completeButton)
        // add trash button
    const trashButton = document.createElement('button')
    trashButton.classList.add('trash-btn')
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    todoDiv.appendChild(trashButton)
        //adding to main div
    todoList.appendChild(todoDiv)
        // clear input field
    todoInput.value = ""
}

function checkDelete(event) {
    event.preventDefault()
    const item = event.target
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove()
    } else if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('complete')
    }
}