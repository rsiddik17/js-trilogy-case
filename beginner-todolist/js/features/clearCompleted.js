import { clearCompletedFromStore, getStats } from "../data/store.js";
import { showNotification } from "./notification.js";
import { showConfirmModal } from "./modal.js";

export const initClearCompleted = () => {
    const clearBtn = document.getElementById('clearCompletedBtn');

    clearBtn.addEventListener('click', () => {
        const stats = getStats();
        if (stats.completed === 0) {
            return showNotification("No completed tasks to clear!");
        }

        showConfirmModal(`Are you sure you want to clear ${stats.completed} completed tasks?`, () => {
                clearCompletedFromStore();
                showNotification("Completed tasks cleared!");
            }
        );
    });
};