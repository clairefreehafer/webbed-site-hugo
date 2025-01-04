const path = window.location.pathname.split("/");
const isPhotographyHome = path.length === 3;

let menuOpen = false;

function handleMenuFactory(htmlEl) {
  return function (e) {
    e.preventDefault();

    menuOpen = !menuOpen;

    if (menuOpen) {
      htmlEl.classList.add("nav-open");
    } else {
      htmlEl.classList.remove("nav-open");
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const html = document.getElementsByTagName("html")?.[0];
  if (!html) throw new Error("no #photgraphyNav element found.");

  // TODO: eventually let's add a slideshow instead of the open menu.
  if (isPhotographyHome) {
    html.classList.add("nav-open");
  } else {
    const navButton = document.getElementById("navigateButton");
    navButton.addEventListener("click", handleMenuFactory(html));
  }
});
