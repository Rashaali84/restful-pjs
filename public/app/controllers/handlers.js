
class handlers {

    static async addTodo() {

        var addTodoTextInput = document.getElementById('addTodoTextInput');
        const newTodo = new todo(addTodoTextInput.value);
        await newTodo.addTodo(newTodo);
        addTodoTextInput.value = '';
        view.displayTodos();

    }
    static async changeTodo() {

        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        const changedTodo = new todo(changeTodoTextInput.value);
        changedTodo.id = changeTodoPositionInput.valueAsNumber;
        await changedTodo.changeTodo(changedTodo);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();

    }
    static async deleteTodo(position) {

        const todoDelete = new todo('');
        todoDelete.id = position;
        await todoDelete.deleteTodo(todoDelete);
        view.displayTodos();

    }
    static async toggleCompleted() {

        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        const todoCompleted = new todo('');
        todoCompleted.id = toggleCompletedPositionInput.valueAsNumber;
        await todoCompleted.toggleCompleted(todoCompleted)
        toggleCompletedPositionInput.value = '';
        view.displayTodos();

    }
    static displayAlltodos() {
        view.displayTodos();
    }
    static async toggleAll() {

        // await---> it awaits the response of your asynchronous function:
        await todo.toggleAll();
        view.displayTodos();


    }

}
