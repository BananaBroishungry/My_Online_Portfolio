document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const container = document.querySelector(".card-container");
  
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        // Check if the card is already expanded
        const isExpanded = card.classList.contains("expanded");
  
        // Reset all cards
        cards.forEach((c) => c.classList.remove("expanded"));
        container.classList.remove("expanding");
  
        if (!isExpanded) {
          // Expand the clicked card
          card.classList.add("expanded");
          container.classList.add("expanding");
  
          // Adjust container's alignment for the expanded card
          container.style.justifyContent = "flex-start";
        } else {
          // Reset alignment
          container.style.justifyContent = "center";
        }
      });
    });
  });
  