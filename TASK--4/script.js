const input = document.getElementById("taskInput");
const descInput = document.getElementById("taskDesc");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
addBtn.addEventListener("click", addTask);

function addTask() {
  const title = input.value.trim();
  const desc = descInput.value.trim();

  if (title === "") return;
  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <div class="task-content">
      <span class="task-text">${title}</span>
      <div class="task-desc">${desc}</div>
    </div>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;

  list.appendChild(li);

  input.value = "";
  descInput.value = "";
  li.querySelector(".edit").addEventListener("click", () => {
    const titleEl = li.querySelector(".task-text");
    const descEl = li.querySelector(".task-desc");

    const newTitle = prompt("Edit task title:", titleEl.textContent);
    const newDesc = prompt("Edit description:", descEl.textContent);

    if (newTitle !== null && newTitle.trim() !== "")
      titleEl.textContent = newTitle.trim();

    if (newDesc !== null)
      descEl.textContent = newDesc.trim();
  });
  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });
}
