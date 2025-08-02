// Classic Resume Template Generator
function generateClassicTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    return `
        <div style="background: white; color: black; padding: 2rem; font-family: 'Times New Roman', serif; min-height: 100%; line-height: 1.4;">
            <!-- Header Section -->
            <div style="text-align: center; border-bottom: 2px solid black; padding-bottom: 1rem; margin-bottom: 1.5rem;">
                <h1 style="font-size: 2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0;">${escapeHtml(personalInfo.fullName)}</h1>
                <div style="font-size: 0.875rem; margin: 0;">
                    ${escapeHtml(personalInfo.email)} • ${escapeHtml(personalInfo.phone)} • ${escapeHtml(personalInfo.location)}
                    ${personalInfo.website ? ` • ${escapeHtml(personalInfo.website)}` : ''}
                </div>
            </div>

            <!-- Objective/Summary -->
            ${personalInfo.summary ? `
            <div style="margin-bottom: 1.5rem;">
                <h2 style="font-size: 1.125rem; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid black; padding-bottom: 0.25rem; margin: 0 0 0.75rem 0;">OBJECTIVE</h2>
                <p style="font-size: 0.875rem; line-height: 1.6; margin: 0;">${escapeHtml(personalInfo.summary)}</p>
            </div>
            ` : ''}

            <!-- Experience Section -->
            ${experience.length > 0 ? `
            <div style="margin-bottom: 1.5rem;">
                <h2 style="font-size: 1.125rem; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid black; padding-bottom: 0.25rem; margin: 0 0 0.75rem 0;">EXPERIENCE</h2>
                ${experience.map(exp => `
                    <div style="margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem; flex-wrap: wrap;">
                            <div style="flex: 1; min-width: 0;">
                                <h3 style="font-weight: bold; font-size: 1rem; margin: 0; line-height: 1.2;">${escapeHtml(exp.position)}</h3>
                                <p style="font-weight: 600; font-size: 0.875rem; margin: 0; line-height: 1.2;">${escapeHtml(exp.company)}</p>
                            </div>
                            <div style="text-align: right; font-size: 0.875rem; white-space: nowrap; margin-left: 1rem;">
                                <p style="margin: 0; line-height: 1.2;">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</p>
                                <p style="margin: 0; line-height: 1.2;">${escapeHtml(exp.location)}</p>
                            </div>
                        </div>
                        ${exp.description ? `<p style="font-size: 0.875rem; margin: 0.5rem 0 0 0; line-height: 1.4;">${escapeHtml(exp.description)}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Education Section -->
            ${education.length > 0 ? `
            <div style="margin-bottom: 1.5rem;">
                <h2 style="font-size: 1.125rem; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid black; padding-bottom: 0.25rem; margin: 0 0 0.75rem 0;">EDUCATION</h2>
                ${education.map(edu => `
                    <div style="margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem; flex-wrap: wrap;">
                            <div style="flex: 1; min-width: 0;">
                                <h3 style="font-weight: bold; font-size: 1rem; margin: 0; line-height: 1.2;">${escapeHtml(edu.degree)}</h3>
                                <p style="font-weight: 600; font-size: 0.875rem; margin: 0; line-height: 1.2;">${escapeHtml(edu.institution)}</p>
                            </div>
                            <div style="text-align: right; font-size: 0.875rem; white-space: nowrap; margin-left: 1rem;">
                                <p style="margin: 0; line-height: 1.2;">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</p>
                                <p style="margin: 0; line-height: 1.2;">${escapeHtml(edu.location)}</p>
                            </div>
                        </div>
                        ${edu.gpa ? `<p style="font-size: 0.875rem; margin: 0.25rem 0 0 0;">GPA: ${escapeHtml(edu.gpa)}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Projects Section -->
            ${projects.length > 0 ? `
            <div style="margin-bottom: 1.5rem;">
                <h2 style="font-size: 1.125rem; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid black; padding-bottom: 0.25rem; margin: 0 0 0.75rem 0;">PROJECTS</h2>
                ${projects.map(project => `
                    <div style="margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem; flex-wrap: wrap;">
                            <h3 style="font-weight: bold; font-size: 1rem; margin: 0; line-height: 1.2; flex: 1; min-width: 0;">${escapeHtml(project.name)}</h3>
                            ${project.startDate ? `<span style="font-size: 0.875rem; white-space: nowrap; margin-left: 1rem;">${escapeHtml(project.startDate)} - ${escapeHtml(project.endDate || 'Present')}</span>` : ''}
                        </div>
                        ${project.description ? `<p style="font-size: 0.875rem; margin: 0.25rem 0; line-height: 1.4;">${escapeHtml(project.description)}</p>` : ''}
                        ${project.technologies && project.technologies.length > 0 ? `<p style="font-size: 0.875rem; margin: 0.25rem 0;"><strong>Technologies:</strong> ${project.technologies.map(tech => escapeHtml(tech)).join(', ')}</p>` : ''}
                        ${project.link ? `<p style="font-size: 0.875rem; margin: 0.25rem 0;"><strong>Link:</strong> ${escapeHtml(project.link)}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Skills Section -->
            ${skills.length > 0 ? `
            <div style="margin-bottom: 1.5rem;">
                <h2 style="font-size: 1.125rem; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid black; padding-bottom: 0.25rem; margin: 0 0 0.75rem 0;">SKILLS</h2>
                <p style="font-size: 0.875rem; margin: 0; line-height: 1.4;">${skills.map(skill => escapeHtml(skill)).join(', ')}</p>
            </div>
            ` : ''}
        </div>
    `;
}

// Export the template generator
if (typeof window !== 'undefined') {
    window.ClassicTemplate = generateClassicTemplate;
}