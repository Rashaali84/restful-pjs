# To-do List Project-restful-pjs: Development Strategy

Building this site one step at a time

---

## 0. README

- Write the `README.md`, including the final screen shot
- Include a License
- Include this `development-strategy.md` file

---

## 1. Setup

- Create boilerplate todo-index.html
- Create boilerplate style.css
- Create boilerplate init.js
- Create boilerplate public\app\controllers\handlers.js
- Create boilerplate public\app\data\todo-data.js
- Create boilerplate public\app\views\view.js

---

## 2. User Story: The ability to add an item

**A user can see in the front page a list of unsorted names**

### DOM:

- Create input-filed named `addTodoTextInput` in index.html .
- Create button tag to handle the onclick action of adding .
- Create unordered list tag . `ul` to display added tasks .
- Add link to style file, add basic classes.

### Data:

- Create a method in todo.js , to add a new todo in the db.json.

### controllers :

- Create a handler function when add todo button clicked in DOM .

### views :

- Display all todos after adding .

## 3. User Story: The ability to remove an item

**A user remove any todo item list , that is previously added from the list use delete button created before in user tory '2'**

### data:

- Create a function to delete an item from the list stored in db.

### controllers:

- Create a handler call function when delete button is clicked in DOM

### views:

- Display all updated todo lists afterwards .

## 4. User Story: The ability to edit an item

**A user can edit a displayed already stored list , and then the updated list is displayed again .**

### data:

- Create a function to edit an already existed item from the list stored in db.

### controllers:

- Create a handler call function when edit button is clicked in DOM

### views:

- Display all updated todo lists afterwards .

## 5. User Story: The ability to toggle an item

**A user can use a the sorted list in a well-styled page**

### data:

- Create a function to toggle an item from the list stored in db.

### controllers:

- Create a handler call function when toggle button is clicked in DOM

### views:

- Display all updated todo lists afterwards .

## 6. User Story: The ability to toggle all items at once

**A user can click on a button to toggle all tasks displayed .**

### data:

- Create a function to toggle all items from the list stored in db.

### controllers:

- Create a handler call function when toggle all button is clicked in DOM

### views:

- Display all updated todo lists afterwards .
