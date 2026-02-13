import { toggleTaskInStore, deleteTaskFromStore } from "../data/store.js";
import { showConfirmModal } from "./modal.js";
import showNotification from "./notification.js";

const createTodoItem = (task) => {
    const li = document.createElement("li");
    li.className = "todo-app__list-item";
    if(task.completed) {
        li.classList.add("todo-app__list-item--completed");
    }

    const div = document.createElement("div");
    div.className = "todo-app__item-left";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "todo-app__checkbox";
    input.checked = task.completed;

    const span = document.createElement("span");
    span.className = "todo-app__task-text";
    span.textContent = task.text;

    div.append(input, span);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-app__delete-btn";


    const icon = document.createElement("i");
    icon.className = "fas fa-trash";

    deleteBtn.append(icon);


    li.append(div, deleteBtn);


    li.addEventListener("click", (e) => {
        if(e.target.closest(".todo-app__delete-btn")) return;

        toggleTaskInStore(task.id);
    })

    deleteBtn.addEventListener("click", () => {
        showConfirmModal("Are you sure you want to delete this task?", () => {
            deleteTaskFromStore(task.id);
            showNotification("Task deleted!");
        })
    })

    return li;
}

export default createTodoItem;