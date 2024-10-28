let currentImage = 0;
const images = Array.from(document.querySelectorAll('.image-container'));

// Enable sticky effect for an element
function enableStickyEffect(element) {
  element.style.position = 'sticky';
  element.style.top = '0'; // Stick to the top of the viewport
}

// Function to initialize image display
function initializeImages() {
  images.forEach((image, i) => {
    image.style.display = 'flex'; // Make all images visible
    image.style.zIndex = i + 1; // Set initial stacking order
    enableStickyEffect(image); // Set sticky positioning
  });

  // Adjust container height
  updateContainerHeight();

  // Add empty div at the bottom to allow smooth scrolling past last image
  addEmptyDivAtBottom();
}

// Scroll-based handler for progressive image display
function handleScroll() {
  images.forEach((image, index) => {
    const rect = image.getBoundingClientRect();

    // Check if the current image is in view
    if (rect.top <= window.innerHeight && index === currentImage) {
      image.style.display = 'flex'; // Make the image visible
      image.style.zIndex = index + 1; // Set z-index for stacking

      // Move to the next image once the current one is visible at the top
      if (rect.top <= 0 && currentImage < images.length - 1) {
        currentImage += 1; // Update the index for the next image
      }
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initialize images display
initializeImages();

// Resize empty div to ensure scrolling works smoothly
function resizeEmptyDiv() {
  const emptyDiv = document.querySelector('.empty');
  const lastImage = images[images.length - 1];
  const emptyHeight = window.innerHeight - lastImage.getBoundingClientRect().height;
  emptyDiv.style.height = `${emptyHeight}px`;
}