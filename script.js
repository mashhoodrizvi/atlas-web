const menuButton = document.getElementById("menuButton");
const mobileNavigation = document.getElementById("mobile-navigation");
const mobileLinks = mobileNavigation.querySelectorAll("a");

function setMenu(open) {
  mobileNavigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  setMenu(open);
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});
