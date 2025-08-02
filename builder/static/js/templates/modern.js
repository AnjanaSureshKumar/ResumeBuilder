// Modern Resume Template Generator
function generateModernTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    return `
        <div style="background: white; color: #1f2937; min-height: 100%; font-family: '${currentFont}', sans-serif;">
            <!-- Header Section -->
            <div style="background: linear-gradient(to right, ${currentColor}, #1d4ed8); color: white; padding: 2rem;">
                <h1 style="font-size: 2.5rem; font-weight: 300; margin: 0 0 0.5rem 0; line-height: 1.2;">${escapeHtml(personalInfo.fullName)}</h1>
                <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.875rem; opacity: 0.9; margin-bottom: 1rem;">
                    <span>📧 ${escapeHtml(personalInfo.email)}</span>
                    <span>📞 ${escapeHtml(personalInfo.phone)}</span>
                    <span>📍 ${escapeHtml(personalInfo.location)}</span>
                    ${personalInfo.website ? `<span>🌐 ${escapeHtml(personalInfo.website)}</span>` : ''}
                </div>
                ${personalInfo.summary ? `<p style="font-size: 0.875rem; line-height: 1.6; opacity: 0.95; margin: 0;">${escapeHtml(personalInfo.summary)}</p>` : ''}
            </div>

            <!-- Main Content -->
            <div style="padding: 2rem;">
                <!-- Experience Section -->
                ${experience.length > 0 ? `
                <section style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 300; color: ${currentColor}; border-bottom: 2px solid ${currentColor}; padding-bottom: 0.5rem; margin: 0 0 1.5rem 0;">Professional Experience</h2>
                    ${experience.map(exp => `
                        <div style="margin-bottom: 1.5rem; padding-left: 1rem; border-left: 4px solid ${currentColor}40;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap;">
                                <div style="flex: 1; min-width: 0;">
                                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; line-height: 1.2;">${escapeHtml(exp.position)}</h3>
                                    <p style="color: ${currentColor}; font-weight: 500; margin: 0; line-height: 1.2;">${escapeHtml(exp.company)}</p>
                                </div>
                                <div style="text-align: right; font-size: 0.875rem; color: #6b7280; white-space: nowrap; margin-left: 1rem;">
                                    <p style="margin: 0; line-height: 1.2;">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</p>
                                    <p style="margin: 0; line-height: 1.2;">${escapeHtml(exp.location)}</p>
                                </div>
                            </div>
                            ${exp.description ? `<p style="font-size: 0.875rem; color: #374151; margin: 0; line-height: 1.5;">${escapeHtml(exp.description)}</p>` : ''}
                        </div>
                    `).join('')}
                </section>
                ` : ''}

                <!-- Education Section -->
                ${education.length > 0 ? `
                <section style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 300; color: ${currentColor}; border-bottom: 2px solid ${currentColor}; padding-bottom: 0.5rem; margin: 0 0 1.5rem 0;">Education</h2>
                    ${education.map(edu => `
                        <div style="margin-bottom: 1.5rem; padding-left: 1rem; border-left: 4px solid ${currentColor}40;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap;">
                                <div style="flex: 1; min-width: 0;">
                                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; line-height: 1.2;">${escapeHtml(edu.degree)}</h3>
                                    <p style="color: ${currentColor}; font-weight: 500; margin: 0; line-height: 1.2;">${escapeHtml(edu.institution)}</p>
                                </div>
                                <div style="text-align: right; font-size: 0.875rem; color: #6b7280; white-space: nowrap; margin-left: 1rem;">
                                    <p style="margin: 0; line-height: 1.2;">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</p>
                                    <p style="margin: 0; line-height: 1.2;">${escapeHtml(edu.location)}</p>
                                </div>
                            </div>
                            ${edu.gpa ? `<p style="font-size: 0.875rem; color: #374151; margin: 0;">GPA: ${escapeHtml(edu.gpa)}</p>` : ''}
                        </div>
                    `).join('')}
                </section>
                ` : ''}

                <!-- Projects Section -->
                ${projects.length > 0 ? `
                <section style="margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 300; color: ${currentColor}; border-bottom: 2px solid ${currentColor}; padding-bottom: 0.5rem; margin: 0 0 1.5rem 0;">Projects</h2>
                    ${projects.map(project => `
                        <div style="margin-bottom: 1.5rem; padding-left: 1rem; border-left: 4px solid ${currentColor}40;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap;">
                                <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; line-height: 1.2; flex: 1; min-width: 0;">${escapeHtml(project.name)}</h3>
                                ${project.startDate ? `<span style="font-size: 0.875rem; color: #6b7280; white-space: nowrap; margin-left: 1rem;">${escapeHtml(project.startDate)} - ${escapeHtml(project.endDate || 'Present')}</span>` : ''}
                            </div>
                            ${project.description ? `<p style="font-size: 0.875rem; color: #374151; margin: 0.25rem 0; line-height: 1.5;">${escapeHtml(project.description)}</p>` : ''}
                            ${project.technologies && project.technologies.length > 0 ? `
                                <div style="margin: 0.5rem 0;">
                                    ${project.technologies.map(tech => `<span style="background: ${currentColor}20; color: ${currentColor}; padding: 0.125rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; margin-right: 0.25rem; display: inline-block; margin-bottom: 0.25rem;">${escapeHtml(tech)}</span>`).join('')}
                                </div>
                            ` : ''}
                            ${project.link ? `<p style="font-size: 0.875rem; margin: 0.25rem 0; color: ${currentColor};"><strong>Link:</strong> ${escapeHtml(project.link)}</p>` : ''}
                        </div>
                    `).join('')}
                </section>
                ` : ''}

                <!-- Skills Section -->
                ${skills.length > 0 ? `
                <section>
                    <h2 style="font-size: 1.5rem; font-weight: 300; color: ${currentColor}; border-bottom: 2px solid ${currentColor}; padding-bottom: 0.5rem; margin: 0 0 1.5rem 0;">Skills</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${skills.map(skill => `
                            <span style="background: ${currentColor}20; color: ${currentColor}; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">${escapeHtml(skill)}</span>
                        `).join('')}
                    </div>
                </section>
                ` : ''}
            </div>
        </div>
    `;
}

// Export the template generator
if (typeof window !== 'undefined') {
    window.ModernTemplate = generateModernTemplate;
}