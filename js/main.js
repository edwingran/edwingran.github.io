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
 * Agregar efecto de partículas de fondo (opcional)
 * Esta función puede ser activada si se desea un efecto visual adicional
 */
function addParticleEffect() {
    // Implementación opcional de efecto de partículas
    // Puede ser agregado en el futuro para mayor impacto visual
}

/**
 * Modo oscuro/claro toggle (opcional)
 * Aunque el diseño ya es oscuro, esta función permite futuras personalizaciones
 */
function setupThemeToggle() {
    // Implementación opcional de toggle de tema
    // Puede ser útil para futuras actualizaciones
}

/**
 * Animación de escritura para el hero title (opcional)
 */
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;
        
        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
}

// Exportar funciones para uso externo si es necesario
window.PortfolioUtils = {
    scrollToNextSection,
    toggleMobileMenu,
    isElementInViewport
};
