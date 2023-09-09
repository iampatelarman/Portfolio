const navBtn = document.querySelector(".nav-btn");
const sidebarNav = document.querySelector(".sidebar");

navBtn.addEventListener("click", () => {
  sidebarNav.classList.toggle("show-sidebar");
});
