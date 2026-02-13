const STORAGE_KEY = 'todo-apps-data';

export const loadFromStorage = () => {
    try {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if(!data) return [];
        return data;
    } catch (e) {
        console.log("failed load data", e.message);
        return [];
    }
}


export const saveToStorage = (data) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        triggerEvent();
    } catch(e) {
        console.log("failed save data", e.message);
    }
}


export const triggerEvent = () => {
    document.dispatchEvent(new Event("dataChanged"));
}