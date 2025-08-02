// Creative Resume Template Generator
function generateCreativeTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    return `
        <div style="background: linear-gradient(135deg, #fef7f0 0%, #fff7ed 100%); min-height: 100%; position: relative; overflow: hidden; font-family: '${currentFont}', sans-serif;">
            <!-- Decorative Shapes -->
            <div style="position: absolute; top: 2rem; right: 2rem; width: 4rem; height: 4rem; background: linear-gradient(45deg, #fed7aa, #fdba74); border-radius: 50%; opacity: 0.6;"></div>
            <div style="position: absolute; top: 6rem; right: 6rem; width: 2rem; height: 2rem; background: linear-gradient(45deg, #fbbf24, #f59e0b); border-radius: 50%; opacity: 0.4;"></div>
            <div style="position: absolute; bottom: 4rem; left: 2rem; width: 3rem; height: 3rem; background: linear-gradient(45deg, #ec4899, #be185d); border-radius: 50%; opacity: 0.5;"></div>
            <div style="position: absolute; top: 50%; left: -1rem; width: 2rem; height: 2rem; background: linear-gradient(45deg, ${currentColor}, #f97316); border-radius: 50%; opacity: 0.3;"></div>
            
            <div style="padding: 2rem; position: relative; z-index: 10;">
                <!-- Header -->
                <div style="margin-bottom: 2rem;">
                    <h1 style="font-size: 2.5rem; font-weight: bold; background: linear-gradient(45deg, ${currentColor}, #ec4899); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0 0 1rem 0;">${escapeHtml(personalInfo.fullName)}</h1>
                    <div style="display: flex; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap;">
                        <span style="background: white; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.875rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${escapeHtml(personalInfo.email)}</span>
                        <span style="background: white; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.875rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${escapeHtml(personalInfo.phone)}</span>
                        <span style="background: white; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.875rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${escapeHtml(personalInfo.location)}</span>
                        ${personalInfo.website ? `<span style="background: white; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.875rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${escapeHtml(personalInfo.website)}</span>` : ''}
                    </div>
                    ${personalInfo.summary ? `
                    <div style="background: white; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 2rem;">
                        <p style="font-size: 0.875rem; line-height: 1.6; color: #374151; margin: 0;">${escapeHtml(personalInfo.summary)}</p>
                    </div>
                    ` : ''}
                </div>

                <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                    <!-- Experience -->
                    ${experience.length > 0 ? `
                    <div style="background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: -0.5rem; right: -0.5rem; width: 3rem; height: 3rem; background: linear-gradient(45deg, ${currentColor}, #ec4899); border-radius: 50%; opacity: 0.1;"></div>
                        <h2 style="color: ${currentColor}; font-weight: 600; font-size: 1.25rem; margin: 0 0 1rem 0;">Experience</h2>
                        ${experience.map(exp => `
                            <div style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #f3f4f6; position: relative;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap;">
                                    <h3 style="font-weight: bold; font-size: 1rem; margin: 0; flex: 1; min-width: 0;">${escapeHtml(exp.position)}</h3>
                                    <span style="background: linear-gradient(45deg, ${currentColor}, #ec4899); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.75rem; white-space: nowrap; margin-left: 0.5rem;">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</span>
                                </div>
                                <p style="color: ${currentColor}; font-size: 0.875rem; margin: 0 0 0.5rem 0;">${escapeHtml(exp.company)} • ${escapeHtml(exp.location)}</p>
                                ${exp.description ? `<p style="font-size: 0.875rem; color: #374151; line-height: 1.6; margin: 0;">${escapeHtml(exp.description)}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}

                    <!-- Education -->
                    ${education.length > 0 ? `
                    <div style="background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: -0.5rem; left: -0.5rem; width: 2.5rem; height: 2.5rem; background: linear-gradient(45deg, #10b981, #059669); border-radius: 50%; opacity: 0.1;"></div>
                        <h2 style="color: ${currentColor}; font-weight: 600; font-size: 1.25rem; margin: 0 0 1rem 0;">Education</h2>
                        ${education.map(edu => `
                            <div style="margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; flex-wrap: wrap;">
                                    <h3 style="font-weight: bold; font-size: 1rem; margin: 0; flex: 1; min-width: 0;">${escapeHtml(edu.degree)}</h3>
                                    <span style="background: linear-gradient(45deg, ${currentColor}, #ec4899); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.75rem; white-space: nowrap; margin-left: 0.5rem;">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</span>
                                </div>
                                <p style="color: ${currentColor}; font-size: 0.875rem; margin: 0;">${escapeHtml(edu.institution)} • ${escapeHtml(edu.location)}</p>
                                ${edu.gpa ? `<p style="color: #6b7280; font-size: 0.75rem; margin: 0.25rem 0 0 0;">GPA: ${escapeHtml(edu.gpa)}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}

                    <!-- Projects -->
                    ${projects.length > 0 ? `
                    <div style="background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: -0.5rem; right: -0.5rem; width: 4rem; height: 4rem; background: linear-gradient(45deg, #8b5cf6, #7c3aed); border-radius: 50%; opacity: 0.1;"></div>
                        <h2 style="color: ${currentColor}; font-weight: 600; font-size: 1.25rem; margin: 0 0 1rem 0;">Projects</h2>
                        ${projects.map(project => `
                            <div style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #f3f4f6;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap;">
                                    <h3 style="font-weight: bold; font-size: 1rem; margin: 0; flex: 1; min-width: 0;">${escapeHtml(project.name)}</h3>
                                    ${project.startDate ? `<span style="background: linear-gradient(45deg, ${currentColor}, #ec4899); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.75rem; white-space: nowrap; margin-left: 0.5rem;">${escapeHtml(project.startDate)} - ${escapeHtml(project.endDate || 'Present')}</span>` : ''}
                                </div>
                                ${project.description ? `<p style="font-size: 0.875rem; color: #374151; line-height: 1.6; margin: 0 0 0.75rem 0;">${escapeHtml(project.description)}</p>` : ''}
                                ${project.technologies && project.technologies.length > 0 ? `
                                    <div style="margin: 0.5rem 0;">
                                        ${project.technologies.map(tech => `<span style="background: linear-gradient(45deg, ${currentColor}, #ec4899); color: white; padding: 0.25rem 0.5rem; border-radius: 1rem; font-size: 0.75rem; margin-right: 0.5rem; margin-bottom: 0.25rem; display: inline-block;">${escapeHtml(tech)}</span>`).join('')}
                                    </div>
                                ` : ''}
                                ${project.link ? `<p style="font-size: 0.75rem; color: ${currentColor}; margin: 0.25rem 0 0 0;"><strong>Link:</strong> ${escapeHtml(project.link)}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}

                    <!-- Skills -->
                    ${skills.length > 0 ? `
                    <div style="background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 50%; left: -1rem; width: 2rem; height: 2rem; background: linear-gradient(45deg, #f59e0b, #d97706); border-radius: 50%; opacity: 0.1;"></div>
                        <h2 style="color: ${currentColor}; font-weight: 600; font-size: 1.25rem; margin: 0 0 1rem 0;">Skills</h2>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${skills.map(skill => `
                                <span style="background: linear-gradient(45deg, ${currentColor}, #ec4899); color: white; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.875rem; font-weight: 500; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${escapeHtml(skill)}</span>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Export the template generator
if (typeof window !== 'undefined') {
    window.CreativeTemplate = generateCreativeTemplate;
}