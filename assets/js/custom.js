// Initialize AOS animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(31, 41, 55, 0.95)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
});

// Add hover animation to 3D cards
const cards = document.querySelectorAll('.card-3d');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});