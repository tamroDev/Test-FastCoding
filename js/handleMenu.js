const btnNav = document.querySelector(".navResponsize");
const nav = document.querySelector(".menuResponsize");

btnNav.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const btnMenuHidden = document.querySelectorAll(".menuResponsize .navHidden");

btnMenuHidden.forEach((item) => {
  const menuChildren = item.querySelector(".menuHidden");
  item.addEventListener("click", () => {
    menuChildren.classList.toggle("openMenuHidden");
  });
});
