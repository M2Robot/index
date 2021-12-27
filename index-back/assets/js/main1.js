var vm = new Vue({
    el: "#nav-container",
    data: {
        twitter: "https://twitter.com/xd0srr",
        insta: "https://www.instagram.com/81111i/",
        youtube: "https://www.youtube.com/channel/UCeI_ypmubD2-7iQIPtvPb1g/videos",
        imgdata: ["#", "#", "#"]
    },
    methods: {
        mode_() {
            const valueColor = getComputedStyle(document.querySelector(":root")).getPropertyValue("--mode-color");
            (valueColor.includes('#f8f8f8') ? Set_day() : Set_night())
        }
    }
})

