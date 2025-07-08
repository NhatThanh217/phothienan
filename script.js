const slider = document.getElementById('slider-container');
const images = slider.querySelectorAll('img');
const imageCount = images.length;
const imageGap = 16; // Tailwind gap-4 = 1rem = 16px
let currentIndex = 0;
let autoScrollInterval;

function scrollToIndex(index) {
    const imageWidth = images[0].offsetWidth;
    slider.scrollTo({
        left: index * (imageWidth + imageGap),
        behavior: 'smooth'
    });
}

function autoScroll() {
    currentIndex = (currentIndex + 1) % imageCount;
    scrollToIndex(currentIndex);
}

function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 2000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Manual button controls
document.getElementById('next-button').addEventListener('click', () => {
    stopAutoScroll(); // optional: pause auto-scroll when user interacts
    currentIndex = (currentIndex + 1) % imageCount;
    scrollToIndex(currentIndex);
    startAutoScroll();
});

document.getElementById('prev-button').addEventListener('click', () => {
    stopAutoScroll(); // optional: pause auto-scroll when user interacts
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    scrollToIndex(currentIndex);
    startAutoScroll();
});

// Pause on hover
slider.addEventListener('mouseenter', stopAutoScroll);
slider.addEventListener('mouseleave', startAutoScroll);

// Start the auto-scroll on load
window.addEventListener('load', startAutoScroll);