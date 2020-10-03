// TO-DO !

const todoList = [];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo);

function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  const todoObject = {
    // id: todoList.length * 5,
    id: todoList.length,
    todoText: todoText,
    isDone: false,
  };

  todoList.push(todoObject);
  displayTodos();
}

function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  todoList[selectedTodoIndex].isDone = true;

  displayTodos();
}

function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  todoList.forEach((item) => {
    const listElement = document.createElement("li");

    listElement.innerText = item.todoText;
    listElement.setAttribute("data-id", item.id);

    if (item.isDone) {
      listElement.classList.add("checked");
    }

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneTodo(selectedId);
    });

    todoListElement.appendChild(listElement);
  });
}

