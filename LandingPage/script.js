document.addEventListener("DOMContentLoaded", function () {
    const check = document.getElementById("check");
    const header = document.querySelector("header");
    const menuBtn = header.querySelector(".menu-btn");
    const closeBtn = header.querySelector(".close-btn");

    function handleResize() {
        if (window.innerWidth <= 560) {
            if (check.checked) {
                header.classList.add("show-navigation", "show-close-btn");
                header.classList.remove("hide-navigation", "hide-menu-btn");
            } else {
                header.classList.add("hide-navigation");
                header.classList.remove("show-navigation", "show-close-btn");
                header.classList.add("hide-menu-btn");
            }
        } else {
            header.classList.remove("show-navigation", "hide-navigation", "show-close-btn", "hide-menu-btn");
        }
    }

    check.addEventListener("change", handleResize);
    window.addEventListener("resize", handleResize);

    handleResize();
});
