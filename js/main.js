// Dil değiştirme fonksiyonu
const translations = {
    tr: {
        title: "Sitemiz Bakımda",
        companyName: "DÖRTEN YAPI SANAYİ<br>TURİZM TİCARET LİMİTED ŞİRKETİ",
        message: "Değerli müşterilerimiz,",
        status: "Web sitemiz şu anda bakım çalışmaları sebebiyle geçici olarak hizmet verememektedir. Size daha iyi hizmet verebilmek için çalışıyoruz.",
        thanks: "Anlayışınız için teşekkür ederiz.",
        estimated: "Tahmini Tamamlanma Süresi:",
        soon: "En kısa sürede hizmetinizdeyiz",
        contact: "İletişim Bilgilerimiz",
        cookieText: "Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanmaktadır.",
        accept: "Kabul Et",
        decline: "Reddet"
    },
    en: {
        title: "Site Under Maintenance",
        companyName: "DORTEN CONSTRUCTION INDUSTRY<br>TOURISM TRADE LIMITED COMPANY",
        message: "Dear customers,",
        status: "Our website is temporarily unavailable due to maintenance work. We are working to provide you with better service.",
        thanks: "Thank you for your understanding.",
        estimated: "Estimated Completion Time:",
        soon: "We will be at your service as soon as possible",
        contact: "Contact Information",
        cookieText: "This website uses cookies to provide you with the best experience.",
        accept: "Accept",
        decline: "Decline"
    }
};

// Dil değiştirme işlevi
function changeLanguage(lang) {
    // Update active button state
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update content
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'companyName') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update Google Maps language
    const googleMap = document.getElementById('google-map');
    if (googleMap) {
        const currentSrc = googleMap.src;
        const langCode = googleMap.getAttribute(`data-lang-${lang}`);
        if (langCode) {
            const newSrc = currentSrc.replace(/!2s[a-z]{2}!2s[a-z]{2}/g, langCode);
            googleMap.src = newSrc;
        }
    }

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language based on stored preference or default to Turkish
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLanguage') || 'tr';
    changeLanguage(storedLang);
});

// Çerez yönetimi
function initializeCookieConsent() {
    const cookieConsent = document.querySelector('.cookie-consent');
    const consentSaved = localStorage.getItem('cookieConsent');
    
    if (!consentSaved) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 2000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.querySelector('.cookie-consent').classList.remove('show');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.querySelector('.cookie-consent').classList.remove('show');
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Loading spinner'ı gizle
    document.querySelector('.loading').classList.add('hidden');
    
    // Çerez bildirimi kontrolü
    initializeCookieConsent();
});
