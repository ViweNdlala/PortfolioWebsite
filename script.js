

// Hamburger
const hamburger = document.getElementsByClassName('bx-menu-wide');
const navLinks = document.getElementsByClassName('nav-links');
hamburger[0].addEventListener('click', hideNavLinks);


// About details card content
const detailsCards = document.querySelectorAll('.details-card');
detailsCards.forEach( detailsCard =>{
    const showcardDetails = detailsCard.querySelector('.show-card-details');
    const hidecardDetails = detailsCard.querySelector('.hide-card-details');
    const detailsCardContent = detailsCard.querySelector('.details-card-content');

    // Initial state of arrows
    detailsCardContent.style.display = "none";
    hidecardDetails.style.display = "none";
    
    // Show details card content on clisk
    showcardDetails.addEventListener('click', () =>{
        detailsCardContent.style.display = "inline-block";
        showcardDetails.style.display = "none";
        hidecardDetails.style.display = "flex";
    });

    // Hide details card content on click
    hidecardDetails.addEventListener('click', () =>{
        detailsCardContent.style.display = "none";
        showcardDetails.style.display = "flex";
        hidecardDetails.style.display = "none";
    });
});


// Hamburger function
function hideNavLinks(event){
    if(navLinks[0].classList.contains('active')){
        navLinks[0].classList.remove('active');
    }else{
        navLinks[0].classList.add('active');
    }
}

// About section
// function showDetailsCard(detailsCard){
//     if(detailsCard.classList.contains('active')){
//         detailsCard.classList.remove('active');
//     }else{
//         detailsCard.classList.add('active');
//     }
// }
