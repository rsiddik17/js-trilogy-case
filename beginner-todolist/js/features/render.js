import { getStats, getFilterTasks } from "../data/store.js";
import createTodoItem from "./createTodo.js";

const renderApp = () => {
    const tasks = getFilterTasks();

    const todoList = document.getElementById("todoList");
    const noTasks = document.getElementById("noTasks");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");
    const pendingTasks = document.getElementById("pendingTasks");

    todoList.innerHTML = "";

    if(tasks.length === 0) {
        noTasks.style.display = "block";
    } else {
        noTasks.style.display = "none";
        tasks.forEach(task => {
           todoList.append(createTodoItem(task));
        });
    }

    const stats = getStats();
    totalTasks.textContent = stats.total;
    completedTasks.textContent = stats.completed;
    pendingTasks.textContent = stats.pending;
}

export default renderApp;