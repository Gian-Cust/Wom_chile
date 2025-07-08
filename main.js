document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DE PRECARGA ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => { // Un pequeño retraso para que la animación se aprecie
            preloader.classList.add('hidden');
        }, 200);
    });

    // --- ANIMACIÓN DE ELEMENTOS AL HACER SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || '0s';
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => observer.observe(el));

    // --- LÓGICA DE ACORDEÓN, NAVBAR Y SCROLL SUAVE ---
    const detailToggles = document.querySelectorAll('.details-toggle');
    detailToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const planCard = toggle.closest('.plan-card');
            if (planCard) planCard.classList.toggle('details-active');
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                const offset = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
    
});
