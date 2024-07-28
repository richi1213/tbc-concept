document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const headerMenu = document.querySelector(".menu-header");
  const mainContents = document.querySelectorAll(".main-content");

  function closeMenu() {
    hamburger.classList.remove("active");
    body.classList.remove("active");
    mainContents.forEach((mainContent) => {
      mainContent.classList.remove("hidden");
    });
  }

  hamburger.addEventListener("click", () => {
    // Toggle 'active' class on hamburger and body
    hamburger.classList.toggle("active");
    body.classList.toggle("active");

    // Hide/show main content elements
    mainContents.forEach((mainContent) => {
      mainContent.classList.toggle("hidden");
    });

    // Ensure the header and headerMenu are always visible
    header.classList.remove("hidden");
    headerMenu.classList.remove("hidden");
  });

  // Close the menu when the screen size changes
  window.addEventListener("resize", () => {
    closeMenu();
  });
});
