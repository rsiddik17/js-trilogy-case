import initTheme from "./data/theme.js";
import initAddTask from "./features/addTask.js";
import initClearCompleted from "./features/clearCompleted.js";
import initFilterTask from "./features/filterTask.js";
import { initModal } from "./features/modal.js";
import renderApp from "./features/render.js";
import initSearchTask from "./features/searchTask.js";

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initAddTask();
    initModal();
    initSearchTask();
    initFilterTask();
    initClearCompleted()
    renderApp();

    document.addEventListener("dataChanged", () => {
        renderApp();
    })
})