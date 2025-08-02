// Resume Builder Main Script
let currentPage = 'home';
let selectedTemplate = 'modern';
let currentFont = 'Inter';
let currentColor = '#FF6B35';
let resumeData = {
    personalInfo: {
        fullName: 'John Doe',
        email: 'john.doe@email.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, NY',
        website: 'www.johndoe.com',
        summary: 'Experienced software developer with 5+ years of expertise in full-stack development.'
    },
    experience: [
        {
            id: 1,
            company: 'Tech Solutions Inc.',
            position: 'Senior Software Developer',
            location: 'New York, NY',
            startDate: '2022',
            endDate: 'Present',
            description: 'Led development of web applications using React and Node.js. Improved system performance by 40%.'
        }
    ],
    education: [
        {
            id: 1,
            institution: 'University of Technology',
            degree: 'Bachelor of Computer Science',
            location: 'New York, NY',
            startDate: '2018',
            endDate: '2022',
            gpa: '3.8'
        }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
    projects: [
        {
            id: 1,
            name: 'E-commerce Platform',
            description: 'Built a full-stack e-commerce solution with React frontend and Express.js backend. Implemented user authentication, payment processing, and real-time inventory management.',
            technologies: ['React', 'Express.js', 'MongoDB', 'Stripe API'],
            link: 'github.com/johndoe/ecommerce',
            startDate: '2023',
            endDate: '2024'
        }
    ]
};

// Utility Functions
function generateId() {
    return Date.now() + Math.random();
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function sanitizeInput(input, maxLength = 1000) {
    if (!input || typeof input !== 'string') return '';
    return input.trim().slice(0, maxLength);
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

// Navigation Functions
function navigateToPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
    }
    
    updateNavigation();
    hideMobileMenu();
}

function updateNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
}

function selectTemplate(templateId) {
    selectedTemplate = templateId;
    
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
        if (card.dataset.template === templateId) {
            card.classList.add('selected');
        }
    });
    
    updateTemplateSelector(templateId);
    navigateToPage('editor');
    updateResumePreview();
}

function updateTemplateSelector(templateId) {
    const templateSelector = document.getElementById('template-change');
    if (templateSelector) {
        templateSelector.value = templateId;
    }
}

function hideMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
        mobileNav.classList.remove('show');
        updateMobileMenuIcon(false);
    }
}

function updateMobileMenuIcon(isOpen) {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (menuIcon && closeIcon) {
        if (isOpen) {
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }
}

// Template Generation
function generateTemplate(templateId = selectedTemplate) {
    console.log('Generating template:', templateId);
    
    let templateHTML = '';
    
    try {
        switch (templateId) {
            case 'classic':
                if (typeof window.ClassicTemplate === 'function') {
                    templateHTML = window.ClassicTemplate(resumeData, currentFont, currentColor);
                } else {
                    console.error('Classic template not loaded');
                    templateHTML = '<div>Error: Classic template not loaded</div>';
                }
                break;
                
            case 'modern':
                if (typeof window.ModernTemplate === 'function') {
                    templateHTML = window.ModernTemplate(resumeData, currentFont, currentColor);
                } else {
                    console.error('Modern template not loaded');
                    templateHTML = '<div>Error: Modern template not loaded</div>';
                }
                break;
                
            case 'minimal':
                if (typeof window.MinimalTemplate === 'function') {
                    templateHTML = window.MinimalTemplate(resumeData, currentFont, currentColor);
                } else {
                    console.error('Minimal template not loaded');
                    templateHTML = '<div>Error: Minimal template not loaded</div>';
                }
                break;
                
            case 'elegant':
                if (typeof window.ElegantTemplate === 'function') {
                    templateHTML = window.ElegantTemplate(resumeData, currentFont, currentColor);
                } else {
                    console.error('Elegant template not loaded');
                    templateHTML = '<div>Error: Elegant template not loaded</div>';
                }
                break;
                
            case 'tech':
                if (typeof window.TechTemplate === 'function') {
                    templateHTML = window.TechTemplate(resumeData, currentFont, currentColor);
                } else {
                    console.error('Tech template not loaded');
                    templateHTML = '<div>Error: Tech template not loaded</div>';
                }
                break;
                
            case 'creative':
                if (typeof window.CreativeTemplate === 'function') {
                    templateHTML = window.CreativeTemplate(resumeData, currentFont, currentColor);
                } else {
                    console.error('Creative template not loaded');
                    templateHTML = '<div>Error: Creative template not loaded</div>';
                }
                break;
                
            default:
                console.warn('Unknown template:', templateId, 'falling back to modern');
                if (typeof window.ModernTemplate === 'function') {
                    templateHTML = window.ModernTemplate(resumeData, currentFont, currentColor);
                } else {
                    templateHTML = '<div>Error: No templates loaded</div>';
                }
        }
    } catch (error) {
        console.error('Error generating template:', error);
        templateHTML = `<div>Error generating template: ${error.message}</div>`;
    }
    
    return templateHTML;
}

function updateResumePreview() {
    const preview = document.getElementById('resume-preview');
    if (preview) {
        const templateHTML = generateTemplate();
        preview.innerHTML = templateHTML;
        console.log('Preview updated with template:', selectedTemplate);
    }
}

// Form Management
function updatePersonalInfo() {
    const fields = ['fullName', 'email', 'phone', 'location', 'website', 'summary'];
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element && resumeData.personalInfo.hasOwnProperty(field)) {
            resumeData.personalInfo[field] = sanitizeInput(element.value);
        }
    });
    updateResumePreview();
}

