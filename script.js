// ========================================
// Welcome Message
// ========================================

console.log("Welcome to Fabiha's Portfolio!");


// ========================================
// Active Navigation Link (IntersectionObserver)
// ========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px", // Triggers active state near the top of the viewport
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
                const isMatch = link.getAttribute("href") === `#${currentId}`;
                link.classList.toggle("active", isMatch);
            });
        }
    });
}, observerOptions);

sections.forEach((section) => observer.observe(section));


