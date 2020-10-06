// TO-DO !

const todoList = [];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo);

//-------GETTING VALUES FROM INPUT TO ARRAY OF OBJECTS-------
function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  if (todoText == "") {
    alert("You did not enter any item");
  } else {
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
}

//------CHANGING THE isDone VALUE TO TRUE WHEN THE ELEMENT IS CLICKED
//------OR TO FALSE IF IT WAS TRUE BEFORE
function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  if (todoList[selectedTodoIndex].isDone == true) {
    todoList[selectedTodoIndex].isDone = false;
  } else {
    todoList[selectedTodoIndex].isDone = true;
  }

  displayTodos();
}

//----TO DELETE AN ITE; FROM THE LIST
function deleteItem(x) {
  todoList.splice(todoList.findIndex((item) => item.id == x), 1);
  displayTodos();
}




//---------DISPLAYING THE ENTERED ITEMS ON THE SCREEN------
function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  todoList.forEach((item) => {
    const listElement = document.createElement("li");
    const delBtn = document.createElement("i");

    listElement.innerHTML = item.todoText;
    listElement.setAttribute("data-id", item.id);

    delBtn.setAttribute("data-id", item.id);
    delBtn.classList.add("far");
    delBtn.classList.add("fa-trash-alt");
    delBtn.setAttribute("data-id", item.id);

    if (item.isDone) {
      listElement.classList.add("checked");
    }

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneTodo(selectedId); 
    });

    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data-id");
      deleteItem(delId); 
    });

    todoListElement.appendChild(listElement);
    listElement.appendChild(delBtn);
  });
}
