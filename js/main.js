/**
 * PORTAFOLIO PROFESIONAL - EDWIN GRANADA
 * Archivo JavaScript - Interacciones y funcionalidades
 * 
 * Este archivo contiene todas las interacciones JavaScript
 * para el portafolio, manteniendo un código limpio y bien comentado.
 */

// ===================================
// VARIABLES GLOBALES
// ===================================
const DOM = {
    // Navegación
    navbar: document.querySelector('.navbar'),
    navToggle: document.querySelector('.nav-toggle'),
    navMenu: document.querySelector('.nav-menu'),
    navLinks: document.querySelectorAll('.nav-menu a'),
    
    // Secciones
    sections: document.querySelectorAll('section'),
    
    // Animaciones
    fadeElements: document.querySelectorAll('.fade-in'),
    
    // Hero scroll
    heroScroll: document.querySelector('.hero-scroll')
};

// ===================================
// FUNCIONES PRINCIPALES
// ===================================

/**
 * Inicializa todas las funcionalidades del portafolio
 */
function initPortfolio() {
    setupNavigation();
    setupScrollEffects();
    setupAnimations();
    setupSmoothScroll();
    setupTypingEffect();
    addParticleEffect();
    console.log('🚀 Portafolio de Edwin Granada inicializado');
}

/**
 * Configura la navegación móvil y el menú hamburguesa
 */
function setupNavigation() {
    if (!DOM.navToggle || !DOM.navMenu) return;
    
    // Toggle del menú móvil
    DOM.navToggle.addEventListener('click', toggleMobileMenu);
    
    // Cerrar menú al hacer click en un enlace
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
    
    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!DOM.navbar.contains(e.target) && DOM.navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

/**
 * Alterna el menú móvil
 */
function toggleMobileMenu() {
    DOM.navMenu.classList.toggle('active');
    DOM.navToggle.classList.toggle('active');
    
    // Animación del ícono hamburguesa
    const spans = DOM.navToggle.querySelectorAll('span');
    if (DOM.navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

/**
 * Cierra el menú móvil
 */
function closeMobileMenu() {
    DOM.navMenu.classList.remove('active');
    DOM.navToggle.classList.remove('active');
    
    const spans = DOM.navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

/**
 * Configura los efectos de scroll
 */
function setupScrollEffects() {
    // Efecto en la navbar al hacer scroll
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Animación de elementos al hacer scroll
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Scroll suave para el botón del hero
    if (DOM.heroScroll) {
        DOM.heroScroll.addEventListener('click', scrollToNextSection);
    }
}

/**
 * Maneja el efecto de la navbar al hacer scroll
 */
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        DOM.navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        DOM.navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        DOM.navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        DOM.navbar.style.boxShadow = 'none';
    }
}

/**
 * Maneja las animaciones al hacer scroll
 */
function handleScrollAnimations() {
    // Animación fade-in para elementos
    DOM.fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
    
    // Actualizar enlace activo en la navegación
    updateActiveNavLink();
}

/**
 * Actualiza el enlace activo en la navegación según la sección visible
 */
function updateActiveNavLink() {
    let current = '';
    
    DOM.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    DOM.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Configura las animaciones iniciales
 */
function setupAnimations() {
    // No agregar clase fade-in para mantener los elementos visibles
    // Los elementos ya tienen estilos visibles por defecto
    
    // Trigger inicial de animaciones
    setTimeout(() => {
        handleScrollAnimations();
    }, 100);
}

/**
 * Configura el scroll suave para enlaces internos
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 70; // Compensar altura navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Hace scroll a la siguiente sección
 */
function scrollToNextSection() {
    const firstSection = document.querySelector('section:not(.hero)');
    if (firstSection) {
        const offsetTop = firstSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===================================
// FUNCIONES AUXILIARES
// ===================================

/**
 * Verifica si un elemento está en el viewport
 * @param {Element} element - Elemento a verificar
 * @returns {boolean} - True si está visible
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Debounce function para optimizar eventos scroll
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} - Función con debounce
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// INICIALIZACIÓN
// ===================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
});

// Optimizar eventos scroll con debounce
const optimizedScrollHandler = debounce(handleScrollEffects, 10);
window.addEventListener('scroll', optimizedScrollHandler);

// ===================================
// FUNCIONES ADICIONALES (Opcional)
// ===================================

/**
 * Particle animation for hero background
 */
function addParticleEffect() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    function resizeCanvas() {
        const hero = canvas.parentElement;
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', debounce(resizeCanvas, 200));
    
    const particleCount = Math.min(60, Math.floor(canvas.width * canvas.height / 15000));
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.4 + 0.1;
            // Mix of cyan and blue tones
            const colors = [
                { r: 0, g: 245, b: 212 },   // neon cyan
                { r: 59, g: 130, b: 246 },   // accent blue
                { r: 96, g: 165, b: 250 },   // light blue
                { r: 178, g: 75, b: 243 }    // neon purple
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.12;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 245, 212, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        drawConnections();
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
}

/**
 * Typing animation for the hero title
 */
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent.trim();
    heroTitle.innerHTML = '<span class="typing-cursor">&nbsp;</span>';
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            // Insert character before cursor
            const cursor = heroTitle.querySelector('.typing-cursor');
            const charSpan = document.createTextNode(text.charAt(index));
            heroTitle.insertBefore(charSpan, cursor);
            index++;
            setTimeout(typeWriter, 80);
        } else {
            // Remove cursor after typing is done (with a small delay)
            setTimeout(() => {
                const cursor = heroTitle.querySelector('.typing-cursor');
                if (cursor) cursor.remove();
            }, 2000);
        }
    };
    
    // Start typing after hero fadeIn animation
    setTimeout(typeWriter, 1200);
}

// Exportar funciones para uso externo si es necesario
window.PortfolioUtils = {
    scrollToNextSection,
    toggleMobileMenu,
    isElementInViewport
};
