document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    heroSection.style.transition = 'opacity 1s ease-in-out';
    heroSection.style.opacity = 1;

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.transition = `transform 0.5s ease-in-out ${index * 0.2}s`;
        item.style.transform = 'translateY(0)';
    });
});