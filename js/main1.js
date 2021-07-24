var vm = new Vue({
    el: "#nav-container",
    data: {
        insta: "https://www.instagram.com/111r.20607/",
        github: "https://github.com/M2Robot",
        imgdata: ["#", "#", "#"]
    },
    methods: {
        mode_() {
            const valueColor = getComputedStyle(document.querySelector(":root")).getPropertyValue("--mode-color");
            (valueColor.includes('#f8f8f8') ? Set_day() : Set_night())
        }
    }
})

