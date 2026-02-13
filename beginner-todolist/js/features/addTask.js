import { addTaskToStore } from "../data/store.js";
import showNotification from "./notification.js";

const initAddTask = () => {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");

    const handleAdd = () => {
        const text = taskInput.value.trim();

        if(!text) return showNotification("Task cannot be empty!");

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        }

        addTaskToStore(newTask);

        taskInput.value = "";
        showNotification(`Task ${text} added successfully!`);
    }

    addBtn.addEventListener("click", handleAdd);

    taskInput.addEventListener("keypress", (e) => {
        if(e.key === "Enter") handleAdd();
    })
}

export default initAddTask;