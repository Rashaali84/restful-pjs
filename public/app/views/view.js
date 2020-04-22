
class view {
    static displayTodos() {
        debugger;
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        todo.getAlltodos().then(data => {
            data.forEach(function (todo) {
                var todoLi = document.createElement('li');
                var todoTextWithCompletion = '';

                if (todo.completed === true) {
                    todoTextWithCompletion = '(x) ' + todo.todoText;
                } else {
                    todoTextWithCompletion = '( ) ' + todo.todoText;
                }

                todoLi.id = todo.id;
                todoLi.textContent = todoTextWithCompletion + " - Task-Id: " + todo.id + '  ';
                todoLi.appendChild(this.createDeleteButton());
                todosUl.appendChild(todoLi);
            }, this)
        });
    }
    static createDeleteButton() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    }
    static setUpEventListeners() {
        debugger;
        //attach the delete listener tp the newly created delete button 
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function (clickedLiInsideUl) {
            var elementClicked = clickedLiInsideUl.target;
            if (elementClicked.className === 'deleteButton') {
                //the id of the li item  inside the ul 
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
}
debugger;
//call the listener for the delete button created .
window.onload = () => {
    view.setUpEventListeners();
};
