// Minimal Resume Template Generator
function generateMinimalTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    return `
        <div style="background: #f9fafb; color: #374151; padding: 2rem; font-family: '${currentFont}', sans-serif; min-height: 100%; text-align: center; line-height: 1.6;">
            <!-- Header -->
            <div style="margin-bottom: 2rem;">
                <h1 style="font-size: 2.5rem; font-weight: 300; letter-spacing: 0.1em; margin: 0 0 0.5rem 0;">${escapeHtml(personalInfo.fullName)}</h1>
                <div style="font-size: 0.875rem; color: #6b7280; margin-bottom: 1rem;">
                    ${escapeHtml(personalInfo.email)} • ${escapeHtml(personalInfo.phone)} • ${escapeHtml(personalInfo.location)}
                    ${personalInfo.website ? ` • ${escapeHtml(personalInfo.website)}` : ''}
                </div>
                ${personalInfo.summary ? `<p style="font-size: 0.875rem; color: #4b5563; max-width: 600px; margin: 0 auto; font-style: italic; line-height: 1.5;">${escapeHtml(personalInfo.summary)}</p>` : ''}
            </div>

            <!-- Experience -->
            ${experience.length > 0 ? `
            <div style="margin-bottom: 2rem;">
                <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.15em; color: #9ca3af; margin: 0 0 1rem 0;">Experience</h2>
                ${experience.map(exp => `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="font-weight: 300; font-size: 1.125rem; margin: 0 0 0.25rem 0;">${escapeHtml(exp.position)}</h3>
                        <p style="color: #6b7280; font-size: 0.875rem; margin: 0 0 0.25rem 0;">${escapeHtml(exp.company)} • ${escapeHtml(exp.location)}</p>
                        <p style="color: #9ca3af; font-size: 0.75rem; margin: 0 0 0.5rem 0;">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</p>
                        ${exp.description ? `<p style="font-size: 0.875rem; color: #4b5563; max-width: 600px; margin: 0 auto; line-height: 1.5;">${escapeHtml(exp.description)}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Education -->
            ${education.length > 0 ? `
            <div style="margin-bottom: 2rem;">
                <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.15em; color: #9ca3af; margin: 0 0 1rem 0;">Education</h2>
                ${education.map(edu => `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="font-weight: 300; font-size: 1.125rem; margin: 0 0 0.25rem 0;">${escapeHtml(edu.degree)}</h3>
                        <p style="color: #6b7280; font-size: 0.875rem; margin: 0 0 0.25rem 0;">${escapeHtml(edu.institution)} • ${escapeHtml(edu.location)}</p>
                        <p style="color: #9ca3af; font-size: 0.75rem; margin: 0;">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</p>
                        ${edu.gpa ? `<p style="color: #9ca3af; font-size: 0.75rem; margin: 0;">GPA: ${escapeHtml(edu.gpa)}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Projects -->
            ${projects.length > 0 ? `
            <div style="margin-bottom: 2rem;">
                <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.15em; color: #9ca3af; margin: 0 0 1rem 0;">Projects</h2>
                ${projects.map(project => `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="font-weight: 300; font-size: 1.125rem; margin: 0 0 0.25rem 0;">${escapeHtml(project.name)}</h3>
                        ${project.startDate ? `<p style="color: #9ca3af; font-size: 0.75rem; margin: 0 0 0.5rem 0;">${escapeHtml(project.startDate)} - ${escapeHtml(project.endDate || 'Present')}</p>` : ''}
                        ${project.description ? `<p style="font-size: 0.875rem; color: #4b5563; max-width: 600px; margin: 0 auto 0.5rem auto; line-height: 1.5;">${escapeHtml(project.description)}</p>` : ''}
                        ${project.technologies && project.technologies.length > 0 ? `<p style="font-size: 0.75rem; color: #9ca3af; margin: 0;">Technologies: ${project.technologies.map(tech => escapeHtml(tech)).join(' • ')}</p>` : ''}
                        ${project.link ? `<p style="font-size: 0.75rem; color: #6b7280; margin: 0.25rem 0 0 0;">Link: ${escapeHtml(project.link)}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Skills -->
            ${skills.length > 0 ? `
            <div>
                <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.15em; color: #9ca3af; margin: 0 0 1rem 0;">Skills</h2>
                <p style="font-size: 0.875rem; color: #374151; margin: 0;">${skills.map(skill => escapeHtml(skill)).join(' • ')}</p>
            </div>
            ` : ''}
        </div>
    `;
}

// Export the template generator
if (typeof window !== 'undefined') {
    window.MinimalTemplate = generateMinimalTemplate;
}