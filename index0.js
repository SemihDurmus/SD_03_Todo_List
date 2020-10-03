const todoList = [
    // {
    //     id: 0,
    //     todoText: "Ev temizlenecek",
    //     isDone: false
    // },
    // {
    //     id: 1,
    //     todoText: "Clarusway taksidi odenecek",
    //     isDone: false
    // },
    // {
    //     id: 2,
    //     todoText: "Alisveris yapilacak",
    //     isDone: true
    // },
];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo);


function addTodo() {
    const todoText = document.querySelector("#myInput").value;

    const todoObject = {
        id: todoList.length,
        todoText: todoText,
        isDone: false
    }

    todoList.push(todoObject);
    displayTodos();
}


function doneTodo(todoId) {
    const selectedTodoIndex = todoList.findIndex(x => x.id == todoId);

    todoList[selectedTodoIndex].isDone = true;
}

function displayTodos(){

    todoListElement.innerHTML = "";
    document.querySelector("#myInput").value = "";

    todoList.forEach((x) => {
        const listElement = document.createElement("li");
        listElement.innerText = x.todoText;
        listElement.setAttribute("data-id", x.id);
        if(x.isDone == true) listElement.classList.add("checked");

        listElement.addEventListener("click", function(e){
            const selectedId = e.target.getAttribute("data-id");
            doneTodo(selectedId);
        })

        todoListElement.appendChild(listElement);
    })
}



// [
//     {   id :0,
//         todoText: "Eve gidecegim",
//         isDone: false
//       }, 
//     {   id :1,
//         todoText: "Copler toplanacak",
//         isDone: false
//       }, 
//     {   id :2,
//         todoText: "Kopek gezdirilecek",
//         isDone: false
//       }, 
// ]