// Experience Management
function renderExperienceList() {
    const container = document.getElementById('experience-list');
    if (!container) return;
    
    container.innerHTML = resumeData.experience.map((exp, index) => `
        <div class="item-card" data-id="${exp.id}">
            <div class="item-header">
                <span class="item-number">Experience ${index + 1}</span>
                <button class="remove-btn" onclick="removeExperience(${exp.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3,6 5,6 21,6"/>
                        <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"/>
                    </svg>
                </button>
            </div>
            <div class="item-fields">
                <div class="form-group">
                    <label>Company</label>
                    <input type="text" class="form-input" value="${escapeHtml(exp.company)}" onchange="updateExperience(${exp.id}, 'company', this.value)">
                </div>
                <div class="form-group">
                    <label>Position</label>
                    <input type="text" class="form-input" value="${escapeHtml(exp.position)}" onchange="updateExperience(${exp.id}, 'position', this.value)">
                </div>
                <div class="form-group">
                    <label>Location</label>
                    <input type="text" class="form-input" value="${escapeHtml(exp.location)}" onchange="updateExperience(${exp.id}, 'location', this.value)">
                </div>
                <div class="form-group">
                    <label>Date Range</label>
                    <div class="date-range">
                        <input type="text" class="form-input" placeholder="Start Date" value="${escapeHtml(exp.startDate)}" onchange="updateExperience(${exp.id}, 'startDate', this.value)">
                        <input type="text" class="form-input" placeholder="End Date" value="${escapeHtml(exp.endDate)}" onchange="updateExperience(${exp.id}, 'endDate', this.value)">
                    </div>
                </div>
                <div class="form-group full-width">
                    <label>Description</label>
                    <textarea class="form-textarea" rows="3" onchange="updateExperience(${exp.id}, 'description', this.value)">${escapeHtml(exp.description)}</textarea>
                </div>
            </div>
        </div>
    `).join('');
}

function addExperience() {
    resumeData.experience.push({
        id: generateId(),
        company: '', position: '', location: '', startDate: '', endDate: '', description: ''
    });
    renderExperienceList();
    updateResumePreview();
}

function updateExperience(id, field, value) {
    const exp = resumeData.experience.find(e => e.id === id);
    if (exp) {
        exp[field] = sanitizeInput(value);
        updateResumePreview();
    }
}

