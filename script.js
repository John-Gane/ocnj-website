const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const currentYear = document.getElementById("currentYear");


if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const menuIsOpen = navLinks.classList.contains("open");

    menuButton.textContent = menuIsOpen ? "✕" : "☰";
  });
}


document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuButton.textContent = "☰";
  });
});


if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
