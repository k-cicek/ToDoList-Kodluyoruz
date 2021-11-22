// UI vars

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = [
  "3 Litre Su İç",
  "Ödevleri Yap",
  "En Az 3 Saat Kodlama Yap",
  "Yemek Yap",
];

//load items
loadItems();

// call event listeners
eventListeners();

function eventListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);

  // delete an item
  taskList.addEventListener("click", deleteItem);

  // delete all items
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems() {
  items.forEach(function (item) {
    createItem(item);
  });
}

function createItem(text) {
  //create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  //create a
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  //add a to li
  li.appendChild(a);

  //aa li to ul
  taskList.appendChild(li);
}
// add new item
function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
  }

  //create item
  createItem(input.value);

  //clear input
  input.value = "";

  console.log(li);

  e.preventDefault();
}

// delete an item
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }

  e.preventDefault();
}

// delete All items
function deleteAllItems(e) {
  if (confirm("are you sure?")) {
    taskList.innerHTML = "";
  }
  e.preventDefault();
}
