document.addEventListener('DOMContentLoaded', () => {

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    const applyTheme = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️'; 
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙'; 
            localStorage.setItem('theme', 'light');
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme(true); 
    } else {
        applyTheme(false); 
    }


    darkModeToggle.addEventListener('click', () => {
        applyTheme(!body.classList.contains('dark-mode'));
    });

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o salto imediato

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth' // Habilita a rolagem suave
            });
        });
    });

    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const nav = document.querySelector('nav'); 

    const highlightNavLink = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - nav.offsetHeight - 20; 
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < (sectionTop + sectionHeight)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active'); 
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active'); 
            }
        });
    };

    // Chama a função ao carregar e ao rolar a página
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Chama ao carregar para definir a seção inicial

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const animateOnScroll = () => {
        const elements = document.querySelectorAll('main section, main aside, .project-card, .skill-item');
        elements.forEach(el => {
            // Verifica se o elemento está visível na tela
            const rect = el.getBoundingClientRect();
            const isVisible = (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85) && (rect.bottom >= 0);

            if (isVisible) {
                el.classList.add('fade-in');
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Chama uma vez ao carregar a página

});