

// ═══════════════════════════════════════════════════════════
// HAMBURGER MENU
// ═══════════════════════════════════════════════════════════
const hamburger = document.getElementsByClassName('bx-menu-wide');
const navLinks = document.getElementsByClassName('nav-links');
const navLinksAnchors = document.querySelectorAll('.nav-links a');

// Toggle mobile menu on hamburger click
if (hamburger.length > 0) {
    hamburger[0].addEventListener('click', toggleMobileMenu);
}

// Close menu when a navigation link is clicked
navLinksAnchors.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const header = document.getElementById('header');
    const isClickInsideHeader = header.contains(event.target);
    if (!isClickInsideHeader && navLinks[0] && navLinks[0].classList.contains('active')) {
        closeMobileMenu();
    }
});

// Hamburger toggle function
function toggleMobileMenu(event) {
    if (navLinks[0]) {
        navLinks[0].classList.toggle('active');
    }
}

// Close mobile menu function
function closeMobileMenu() {
    if (navLinks[0]) {
        navLinks[0].classList.remove('active');
    }
}

// ═══════════════════════════════════════════════════════════
// ABOUT DETAILS CARD CONTENT
// ═══════════════════════════════════════════════════════════

const detailsCards = document.querySelectorAll('.details-card');

// About details card content function
detailsCards.forEach( detailsCard =>{
    const showcardDetails = detailsCard.querySelector('.show-card-details');
    const hidecardDetails = detailsCard.querySelector('.hide-card-details');
    const detailsCardContent = detailsCard.querySelector('.details-card-content');

    // Initial state
    hidecardDetails.style.display = "none";

    // Show content
    showcardDetails.addEventListener('click', () => {

        detailsCardContent.classList.add('active');

        showcardDetails.style.display = "none";
        hidecardDetails.style.display = "flex";
    });

    // Hide content
    hidecardDetails.addEventListener('click', () => {

        detailsCardContent.classList.remove('active');

        showcardDetails.style.display = "flex";
        hidecardDetails.style.display = "none";
    });
});

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
}

function sendEmail(e) {
    e.preventDefault();

    if (typeof emailjs === 'undefined') {
        alert('Email service is not loaded yet. Please try again in a moment.');
        return;
    }

    emailjs.sendForm(
        'service_xdr42ee',
        'template_1blt3x9',
        contactForm,
        'FdOlkDOtj8Wc_OJ0K'
    )
    .then((result) => {
        alert('Message sent!');
        contactForm.reset();
    }, (error) => {
        alert('Failed to send message. Please try again.');
    });
}
