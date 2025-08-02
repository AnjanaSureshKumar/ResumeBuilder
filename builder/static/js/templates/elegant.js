// Elegant Resume Template Generator
function generateElegantTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    return `
        <div style="display: grid; grid-template-columns: 1fr 2fr; min-height: 100%; font-family: '${currentFont}', serif;">
            <!-- Sidebar -->
            <div style="background: linear-gradient(to bottom, #7c3aed, #6d28d9); color: white; padding: 2rem;">
                <div style="margin-bottom: 2rem;">
                    <h1 style="font-family: serif; font-size: 1.5rem; margin: 0 0 1rem 0;">${escapeHtml(personalInfo.fullName)}</h1>
                    <div style="font-size: 0.875rem; opacity: 0.9; line-height: 1.6;">
                        <div style="margin-bottom: 0.5rem;">📧 ${escapeHtml(personalInfo.email)}</div>
                        <div style="margin-bottom: 0.5rem;">📞 ${escapeHtml(personalInfo.phone)}</div>
                        <div style="margin-bottom: 0.5rem;">📍 ${escapeHtml(personalInfo.location)}</div>
                        ${personalInfo.website ? `<div>🌐 ${escapeHtml(personalInfo.website)}</div>` : ''}
                    </div>
                </div>

                <!-- Skills in Sidebar -->
                ${skills.length > 0 ? `
                <div style="margin-bottom: 2rem;">
                    <h2 style="font-family: serif; font-size: 1.125rem; border-bottom: 1px solid rgba(255,255,255,0.3); margin: 0 0 1rem 0; padding-bottom: 0.5rem;">Skills</h2>
                    <div style="line-height: 1.8;">
                        ${skills.map(skill => `
                            <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                                <div style="width: 4px; height: 4px; background: rgba(255,255,255,0.7); border-radius: 50%; margin-right: 0.75rem; flex-shrink: 0;"></div>
                                <span style="font-size: 0.875rem;">${escapeHtml(skill)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- Education in Sidebar -->
                ${education.length > 0 ? `
                <div>
                    <h2 style="font-family: serif; font-size: 1.125rem; border-bottom: 1px solid rgba(255,255,255,0.3); margin: 0 0 1rem 0; padding-bottom: 0.5rem;">Education</h2>
                    ${education.map(edu => `
                        <div style="margin-bottom: 1rem; line-height: 1.6;">
                            <div style="font-family: serif; color: #e9d5ff; font-size: 0.875rem; font-weight: 600;">${escapeHtml(edu.degree)}</div>
                            <div style="color: rgba(255,255,255,0.9); font-size: 0.75rem;">${escapeHtml(edu.institution)}</div>
                            <div style="color: rgba(255,255,255,0.7); font-size: 0.75rem;">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</div>
                            ${edu.gpa ? `<div style="color: rgba(255,255,255,0.7); font-size: 0.75rem;">GPA: ${escapeHtml(edu.gpa)}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>

            <!-- Main Content -->
            <div style="padding: 2rem; background: white;">
                <!-- Summary/Profile -->
                ${personalInfo.summary ? `
                <div style="margin-bottom: 2rem;">
                    <h2 style="font-family: serif; color: #7c3aed; font-size: 1.25rem; border-bottom: 1px solid #e5e7eb; margin: 0 0 1rem 0; padding-bottom: 0.5rem;">Profile</h2>
                    <p style="font-size: 0.875rem; line-height: 1.6; color: #374151; margin: 0;">${escapeHtml(personalInfo.summary)}</p>
                </div>
                ` : ''}

                <!-- Experience -->
                ${experience.length > 0 ? `
                <div style="margin-bottom: 2rem;">
                    <h2 style="font-family: serif; color: #7c3aed; font-size: 1.25rem; border-bottom: 1px solid #e5e7eb; margin: 0 0 1rem 0; padding-bottom: 0.5rem;">Experience</h2>
                    ${experience.map(exp => `
                        <div style="position: relative; margin-bottom: 1.5rem;">
                            <div style="position: absolute; left: 0; top: 0.25rem; width: 8px; height: 8px; background: #d8b4fe; border-radius: 50%;"></div>
                            <div style="margin-left: 1.5rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; flex-wrap: wrap;">
                                    <h3 style="font-family: serif; color: #6d28d9; font-size: 1rem; margin: 0; flex: 1; min-width: 0;">${escapeHtml(exp.position)}</h3>
                                    <span style="font-size: 0.75rem; color: #9ca3af; white-space: nowrap; margin-left: 1rem;">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</span>
                                </div>
                                <p style="color: #7c3aed; font-size: 0.875rem; margin: 0 0 0.5rem 0;">${escapeHtml(exp.company)} • ${escapeHtml(exp.location)}</p>
                                ${exp.description ? `<p style="font-size: 0.875rem; color: #374151; line-height: 1.6; margin: 0;">${escapeHtml(exp.description)}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}

                <!-- Projects -->
                ${projects.length > 0 ? `
                <div>
                    <h2 style="font-family: serif; color: #7c3aed; font-size: 1.25rem; border-bottom: 1px solid #e5e7eb; margin: 0 0 1rem 0; padding-bottom: 0.5rem;">Projects</h2>
                    ${projects.map(project => `
                        <div style="position: relative; margin-bottom: 1.5rem;">
                            <div style="position: absolute; left: 0; top: 0.25rem; width: 8px; height: 8px; background: #d8b4fe; border-radius: 50%;"></div>
                            <div style="margin-left: 1.5rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; flex-wrap: wrap;">
                                    <h3 style="font-family: serif; color: #6d28d9; font-size: 1rem; margin: 0; flex: 1; min-width: 0;">${escapeHtml(project.name)}</h3>
                                    ${project.startDate ? `<span style="font-size: 0.75rem; color: #9ca3af; white-space: nowrap; margin-left: 1rem;">${escapeHtml(project.startDate)} - ${escapeHtml(project.endDate || 'Present')}</span>` : ''}
                                </div>
                                ${project.description ? `<p style="font-size: 0.875rem; color: #374151; line-height: 1.6; margin: 0 0 0.5rem 0;">${escapeHtml(project.description)}</p>` : ''}
                                ${project.technologies && project.technologies.length > 0 ? `<p style="font-size: 0.75rem; color: #7c3aed; margin: 0 0 0.25rem 0;"><strong>Technologies:</strong> ${project.technologies.map(tech => escapeHtml(tech)).join(', ')}</p>` : ''}
                                ${project.link ? `<p style="font-size: 0.75rem; color: #7c3aed; margin: 0;"><strong>Link:</strong> ${escapeHtml(project.link)}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Export the template generator
if (typeof window !== 'undefined') {
    window.ElegantTemplate = generateElegantTemplate;
}