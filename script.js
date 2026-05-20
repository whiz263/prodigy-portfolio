// Check if the script is loaded
console.log("Portfolio loaded successfully!");

// 1. Add a shadow to the header when scrolling down
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        header.style.transition = 'box-shadow 0.3s ease';
    } else {
        header.style.boxShadow = 'none';
    }
});

// 2. Smooth scrolling for the Hero button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault(); // Stop the default jump behavior
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});