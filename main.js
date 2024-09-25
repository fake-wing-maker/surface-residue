// for image shiffle
const images = document.querySelectorAll('.shuffle-image');
let activeImageIndex = -1;

function shuffleImages() {
    images.forEach((image, index) => {
        if (index === activeImageIndex) {
            image.classList.add('inactive');
            image.classList.remove('active');
        }
    });

    // Randomly select a new image to activate
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === activeImageIndex);

    activeImageIndex = newIndex;
    images[activeImageIndex].classList.add('active');
    images[activeImageIndex].classList.remove('inactive');
}

// Set up click event to shuffle images
images.forEach(image => {
    image.addEventListener('click', shuffleImages);
});

// Initialize the first image as active
shuffleImages();