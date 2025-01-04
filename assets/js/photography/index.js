const path = window.location.pathname.split("/");
const isPhotographyHome = path.length === 3;

let menuOpen = false;

function handleMenuFactory(navEl) {
  return function handleMenu(e) {
    e.preventDefault();

    menuOpen = !menuOpen;

    if (menuOpen) {
      navEl.classList.add("open");
    } else {
      navEl.classList.remove("open");
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("photographyNav");
  if (!nav) throw new Error("no #photgraphyNav element found.");

  // TODO: eventually let's add a slideshow instead of the open menu.
  if (isPhotographyHome) {
    nav.classList.add("open");
  } else {
    const navButton = document.getElementById("navigateButton");
    navButton.addEventListener("click", handleMenuFactory(nav));
  }
});
