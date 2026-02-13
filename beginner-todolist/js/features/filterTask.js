import { setFilterStatus } from "../data/store.js";

const initFilterTask = () => {
    const filterBtns = document.querySelectorAll(".todo-app__filter-btn");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("todo-app__filter-btn--active"));

            btn.classList.add("todo-app__filter-btn--active");

            const status = btn.getAttribute("data-filter");
            setFilterStatus(status);
        })
    })
}

export default initFilterTask;