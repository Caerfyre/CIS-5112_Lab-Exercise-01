// Create a new list item when clicking on the "Add" button
function addListItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("taskInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("taskInput").value = "";
}