function removeExperience(id) {
    resumeData.experience = resumeData.experience.filter(e => e.id !== id);
    renderExperienceList();
    updateResumePreview();
}

// Education Management
function renderEducationList() {
    const container = document.getElementById('education-list');
    if (!container) return;
    
    container.innerHTML = resumeData.education.map((edu, index) => `
        <div class="item-card" data-id="${edu.id}">
            <div class="item-header">
                <span class="item-number">Education ${index + 1}</span>
                <button class="remove-btn" onclick="removeEducation(${edu.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3,6 5,6 21,6"/>
                        <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"/>
                    </svg>
                </button>
            </div>
            <div class="item-fields">
                <div class="form-group">
                    <label>Institution</label>
                    <input type="text" class="form-input" value="${escapeHtml(edu.institution)}" onchange="updateEducation(${edu.id}, 'institution', this.value)">
                </div>
                <div class="form-group">
                    <label>Degree</label>
                    <input type="text" class="form-input" value="${escapeHtml(edu.degree)}" onchange="updateEducation(${edu.id}, 'degree', this.value)">
                </div>
                <div class="form-group">
                    <label>Location</label>
                    <input type="text" class="form-input" value="${escapeHtml(edu.location)}" onchange="updateEducation(${edu.id}, 'location', this.value)">
                </div>
                <div class="form-group">
                    <label>GPA (Optional)</label>
                    <input type="text" class="form-input" value="${escapeHtml(edu.gpa || '')}" onchange="updateEducation(${edu.id}, 'gpa', this.value)">
                </div>
                <div class="form-group">
                    <label>Date Range</label>
                    <div class="date-range">
                        <input type="text" class="form-input" placeholder="Start Date" value="${escapeHtml(edu.startDate)}" onchange="updateEducation(${edu.id}, 'startDate', this.value)">
                        <input type="text" class="form-input" placeholder="End Date" value="${escapeHtml(edu.endDate)}" onchange="updateEducation(${edu.id}, 'endDate', this.value)">
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function addEducation() {
    resumeData.education.push({
        id: generateId(),
        institution: '', degree: '', location: '', startDate: '', endDate: '', gpa: ''
    });
    renderEducationList();
    updateResumePreview();
}

function updateEducation(id, field, value) {
    const edu = resumeData.education.find(e => e.id === id);
    if (edu) {
        edu[field] = sanitizeInput(value);
        updateResumePreview();
    }
}

function removeEducation(id) {
    resumeData.education = resumeData.education.filter(e => e.id !== id);
    renderEducationList();
    updateResumePreview();
}

// Skills Management
function renderSkillsList() {
    const container = document.getElementById('skills-list');
    if (!container) return;
    
    container.innerHTML = resumeData.skills.map(skill => `
        <span class="skill-tag">
            ${escapeHtml(skill)}
            <button onclick="removeSkill('${skill.replace(/'/g, "\\'")}')">×</button>
        </span>
    `).join('');
}

function addSkill(skill) {
    const sanitized = sanitizeInput(skill);
    if (sanitized && !resumeData.skills.includes(sanitized)) {
        resumeData.skills.push(sanitized);
        renderSkillsList();
        updateResumePreview();
    }
}

function removeSkill(skill) {
    resumeData.skills = resumeData.skills.filter(s => s !== skill);
    renderSkillsList();
    updateResumePreview();
}

// Projects Management
function renderProjectsList() {
    const container = document.getElementById('projects-list');
    if (!container) return;
    
    container.innerHTML = resumeData.projects.map((project, index) => `
        <div class="item-card" data-id="${project.id}">
            <div class="item-header">
                <span class="item-number">Project ${index + 1}</span>
                <button class="remove-btn" onclick="removeProject(${project.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3,6 5,6 21,6"/>
                        <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"/>
                    </svg>
                </button>
            </div>
            <div class="item-fields">
                <div class="form-group">
                    <label>Project Name</label>
                    <input type="text" class="form-input" value="${escapeHtml(project.name)}" onchange="updateProject(${project.id}, 'name', this.value)">
                </div>
                <div class="form-group">
                    <label>Link (Optional)</label>
                    <input type="url" class="form-input" value="${escapeHtml(project.link || '')}" onchange="updateProject(${project.id}, 'link', this.value)">
                </div>
                <div class="form-group">
                    <label>Date Range</label>
                    <div class="date-range">
                        <input type="text" class="form-input" placeholder="Start Date" value="${escapeHtml(project.startDate || '')}" onchange="updateProject(${project.id}, 'startDate', this.value)">
                        <input type="text" class="form-input" placeholder="End Date" value="${escapeHtml(project.endDate || '')}" onchange="updateProject(${project.id}, 'endDate', this.value)">
                    </div>
                </div>
                <div class="form-group full-width">
                    <label>Description</label>
                    <textarea class="form-textarea" rows="3" onchange="updateProject(${project.id}, 'description', this.value)">${escapeHtml(project.description)}</textarea>
                </div>
                <div class="form-group full-width">
                    <label>Technologies</label>
                    <div class="skills-input-group">
                        <input type="text" class="form-input" placeholder="Add technology and press Enter" onkeypress="if(event.key==='Enter') addProjectTechnology(${project.id}, this.value, this)">
                        <button type="button" class="btn-secondary" onclick="addProjectTechnology(${project.id}, this.previousElementSibling.value, this.previousElementSibling)">Add</button>
                    </div>
                    <div class="skills-tags">
                        ${(project.technologies || []).map(tech => `
                            <span class="skill-tag">
                                ${escapeHtml(tech)}
                                <button onclick="removeProjectTechnology(${project.id}, '${tech.replace(/'/g, "\\'")}')">×</button>
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function addProject() {
    resumeData.projects.push({
        id: generateId(),
        name: '', description: '', technologies: [], link: '', startDate: '', endDate: ''
    });
    renderProjectsList();
    updateResumePreview();
}

function updateProject(id, field, value) {
    const project = resumeData.projects.find(p => p.id === id);
    if (project) {
        project[field] = sanitizeInput(value);
        updateResumePreview();
    }
}

function removeProject(id) {
    resumeData.projects = resumeData.projects.filter(p => p.id !== id);
    renderProjectsList();
    updateResumePreview();
}

function addProjectTechnology(projectId, technology, inputElement) {
    const sanitized = sanitizeInput(technology);
    const project = resumeData.projects.find(p => p.id === projectId);
    
    if (project && sanitized && !project.technologies.includes(sanitized)) {
        if (!project.technologies) project.technologies = [];
        project.technologies.push(sanitized);
        renderProjectsList();
        updateResumePreview();
    }
    
    if (inputElement) {
        inputElement.value = '';
    }
}

function removeProjectTechnology(projectId, technology) {
    const project = resumeData.projects.find(p => p.id === projectId);
    if (project && project.technologies) {
        project.technologies = project.technologies.filter(tech => tech !== technology);
        renderProjectsList();
        updateResumePreview();
    }
}

// Tab Management
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Event Handlers
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToPage(link.dataset.page);
        });
    });
    
    document.querySelectorAll('[data-navigate]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToPage(button.dataset.navigate);
        });
    });
    
    // Template selection
    document.querySelectorAll('.template-card').forEach(card => {
        const selectBtn = card.querySelector('.template-select');
        if (selectBtn) {
            selectBtn.addEventListener('click', () => {
                selectTemplate(card.dataset.template);
            });
        }
    });
    
    // Mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('show');
            updateMobileMenuIcon(isOpen);
        });
    }
    
    // Font and color selectors
    const fontSelector = document.getElementById('font-selector');
    if (fontSelector) {
        fontSelector.addEventListener('change', function() {
            currentFont = this.value;
            document.body.style.fontFamily = `'${this.value}', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`;
            updateResumePreview();
        });
    }
    
    const colorSelector = document.getElementById('color-selector');
    if (colorSelector) {
        colorSelector.addEventListener('change', function() {
            currentColor = this.value;
            updateResumePreview();
        });
    }
    
    const templateSelector = document.getElementById('template-change');
    if (templateSelector) {
        templateSelector.addEventListener('change', function() {
            selectedTemplate = this.value;
            updateResumePreview();
        });
    }
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });
    
    // Personal info form
    ['fullName', 'email', 'phone', 'location', 'website', 'summary'].forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            const debouncedUpdate = debounce(updatePersonalInfo, 300);
            element.addEventListener('input', debouncedUpdate);
        }
    });
    
    // Add buttons
    document.getElementById('add-experience')?.addEventListener('click', addExperience);
    document.getElementById('add-education')?.addEventListener('click', addEducation);
    document.getElementById('add-project')?.addEventListener('click', addProject);
    
    // Skills input
    const skillInput = document.getElementById('skill-input');
    const addSkillBtn = document.getElementById('add-skill');
    
    if (skillInput) {
        skillInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addSkill(skillInput.value);
                skillInput.value = '';
            }
        });
    }
    
    if (addSkillBtn) {
        addSkillBtn.addEventListener('click', () => {
            addSkill(skillInput.value);
            skillInput.value = '';
        });
    }
    
    // Download button
     document.getElementById("download-btn").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const resumeElement = document.getElementById("resume-preview");

  // Temporarily remove max-height and scroll restrictions
  const originalMaxHeight = resumeElement.style.maxHeight;
  const originalOverflowY = resumeElement.style.overflowY;
  resumeElement.style.maxHeight = "none";
  resumeElement.style.overflowY = "visible";

  const canvas = await html2canvas(resumeElement, {
    scale: 2,
    scrollY: -window.scrollY,
  });

  // Restore original styles
  resumeElement.style.maxHeight = originalMaxHeight;
  resumeElement.style.overflowY = originalOverflowY;

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const margin = 10;
  const pdfWidth = pageWidth - margin * 2;
  const pdfHeight = pageHeight - margin * 2;

  // Calculate image dimensions maintaining aspect ratio, but fit inside page width and height
  let imgWidth = pdfWidth;
  let imgHeight = (canvas.height * imgWidth) / canvas.width;

  if (imgHeight > pdfHeight) {
    imgHeight = pdfHeight;
    imgWidth = (canvas.width * imgHeight) / canvas.height;
  }

  const x = (pageWidth - imgWidth) / 2;
  const y = (pageHeight - imgHeight) / 2;

  pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
  pdf.save("resume.pdf");
});
}

// Initialize Application
function initializeApp() {
    console.log('Initializing Resume Builder...');
    
    // Check if all templates are loaded
    const templateChecks = [
        { name: 'Classic', func: window.ClassicTemplate },
        { name: 'Modern', func: window.ModernTemplate },
        { name: 'Minimal', func: window.MinimalTemplate },
        { name: 'Elegant', func: window.ElegantTemplate },
        { name: 'Tech', func: window.TechTemplate },
        { name: 'Creative', func: window.CreativeTemplate }
    ];
    
    templateChecks.forEach(template => {
        if (typeof template.func === 'function') {
            console.log(`✅ ${template.name} template loaded successfully`);
        } else {
            console.error(`❌ ${template.name} template failed to load`);
        }
    });
    
    setupEventListeners();
    renderExperienceList();
    renderEducationList();
    renderSkillsList();
    renderProjectsList();
    updateResumePreview();
    
    console.log('Resume Builder initialized successfully!');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Global functions for onclick handlers
window.removeExperience = removeExperience;
window.updateExperience = updateExperience;
window.removeEducation = removeEducation;
window.updateEducation = updateEducation;
window.removeSkill = removeSkill;
window.removeProject = removeProject;
window.updateProject = updateProject;
window.addProjectTechnology = addProjectTechnology;
window.removeProjectTechnology = removeProjectTechnology;
window.switchTab = switchTab;
