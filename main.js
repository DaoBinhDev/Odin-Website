
/* =====================================
   ODIN - MAIN JAVASCRIPT
   ===================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");


if (menuToggle && mainNav) {

    // Mở hoặc đóng menu
    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    // Đóng menu khi chọn liên kết
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    // Đóng menu khi nhấn bên ngoài
    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            mainNav.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            mainNav.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


/* 2. AUTOMATIC COPYRIGHT YEAR */

const currentYear =
    document.getElementById("current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
