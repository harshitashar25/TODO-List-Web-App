let todoList = [];

function Addtodo() {
    let inputElement = document.querySelector('#todoinput');
    let DateElement = document.querySelector('#tododate');
    let todoitem = inputElement.value.trim();
    let todoDate = DateElement.value;

    if (todoitem === "" || todoDate === "") {
        alert("Please enter both task and due date!");
        return;
    }

    todoList.push({ item: todoitem, dueDate: todoDate });

    inputElement.value = "";
    DateElement.value = "";
    displayitems();
}

function displayitems() {
    let containerelement = document.querySelector('.containeritem');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];  // Correct variable name used

        newHtml += `
        <div class="todo-item">
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btndlt" onclick="todoList.splice(${i},1); displayitems()">Delete</button>
        </div>`;
    }

    containerelement.innerHTML = newHtml;
}