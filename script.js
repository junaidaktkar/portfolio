const menuIcon = document.querySelector(".bi-list");
const nav = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("show");
});

window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = ""; 
});




