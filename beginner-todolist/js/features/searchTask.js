import { setSearchQuery } from "../data/store.js";

export const initSearchTask = () => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", (e) => {
    setSearchQuery(e.target.value);
  });
};
