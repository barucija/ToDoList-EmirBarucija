var inputField = document.getElementById("fieldForInputValue");
var inputButtonEnter = document.getElementById("buttonToEnterValue");
var toDoList = document.getElementById("toDoList");

function lengthOfInput() {
    return inputField.value.length;
}

function createItemInList() {
    var wholeItemContainer = document.createElement("div");
    var listItem = document.createElement("li");
    var deleteButton = document.createElement("button");
    
    wholeItemContainer.classList.add("itemContainer");
    toDoList.appendChild(wholeItemContainer);
    wholeItemContainer.appendChild(listItem);
    wholeItemContainer.appendChild(deleteButton);
    listItem.classList.add("toDoItems");
    listItem.appendChild(document.createTextNode(inputField.value));
    inputField.value = "";
    deleteButton.classList.add("deleteItem");
    deleteButton.innerHTML = "Delete item";
}

function addInListAfterClick() {
    if (lengthOfInput() > 0) {
        createItemInList();
    }
    else {
        alert("You can't enter item with no value! Please, try again.");
    }
}

function doneItem(task) {
    if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteItem(element) {
    if (element.target.className === "btn btn-danger deleteItem" || element.target.className === "deleteItem"){
		element.target.parentElement.remove();
	}
}

inputButtonEnter.addEventListener("click", addInListAfterClick)
toDoList.addEventListener("click", doneItem);
toDoList.addEventListener("click", deleteItem);

