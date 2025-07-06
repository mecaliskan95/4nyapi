// Translations
const translations = {
    tr: {
        "nav-about": "Hakkımızda",
        "nav-services": "Hizmetlerimiz",
        "nav-projects": "Projelerimiz",
        "nav-contact": "İletişim",
        "hero-title": "Güvenilir ve Profesyonel<br>İnşaat Çözümleri",
        "hero-subtitle": "40 yılı aşkın tecrübemizle, hayallerinizdeki projeleri gerçeğe dönüştürüyoruz.",
        "hero-cta": "Bizimle İletişime Geçin",
        "cookie-text": "Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanmaktadır.",
        "cookie-accept": "Kabul Et",
        "cookie-decline": "Reddet"
    },
    en: {
        "nav-about": "About Us",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-title": "Reliable and Professional<br>Construction Solutions",
        "hero-subtitle": "With over 40 years of experience, we turn your dream projects into reality.",
        "hero-cta": "Contact Us",
        "cookie-text": "This website uses cookies to provide you with the best experience.",
        "cookie-accept": "Accept",
        "cookie-decline": "Decline"
    }
};

// Language switching
function changeLanguage(lang) {
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update content
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'META') {
                element.setAttribute('content', translations[lang][key]);
            } else if (key.includes('title')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Header scroll effect
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Mobile menu
function toggleMobileMenu() {
    const nav = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Cookie consent
function initializeCookieConsent() {
    const cookieConsent = document.querySelector('.cookie-consent');
    const consentSaved = localStorage.getItem('cookieConsent');
    
    if (!consentSaved) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 2000);
    }
}

function handleCookieConsent(accepted) {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    document.querySelector('.cookie-consent').classList.remove('show');
}

// Loading animation
function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading animation immediately
    hideLoading();
    
    // Initialize language
    const storedLang = localStorage.getItem('preferredLanguage') || 'tr';
    changeLanguage(storedLang);
    
    // Initialize cookie consent
    initializeCookieConsent();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu event listener
    document.querySelector('.mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    
    // Cookie consent buttons
    document.querySelector('.cookie-btn.accept').addEventListener('click', () => handleCookieConsent(true));
    document.querySelector('.cookie-btn.decline').addEventListener('click', () => handleCookieConsent(false));
    
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });
});
