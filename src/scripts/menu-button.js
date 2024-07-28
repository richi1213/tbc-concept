document.getElementById("menuButton").addEventListener("click", function () {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const threeDotsIcon = document.getElementById("threeDotsIcon");
  const crossIcon = document.getElementById("crossIcon");

  // Toggle dropdown visibility
  dropdownMenu.classList.toggle("hidden");

  // Toggle icons
  threeDotsIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
});
