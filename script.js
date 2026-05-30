

// Hamburger
const hamburger = document.getElementsByClassName('bx-menu-wide');
const navLinks = document.getElementsByClassName('nav-links');
hamburger[0].addEventListener('click', hideNavLinks);

// About details card content
const detailsCards = document.querySelectorAll('.details-card');



// Hamburger function
function hideNavLinks(event){
    if(navLinks[0].classList.contains('active')){
        navLinks[0].classList.remove('active');
    }else{
        navLinks[0].classList.add('active');
    }
}

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
