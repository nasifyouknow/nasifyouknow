// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to elements when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s forwards';
        }
    });
});

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Add animation to project cards
document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Dynamic typing effect for the title
const titles = ['Full Stack Developer', 'Problem Solver', 'Code Enthusiast'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const titleElement = document.querySelector('.title');

function typeEffect() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
        titleElement.textContent = currentTitle.substring(0, charIndex-1);
        charIndex--;
    } else {
        titleElement.textContent = currentTitle.substring(0, charIndex+1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}

// Start the typing effect
typeEffect();
