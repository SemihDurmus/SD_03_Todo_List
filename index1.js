// TO-DO !

const todoList = [];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo);


//-------GETTING VALUES FROM INPUT TO ARRAY OF OBJECTS-------
function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  if (todoText == "") alert("You did not enter any item");

  const todoObject = {
    id: todoList.length,
    todoText: todoText,
    isDone: false,
  };

//---WITH UNSHIFT WE ADD THE NEW ELEMENT TO THE BEGINNING OF THE ARRAY
//--SO THAT THE NEW ITEMS SHOW UP ON TOP
  todoList.unshift(todoObject);
  displayTodos();
}


//------CHANGING THE isDone VALUE TO TRUE WHEN THE ELEMENT IS CLICKED----
function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  if (todoList[selectedTodoIndex].isDone == true) {
    todoList[selectedTodoIndex].isDone = false
  } else {todoList[selectedTodoIndex].isDone = true};

  displayTodos();
}


//---------DISPLAYING THE ENTERED ITEMS ON THE SCREEN------
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
