import { initTheme } from "./data/theme.js";
import { initAddTask } from "./features/addTask.js";
import { initSearchTask } from "./features/searchTask.js";
import { initFilterTask } from "./features/filterTask.js";
import { initClearCompleted } from "./features/clearCompleted.js";
import { initModal } from "./features/modal.js";
import { renderApp } from "./features/render.js";

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initAddTask();
    initSearchTask();
    initFilterTask();
    initModal();
    initClearCompleted();
    renderApp();

    document.addEventListener("dataChanged", () => {
        renderApp();
    })
});