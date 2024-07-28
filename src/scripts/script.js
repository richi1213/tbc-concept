// SHADOW DELAY AFTER UNHOVER
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.classList.add("card-hovered");
      card.classList.remove("card-shadow-delay");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("card-hovered");
      card.classList.add("card-shadow-delay");

      card.addEventListener(
        "transitionend",
        () => {
          card.classList.remove("card-shadow-delay");
        },
        { once: true }
      );
    });
  });
});
