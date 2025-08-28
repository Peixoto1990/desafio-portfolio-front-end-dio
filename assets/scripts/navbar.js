const navLinks = document.querySelectorAll(".header-nav__list a");

navLinks.forEach((linkElement) => {
    linkElement.addEventListener("click", () => {
        navLinks.forEach((link) => {
            link.classList.remove("link-active");
        })
        linkElement.classList.add("link-active");
    });
})