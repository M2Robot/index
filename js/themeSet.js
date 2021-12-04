if (localStorage.getItem("theme") != null) {
    (localStorage.getItem("theme").includes("true") ? Set_day() : Set_night())
}


function Set_night() {
    document.querySelector(":root").style.setProperty("--mode-color", "#f8f8f8");
    document.querySelector(":root").style.setProperty("--backgroundColor", " #1f1f1f");
    localStorage.setItem("theme", false)
};

function Set_day() {
    document.querySelector(":root").style.setProperty("--mode-color", "#1f1f1f");
    document.querySelector(":root").style.setProperty("--backgroundColor", " #fff");
    localStorage.setItem("theme", true)
}