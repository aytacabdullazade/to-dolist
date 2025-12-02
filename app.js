document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const plusBtn = document.getElementById("plusBtn");
  const taskList = document.getElementById("taskList");
  const sortBtn = document.getElementById("sortIcon");

  let sortAscending = true;

  taskList.style.display = "none";

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;


    taskList.style.display = "block";

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${text}</span>
      <img src="./images/Group 77.svg" class="deleteBtn" alt="Delete">
    `;

    const del = li.querySelector(".deleteBtn");

    del.addEventListener("click", () => {
      li.remove();

      
      if (taskList.children.length === 0) {
        taskList.style.display = "none";
      }
    });

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  }

  addBtn.addEventListener("click", addTask);
  plusBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });

  function sortTasks() {
    const items = [...taskList.querySelectorAll("li")];

    items.sort((a, b) => {
      const t1 = a.querySelector("span").innerText.toLowerCase();
      const t2 = b.querySelector("span").innerText.toLowerCase();

      return sortAscending ? t1.localeCompare(t2) : t2.localeCompare(t1);
    });

    items.forEach(li => taskList.appendChild(li));

    sortAscending = !sortAscending;
  }

  sortBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sortTasks();
  });
});
const input = document.getElementById("taskInput");
const deleteIcon = document.querySelector(".icon");

deleteIcon.addEventListener("click", () => {
    input.value = "";  
    input.focus();     
});
