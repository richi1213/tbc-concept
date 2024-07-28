// SLIDER
const initSlider = (sliderWrapper) => {
  const cardList = sliderWrapper.querySelector(".card-list");
  const slideButtons = sliderWrapper.querySelectorAll(".slide-button");
  const sliderScrollbar = sliderWrapper.querySelector(".slider-scrollbar");
  const scrollbarThumb = sliderWrapper.querySelector(".scrollbar-thumb");

  const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      let newThumbPosition = thumbPosition + deltaX;

      const maxThumbPosition =
        sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;
      newThumbPosition = Math.max(newThumbPosition, 0);
      newThumbPosition = Math.min(newThumbPosition, maxThumbPosition);

      scrollbarThumb.style.left = `${newThumbPosition}px`;

      const scrollPosition =
        (newThumbPosition / maxThumbPosition) * maxScrollLeft;
      cardList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      scrollbarThumb.style.transition = "left 0.3s ease"; // Re-enable transition on release
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach((button) =>
    button.addEventListener("click", () => {
      const direction = button.classList.contains("prev-slide") ? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    })
  );

  // Handle button styles based on scroll position
  const handleSlideButtons = () => {
    if (cardList.scrollLeft <= 0) {
      slideButtons[0].style.color = "#94a3b8";
      slideButtons[0].style.cursor = "default";
    } else {
      slideButtons[0].style.color = ""; // Reset color
      slideButtons[0].style.cursor = "pointer";
    }

    if (cardList.scrollLeft >= maxScrollLeft) {
      slideButtons[1].style.color = "#94a3b8";
      slideButtons[1].style.cursor = "default";
    } else {
      slideButtons[1].style.color = ""; // Reset color
      slideButtons[1].style.cursor = "pointer";
    }
  };

  // Update scrollbar thumb position based on cardList scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = cardList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  cardList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });

  // Enable drag scrolling
  let isDragging = false;
  let startX, scrollLeft;

  const startDrag = (e) => {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = cardList.scrollLeft;
    e.preventDefault();
  };

  const endDrag = () => {
    isDragging = false;
  };

  const moveDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    cardList.scrollLeft = scrollLeft - walk;
  };

  cardList.addEventListener("mousedown", startDrag);
  cardList.addEventListener("touchstart", startDrag);
  cardList.addEventListener("mousemove", moveDrag);
  cardList.addEventListener("touchmove", moveDrag);
  cardList.addEventListener("mouseleave", endDrag);
  cardList.addEventListener("mouseup", endDrag);
  cardList.addEventListener("touchend", endDrag);

  handleSlideButtons();
  updateScrollThumbPosition();
};

window.addEventListener("load", () => {
  const sliderWrappers = document.querySelectorAll(".slider-wrapper");
  sliderWrappers.forEach(initSlider);
});
