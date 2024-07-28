// DROPDOWN ACCORDION
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".accordion-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const target = document.querySelector(this.getAttribute("data-target"));

      // Close all other dropdowns
      document.querySelectorAll(".dropdown-items").forEach((item) => {
        if (item !== target) {
          item.style.height = 0;
          item.classList.remove("show");
          setTimeout(() => (item.style.height = ""), 400); // Reset height after transition
        }
      });

      document.querySelectorAll(".accordion-toggle").forEach((button) => {
        if (button !== this) {
          button.classList.remove("rotate");
        }
      });

      // Toggle the clicked dropdown
      if (target.classList.contains("show")) {
        target.style.height = target.scrollHeight + "px";
        setTimeout(() => {
          target.style.height = 0;
          target.classList.remove("show");
          setTimeout(() => (target.style.height = ""), 400);
        }, 10);
      } else {
        target.style.height = target.scrollHeight + "px";
        setTimeout(() => {
          target.classList.add("show");
          target.style.height = "";
        }, 400);
      }
      this.classList.toggle("rotate");
    });
  });

  // Hide dropdown items and remove rotate class when resizing to larger screens
  window.addEventListener("resize", function () {
    document.querySelectorAll(".dropdown-items").forEach((item) => {
      item.style.height = 0;
      item.classList.remove("show");
      setTimeout(() => (item.style.height = ""), 400); // Reset height after transition
    });

    document.querySelectorAll(".accordion-toggle").forEach((button) => {
      button.classList.remove("rotate");
    });
  });
});
