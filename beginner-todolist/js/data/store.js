const STORAGE_KEY = 'todo-apps-data';

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentFilter = 'all';
let currentSearch = '';

const triggerEvent = () => {
    document.dispatchEvent(new Event("dataChanged"));
}

const saveToStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    triggerEvent();
}



export const getTasks = () => tasks;

export const addTaskToStore = (task) => {
    tasks.unshift(task);
    saveToStorage();
}

export const deleteTaskFromStore = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    saveToStorage();
}

export const toggleTaskInStore = (id) => {
    tasks = tasks.map(task => task.id === id ? {...task, completed: !task.completed } : task );
    saveToStorage();
}

export const getStats = () => {
    return {
        total: tasks.length,
        completed: tasks.filter(task => task.completed).length,
        pending: tasks.filter(task => !task.completed).length
    };
};

export const setSearchQuery = (query) => {
    currentSearch = query;
    triggerEvent();
};

export const setFilterStatus = (status) => {
    currentFilter = status;
    triggerEvent();
};

export const getFilteredTasks = () => {
    return tasks.filter(task => {
        const matchSearch = task.text.toLowerCase().includes(currentSearch.toLowerCase());
        
        const matchFilter = 
            (currentFilter === 'all') ||
            (currentFilter === 'completed' && task.completed) ||
            (currentFilter === 'pending' && !task.completed);

        return matchSearch && matchFilter;
    });
};

export const clearCompletedFromStore = () => {
    tasks = tasks.filter(task => !task.completed);
    saveToStorage();
};