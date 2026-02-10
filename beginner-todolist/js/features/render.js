import {
  toggleTaskInStore,
  deleteTaskFromStore,
  getStats,
  getFilteredTasks,
} from "../data/store.js";
import { showNotification } from "./notification.js";
import { showConfirmModal } from "./modal.js";

const todoList = document.getElementById("todoList");
const noTasks = document.getElementById("noTasks");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const createTodoItem = (task) => {
  const li = document.createElement("li");
  li.className = `todo-app__list-item ${task.completed ? "todo-app__list-item--completed" : ""}`;

  li.innerHTML = `
        <div class="todo-app__item-left">
            <input type="checkbox" class="todo-app__checkbox" ${task.completed ? "checked" : ""}/>
            <span class="todo-app__task-text">${task.text}</span>
        </div>
        <button class="todo-app__delete-btn" aria-label="Delete task">
              <i class="fas fa-trash"></i>
        </button>
    `;

  li.addEventListener("click", (e) => {
    if (e.target.closest(".todo-app__delete-btn")) {
      return;
    }

    toggleTaskInStore(task.id);
  });

  const deleteBtn = li.querySelector(".todo-app__delete-btn");
  deleteBtn.addEventListener("click", () => {
    showConfirmModal("Are you sure you want to delete this task?", () => {
      deleteTaskFromStore(task.id);
      showNotification("Task deleted!");
    });
  });

  return li;
};

export const renderApp = () => {
  const tasks = getFilteredTasks();

  todoList.innerHTML = "";

  if (tasks.length === 0) {
    noTasks.style.display = "block";
  } else {
    noTasks.style.display = "none";
    tasks.forEach((task) => {
      todoList.append(createTodoItem(task));
    });
  }

  const stats = getStats();
  totalTasks.textContent = stats.total;
  completedTasks.textContent = stats.completed;
  pendingTasks.textContent = stats.pending;
};
