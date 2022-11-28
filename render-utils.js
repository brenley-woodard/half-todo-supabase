export function renderTodo(todo, handleComplete) {
    // create a div and a p tag
    const div = document.createElement('div');
    const p = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')

    // add the 'todo' css class no matter what
    div.classList.add(todo.complete ? 'complete' : 'incomplete');
    div.classList.add('todo');
    // put the todo's text into the p tag
    p.textContent = todo.todo;
    // append stuff
    div.append(p);
    // add event listener for click and call handleComplete function

    // return the div
    return div;
}
