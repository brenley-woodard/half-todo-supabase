import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // on submit, create a todo, reset the form, and display the todos
    const formData = new FormData(todoForm);

    const todo = formData.get('todo');

    await createTodo(todo);
    displayTodos();
});
// create todo state

// add async complete todo handler function
// call completeTodo
// swap out todo in array
// call displayTodos

async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';

    // display the list of todos,
    const todos = await getTodos();
    // call render function, pass in state and complete handler function!
    for (let todo of todos) {
        const todoEl = renderTodo(todo);
        // append to .todos
        todosEl.append(todoEl);
    }
}

// add page load function
window.addEventListener('load', () => {
    displayTodos();
});
// fetch the todos and store in state
// call displayTodos

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    // delete all todos
    // modify state to match
    // re displayTodos
});
