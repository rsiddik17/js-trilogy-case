export function initTheme() {
  const toggleSwitch = document.getElementById("checkbox");
  const htmlElement = document.documentElement;
  const currentTheme = localStorage.getItem("theme");

  if(currentTheme) {
    htmlElement.setAttribute("data-theme", currentTheme);

    if(currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if(e.target.checked) {
      localStorage.setItem("theme", "dark");
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      htmlElement.setAttribute("data-theme", "light");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme);
}
