const images = document.querySelectorAll('.image-container img');

// Function to shuffle images when clicked
function shuffleImages() {
    images.forEach(image => {
        const randomX = Math.floor(Math.random() * 100) - 50; // Random X offset
        const randomY = Math.floor(Math.random() * 100) - 50; // Random Y offset
        image.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

// Function to bring hovered image on top
images.forEach(image => {
    image.addEventListener('click', shuffleImages);

    image.addEventListener('mouseover', () => {
        images.forEach(img => img.classList.remove('active'));
        image.classList.add('active');
    });
});

