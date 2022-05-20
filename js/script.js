window.addEventListener("DOMContentLoaded", function () {
    'use strict'
//     Paste your classes here _____________________________________
    let tabs = document.querySelectorAll(".info-header-tab") // tabs' buttons
    let info = document.querySelector(".info-header") // tabs button's container
    let tabContent = document.querySelectorAll(".info-tabcontent") // tabs
//    _______________________________________________________________

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show")
            tabContent[i].classList.add("hide")
        }
    }
    hideTabContent(1);
    function showTabContent(a) {
        if (tabContent[a].classList.contains("hide")) {
            tabContent[a].classList.remove("hide")
            tabContent[a].classList.add("show")

        }
    }

    info.addEventListener("click", (evt) => {
        let target = evt.target

        if (target && target.classList.contains("info-header-tab")) {
            tabs.forEach((el, index) => {
                if (el === target) { hideTabContent(0); showTabContent(index) }
            })
        }
    })
})
