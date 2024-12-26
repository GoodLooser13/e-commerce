/* Ciao Raffy, scrivi un bel codice! */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtn.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

/*In esecuzione si bugga l'icona del menu dopo il primo click*/