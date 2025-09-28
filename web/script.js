document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    heroSection.style.transition = 'opacity 1s ease-in-out';
    heroSection.style.opacity = 1;

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.transition = `transform 0.5s ease-in-out ${index * 0.2}s`;
        item.style.transform = 'translateY(0)';
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const overlay = document.createElement("div");
    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });

    const tabs = document.querySelectorAll(".tab-navigation a");
    const sections = document.querySelectorAll("main > section");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all tabs and sections
            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // Add active class to the clicked tab and corresponding section
            const target = document.querySelector(tab.getAttribute("href"));
            tab.classList.add("active");
            target.classList.add("active");
        });
    });
});