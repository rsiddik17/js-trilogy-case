const initTheme = () => {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const rootElement = document.documentElement;
    const currentTheme = localStorage.getItem("theme");

    if(currentTheme) {
        rootElement.setAttribute("data-theme", currentTheme);

        if(currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if(e.target.checked) {
            localStorage.setItem("theme", "dark");
            rootElement.setAttribute("data-theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
            rootElement.setAttribute("data-theme", "light");
        }
    }

    toggleSwitch.addEventListener("click", switchTheme);
}

export default initTheme;