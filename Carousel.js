let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first image after the last one
  items[currentIndex].classList.add('active');
}

function showPrevItem() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last image after the first one
  items[currentIndex].classList.add('active');
}

// Set the first image to active on load
items[currentIndex].classList.add('active');

// Event listeners for the buttons
document.querySelector('.carousel-next').addEventListener('click', showNextItem);
document.querySelector('.carousel-prev').addEventListener('click', showPrevItem);