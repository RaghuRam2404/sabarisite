// ===================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// SCROLL ANIMATIONS - DISABLED FOR SMOOTH MOBILE EXPERIENCE
// ===================================
// Section and element fade-in animations removed to prevent flickering on mobile devices

// ===================================
// PARALLAX EFFECT FOR HERO SECTION
// ===================================
// Removed - parallax fade effect disabled for better UX

// ===================================
// ANIMATE STATISTICS COUNTER
// ===================================
const animateCounter = (element, target, duration = 1000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.dataset.suffix || '');
        }
    };
    
    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const numberMatch = text.match(/\d+/);
                
                if (numberMatch) {
                    const number = parseInt(numberMatch[0]);
                    const suffix = text.replace(number.toString(), '');
                    stat.dataset.suffix = suffix;
                    stat.textContent = '0' + suffix;
                    
                    setTimeout(() => {
                        animateCounter(stat, number);
                    }, 25);
                }
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// DYNAMIC NAVBAR BACKGROUND ON SCROLL
// ===================================
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        if (scrollPosition > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    }
});

// ===================================
// FLOATING CTA BUTTON HIDE/SHOW
// ===================================
const floatingCta = document.querySelector('.floating-cta');
let lastScroll = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (!floatingCta) return;
    
    // Hide on hero section (first 50% of viewport)
    if (currentScroll < window.innerHeight * 0.5) {
        floatingCta.style.opacity = '0';
        floatingCta.style.visibility = 'hidden';
        floatingCta.style.transform = 'translateY(150px)';
    } else {
        floatingCta.style.visibility = 'visible';
        
        // Clear previous timeout
        clearTimeout(scrollTimeout);
        
        // Hide when scrolling down, show when scrolling up
        if (currentScroll > lastScroll) {
            // Scrolling down
            floatingCta.style.opacity = '0';
            floatingCta.style.transform = 'translateY(150px)';
        } else {
            // Scrolling up
            floatingCta.style.opacity = '1';
            floatingCta.style.transform = 'translateY(0)';
        }
        
        // Show button after scrolling stops
        scrollTimeout = setTimeout(() => {
            floatingCta.style.opacity = '1';
            floatingCta.style.transform = 'translateY(0)';
        }, 150);
    }
    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

// ===================================
// TESTIMONIAL CARD STAGGER ANIMATION
// ===================================
const testimonialCards = document.querySelectorAll('.testimonial-card');

const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
            
            testimonialObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    testimonialObserver.observe(card);
});

// ===================================
// GALLERY HOVER EFFECT ENHANCEMENT
// ===================================
const galleryCards = document.querySelectorAll('.gallery-card');

galleryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// SERVICE CARDS TILT EFFECT - DISABLED
// ===================================
// const serviceCards = document.querySelectorAll('.service-card:not(.featured)');

// serviceCards.forEach(card => {
//     card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         
//         const rotateX = (y - centerY) / 20;
//         const rotateY = (centerX - x) / 20;
//         
//         card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
//     });
//     
//     card.addEventListener('mouseleave', () => {
//         card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
//     });
// });

// ===================================
// EXPERTISE CARDS SEQUENTIAL REVEAL
// ===================================
const expertiseCards = document.querySelectorAll('.expertise-card');

const expertiseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = Array.from(expertiseCards);
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            });
            expertiseObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

if (expertiseCards.length > 0) {
    expertiseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'all 0.5s ease';
    });
    expertiseObserver.observe(expertiseCards[0]);
}

// ===================================
// CTA SECTION PULSE ANIMATION
// ===================================
const ctaCard = document.querySelector('.cta-card');

const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-pulse');
        }
    });
}, { threshold: 0.5 });

if (ctaCard) {
    ctaObserver.observe(ctaCard);
}

// ===================================
// PREVENT SCROLL JANK ON PAGE LOAD
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger hero animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

// ===================================
// RESPONSIVE MENU TOGGLE (if needed)
// ===================================
const mobileMenuToggle = () => {
    const navToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.navbar-collapse');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('show');
            }
        });
    }
};

mobileMenuToggle();

// ===================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ===================================
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll-heavy operations
const debouncedScroll = debounce(() => {
    // Additional scroll-based operations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ===================================
document.addEventListener('keydown', (e) => {
    // Allow escape key to close any modals or overlays
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            modal.classList.remove('show');
        });
    }
});

// ===================================
// LAZY LOADING IMAGES (when real images are added)
// ===================================
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

// ===================================
// TRAINER POSE CARDS STAGGER ANIMATION
// ===================================
const poseCards = document.querySelectorAll('.trainer-pose-card');

const poseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = Array.from(poseCards);
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
            });
            poseObserver.disconnect();
        }
    });
}, { threshold: 0.2 });

if (poseCards.length > 0) {
    poseCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'all 0.5s ease';
    });
    poseObserver.observe(poseCards[0]);
}

// ===================================
// TRAINER HERO IMAGE PARALLAX
// ===================================
// Removed - parallax effect disabled for better focus

// ===================================
// CONSOLE MESSAGE (Optional - can be removed)
// ===================================
console.log('%c🏋️ Elite Bodybuilding Coach', 'font-size: 20px; font-weight: bold; color: #D4A237;');
console.log('%cTransform Your Body. Unleash Your Power.', 'font-size: 14px; color: #F4D158;');
