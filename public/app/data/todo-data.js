debugger;
class todo {
    //properties 

    id = null;
    completed = false;
    todoText = '';


    //constructor 
    constructor(todoText) {
        debugger;
        this.todoText = todoText;
        this.completed = false;
    }
    //methods 
    addTodo(newTodo) {
        debugger;
        //post is used to add a new todo to the db.json 
        return fetch('http://localhost:3000/todos/', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => console.log('new todo is added ! ', data))
            .then(() => view.displayTodos())
            .catch(err => console.log('error in adding new todo !', err));

    }
    changeTodo(changedTodo) {
        debugger;
        return fetch(`http://localhost:3000/todos/${changedTodo.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ todoText: changedTodo.todoText }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => console.log('updated successfully !', data))
            .then(() => view.displayTodos())
            .catch(err => console.log('error while updating !', err));


    }
    deleteTodo(todoDeleted) {
        debugger;
        return fetch(`http://localhost:3000/todos/${todoDeleted.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log('deleted successfully !', data))
            .then(() => view.displayTodos())
            .catch(err => console.log('error while deleting !', err));


    }

    toggleCompleted(todoCompleted) {
        debugger;
        //get todo from DB 
        return todo.getTodo(todoCompleted.id).then(todoinDb => {
            return fetch(`http://localhost:3000/todos/${todoinDb.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ completed: !(todoinDb.completed) }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(res => res.json())
                .then(data => console.log('updated successfully !', data))
                .then(() => view.displayTodos())
                .catch(err => console.log('error while updating !', err));
        });
    }


    static getTodo(id) {

        return fetch(`http://localhost:3000/todos/${id}`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.log('', err));

    }

    static async getAlltodos() {
        debugger;
        const resp = await fetch('http://localhost:3000/todos/');
        const data = await resp.json();
        return data;

    }
    static toggleAll() {
        debugger;
        return todo.getAlltodos().then(data => {
            data.forEach(function (todoObj) {
                fetch(`http://localhost:3000/todos/${todoObj.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({ completed: !(todoObj.completed) }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(res => res.json())
                    .then(data => console.log('updated successfully !', data))
                    .catch(err => console.log('error while updating !', err));

            });
        })
    }


}
