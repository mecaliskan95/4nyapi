// Dil değiştirme fonksiyonu
const translations = {
    tr: {
        title: "Sitemiz Bakımda",
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
function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

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
