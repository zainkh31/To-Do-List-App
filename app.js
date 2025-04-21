var parent = document.getElementById("parentList");

function createObjective() {
    var input = document.getElementById("input");
    console.log("createObjective", input.value);

    if (!input.value) {
        alert("Objective is required!!!..");
        return;
    }

    var liElement = document.createElement("li");
    liElement.innerHTML = input.value;
    liElement.classList.add("todoItem");

    // Create the Edit Button
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "EDIT";
    editBtn.classList.add("editBtn");
    editBtn.setAttribute("onclick", "editTodo(this)");

    // Create the Delete Button
    var dltBtn = document.createElement("button");
    dltBtn.innerHTML = "DELETE";
    dltBtn.setAttribute("onclick", "deleteTodo(this)");
    dltBtn.classList.add("dltBtn");

    // Create the Complete Button
    var completeTodoBtn = document.createElement("button");
    completeTodoBtn.innerHTML = "COMPLETE";
    completeTodoBtn.setAttribute("onclick", "completeTodo(this)");
    completeTodoBtn.classList.add("completeBtn");

    // Append the buttons to the li element
    liElement.appendChild(editBtn);
    liElement.appendChild(dltBtn);
    liElement.appendChild(completeTodoBtn);

    // Append the li to the parent list
    parent.appendChild(liElement);
    input.value = "";
}

function editTodo(editBtn) {
    var editValue = prompt("Enter edited Objective...", editBtn.parentNode.firstChild.textContent);  // Access the text content of li
    if (!editValue) {
        alert("Please enter edited Objective");
        return;
    }
    editBtn.parentNode.firstChild.textContent = editValue;  // Update the text content of the li element
}

function deleteTodo(dltBtn) {
    console.log("deleteTodo()", dltBtn.parentNode);
    dltBtn.parentNode.remove();
}

function deleteAll() {
    parent.innerHTML = "";
}

function completeTodo(completeBtn) {
    completeBtn.parentNode.classList.toggle("doneTask");
}
