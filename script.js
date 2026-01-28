document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }

    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    const nav = document.querySelector('.glass-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // Scrolling down - hide navbar
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show navbar
            nav.style.transform = 'translateY(0)';
        }
        
        if (window.scrollY > 50) {
            nav.style.background = 'var(--glass-dark)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'var(--glass-dark)';
            nav.style.boxShadow = 'none';
        }
        
        lastScrollY = window.scrollY;
    });
    
    // Smooth navigation transition
    nav.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, box-shadow 0.3s ease';
});
