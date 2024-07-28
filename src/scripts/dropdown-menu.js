document.addEventListener("DOMContentLoaded", () => {
  const dropdownTogglers = document.querySelectorAll(
    ".header-dropdown-toggler"
  );
  const dropdownLists = document.querySelectorAll(".dropdown-list");
  const dropdownTheme = document.querySelector(".nav-header-dropdown-theme");

  // Function to hide all dropdowns and background
  const hideDropdowns = () => {
    dropdownLists.forEach((list) => list.classList.add("invisible"));
    dropdownTogglers.forEach((toggler) =>
      toggler
        .querySelector(".header-dropdown-indicator")
        .classList.remove("scale-x-100")
    );
    dropdownTheme.classList.add("opacity-0");
    setTimeout(() => {
      if (dropdownTheme.classList.contains("opacity-0")) {
        dropdownTheme.classList.add("hidden");
      }
    }, 600);
  };

  const showDropdown = (index) => {
    hideDropdowns();
    dropdownLists[index].classList.remove("invisible");
    dropdownTogglers[index]
      .querySelector(".header-dropdown-indicator")
      .classList.add("scale-x-100");
    dropdownTheme.classList.remove("hidden");
    setTimeout(() => {
      dropdownTheme.classList.remove("opacity-0");
    }, 10);
  };

  dropdownTogglers.forEach((toggler, index) => {
    toggler.addEventListener("click", (event) => {
      event.stopPropagation();
      const isVisible = !dropdownLists[index].classList.contains("invisible");
      hideDropdowns();
      if (!isVisible) {
        showDropdown(index);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header-dropdown-toggler")) {
      hideDropdowns();
    }
  });

  window.addEventListener("resize", () => {
    hideDropdowns();
  });
});
