let patientName = document.getElementById('name');
let phoneNo = document.getElementById('number');
let dateInput = document.getElementById('date');
let timeInput = document.getElementById('time');
let mailId = document.getElementById('mail');
let consultType = document.getElementById('consult');
let confirmMsg = document.getElementById("confirmText");

function confirmId() {


    let nameInput = patientName.value
    let mailInput = mailId.value
    let consultInput = consultType.value

    if (nameInput === "") {
        alert("please fill the form");
    }
    if (phoneNo === "" && phoneNo.length !== 10) {
        alert("please fill the form");
    }

    let verifyText = nameInput + "  Your  Appointment is Confirmed Check your " + mailInput + "for more details"
    confirmMsg.textContent = verifyText;
}

let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [{
        text: "Exercises",
        uniqueNo: 1
    },
    {
        text: "Taking Medicines",
        uniqueNo: 2
    },
    {
        text: "Food",
        uniqueNo: 3
    },

    {
        text: "Checking Sugar levels and B.P",
        uniqueNo: 4
    }


];

let todosCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle('checked');
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let todoId = 'todo' + todo.uniqueNo;
    let checkboxId = 'checkbox' + todo.uniqueNo;
    let labelId = 'label' + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;

    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    }

    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
}
