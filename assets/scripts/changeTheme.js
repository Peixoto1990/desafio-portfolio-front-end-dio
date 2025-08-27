const btnTheme = document.getElementById('changeTheme');
btnTheme.addEventListener("click", changeTheme);

function changeTheme(ev) {
    const page = document.getElementById("page");
    page.classList.toggle("page");

    btnTheme.classList.toggle("btn-theme");
}