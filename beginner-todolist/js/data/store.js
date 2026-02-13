import { loadFromStorage, saveToStorage, triggerEvent } from "./storage.js";

let tasks = loadFromStorage();
let currentFilter = "all";
let currentSearch = "";

export const addTaskToStore = (task) => {
    tasks.unshift(task);
    saveToStorage(tasks);
}

export const toggleTaskInStore = (id) => {
    tasks = tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task);
    saveToStorage(tasks);
}

export const deleteTaskFromStore = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    saveToStorage(tasks);
}

export const getStats = () => {
    return {
        total: tasks.length,
        completed: tasks.filter(task => task.completed).length,
        pending: tasks.filter(task => !task.completed).length
    }
}

export const getFilterTasks = () => {
    return tasks.filter(task => {
        const matchSearch = task.text.toLowerCase().includes(currentSearch.toLocaleLowerCase());

        const matchFilter = (currentFilter === "all") || (currentFilter === "completed" && task.completed) ||  (currentFilter === "pending" && !task.completed);

        return matchSearch && matchFilter;
    })
}

export const setSearchQuery = (query) => {
    currentSearch = query;
    triggerEvent();
}

export const setFilterStatus = (query) => {
    currentFilter = (query);
    triggerEvent();
}

export const clearCompletedFromStore = () => {
    tasks = tasks.filter(task => !task.completed);
    saveToStorage(tasks);
}