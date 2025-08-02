// Resume Builder Utilities
function generateId() {
    return Date.now() + Math.random();
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(date) {
    if (!date) return '';
    return String(date).trim();
}

function safeGet(obj, path, defaultValue = '') {
    try {
        return path.split('.').reduce((current, key) => current && current[key], obj) || defaultValue;
    } catch (e) {
        return defaultValue;
    }
}

function createSVG(iconName, size = 16) {
    const icons = {
        home: `<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>`,
        fileText: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>`,
        download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
        plus: `<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`,
        trash: `<polyline points="3,6 5,6 21,6"/><path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"/>`,
        star: `<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>`,
        zap: `<polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>`,
        users: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 21-3-3m0 0-3-3m3 3 3-3m-3 3-3 3"/>`,
        clock: `<circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>`,
        menu: `<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>`,
        x: `<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`
    };
    
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons[iconName] || ''}</svg>`;
}

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

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (typeof obj === 'object') {
        const clonedObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\D/g, ''));
}

function sanitizeInput(input, maxLength = 1000) {
    if (!input || typeof input !== 'string') return '';
    return input.trim().slice(0, maxLength);
}

function formatSkills(skills) {
    if (!Array.isArray(skills)) return [];
    return skills.filter(skill => skill && skill.trim()).map(skill => skill.trim());
}

function formatTechnologies(technologies) {
    if (!Array.isArray(technologies)) return [];
    return technologies.filter(tech => tech && tech.trim()).map(tech => tech.trim());
}

function createGradient(color1, color2, direction = 'to right') {
    return `linear-gradient(${direction}, ${color1}, ${color2})`;
}

function lightenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function darkenColor(color, percent) {
    return lightenColor(color, -percent);
}

function addAlphaToColor(color, alpha) {
    return color + Math.round(alpha * 255).toString(16).padStart(2, '0');
}

// Export functions for use in other files
window.ResumeUtils = {
    generateId,
    escapeHtml,
    formatDate,
    safeGet,
    createSVG,
    debounce,
    deepClone,
    validateEmail,
    validatePhone,
    sanitizeInput,
    formatSkills,
    formatTechnologies,
    createGradient,
    lightenColor,
    darkenColor,
    addAlphaToColor
};