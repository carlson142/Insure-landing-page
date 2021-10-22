const menuBTN = document.getElementById("hamb");
const closeBTN = document.querySelector(".closeBTN");

const menu = document.querySelector(".mobMenu");

/////////////////////////////////////////////////////////////////////////
function openMenu() {
  menuBTN.style.display = "none";
  closeBTN.style.display = "block";

  menu.style.display = "flex";
}

function closeMenu() {
  menuBTN.style.display = "block";
  closeBTN.style.display = "none";

  menu.style.display = "none";
}

/////////////////////////////////////////////////////////////////////////

menuBTN.addEventListener("click", () => {
  openMenu();
});

closeBTN.addEventListener("click", () => {
  closeMenu();
});
