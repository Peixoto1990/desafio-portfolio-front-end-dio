const btnTheme = document.getElementById('changeTheme');
btnTheme.addEventListener("click", changeTheme);

function changeTheme(ev) {
    const pageItensContainers = document.querySelectorAll(".page-dark");
    pageItensContainers.forEach((item) => {
        item.classList.toggle("page");
    })

    const ancorHeaderElements = document.querySelectorAll(".header a");

    ancorHeaderElements.forEach((element) => {
        element.classList.toggle("texto-destaque");
        element.classList.toggle("filter-invert-off");
    })

    const titlesElements = document.querySelectorAll("*:is(h1, h2, h3, h4, h5, h6)");
    
    titlesElements.forEach((title) => {
        title.classList.toggle("texto-destaque");
    })

    const otherElements = document.querySelectorAll("*:not(h1, h2, h3, h4, h5, h6, a, button, details *)");

    const githubIcons = document.querySelectorAll(".github");

    githubIcons.forEach((icon) => {
        icon.classList.toggle("filter-invert-off");
    })

    otherElements.forEach((element) => {
        element.classList.toggle("texto");
    })

    btnTheme.classList.toggle("btn-theme");
}

window.matchMedia('(prefers-color-scheme: light)').matches ? changeTheme() : null;
