/*
 * 1) TODO'ya tekrar basılınca, todo durumu eski haline gelsin
 *    İpucu (Tek bir satırda değişiklik yapılacak)
 *
 * 2) Todo silme operasyonu
 **/

const todoList = [];

class TodoList {
  constructor(listElementParam) {
    this.todoListElement = listElementParam;
  }

  add(todoText) {
    const todoObject = {
      // id: todoList.length * 5,
      id: todoList.length,
      todoText: todoText,
      isDone: false,
    };

    todoList.push(todoObject);
    this.display();
  }

  done(todoId) {
    const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
    todoList[selectedTodoIndex].isDone = true;

    this.display();
  }

  display() {
    this.todoListElement.innerHTML = "";

    todoList.forEach((item) => {
      const listElement = document.createElement("li");

      listElement.innerText = item.todoText;
      listElement.setAttribute("data-id", item.id);

      if (item.isDone) {
        listElement.classList.add("checked");
      }

      listElement.addEventListener("click", function (e) {
        const selectedId = e.target.getAttribute("data-id");
        myTodoList.done(selectedId);
      });

      this.todoListElement.appendChild(listElement);
    });
  }
}

const listSection = document.querySelector("#myUL");
const secondList = document.querySelector("#severekAyrilanlar");

const myTodoList = new TodoList(listSection);

document.querySelector("#todo_button").addEventListener("click", function () {
  const todoText = document.querySelector("#myInput").value;

  myTodoList.add(todoText);
});
