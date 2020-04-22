debugger;
class handlers {

    static addTodo() {
        debugger;
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        const newTodo = new todo(addTodoTextInput.value);
        newTodo.addTodo(newTodo);
        addTodoTextInput.value = '';

    }
    static changeTodo() {
        debugger;
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        const changedTodo = new todo(changeTodoTextInput.value);
        changedTodo.id = changeTodoPositionInput.valueAsNumber;
        changedTodo.changeTodo(changedTodo);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';

    }
    static deleteTodo(position) {
        debugger;
        const todoDelete = new todo('');
        todoDelete.id = position;
        todoDelete.deleteTodo(todoDelete);
    }
    static toggleCompleted() {
        debugger;
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        const todoCompleted = new todo('');
        todoCompleted.id = toggleCompletedPositionInput.valueAsNumber;
        todoCompleted.toggleCompleted(todoCompleted)
        toggleCompletedPositionInput.value = '';
    }
    static displayAlltodos() {
        view.displayTodos();
    }
    static async toggleAll() {
        debugger;
        // await---> it awaits the response of your asynchronous function:
        await todo.toggleAll();
        view.displayTodos();


    }

}