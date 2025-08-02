// Tech Resume Template Generator
function generateTechTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    return `
        <div style="background: #1f2937; color: #10b981; padding: 2rem; font-family: 'Courier New', monospace; min-height: 100%; line-height: 1.5;">
            <!-- Terminal Header -->
            <div style="border: 1px solid #10b981; padding: 1rem; margin-bottom: 1.5rem; border-radius: 0.25rem;">
                <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
                    <div style="width: 12px; height: 12px; background: #ef4444; border-radius: 50%;"></div>
                    <div style="width: 12px; height: 12px; background: #eab308; border-radius: 50%;"></div>
                    <div style="width: 12px; height: 12px; background: #22c55e; border-radius: 50%;"></div>
                </div>
                <div style="margin-bottom: 0.5rem;">
                    <div style="color: #10b981; font-size: 0.875rem;">$ whoami</div>
                    <div style="color: white; font-size: 0.875rem; margin-left: 1rem;">&gt; ${escapeHtml(personalInfo.fullName)}</div>
                </div>
                <div style="margin-bottom: 0.5rem;">
                    <div style="color: #10b981; font-size: 0.875rem;">$ cat contact.txt</div>
                    <div style="color: white; font-size: 0.75rem; margin-left: 1rem;">
                        <div>&gt; Email: ${escapeHtml(personalInfo.email)}</div>
                        <div>&gt; Phone: ${escapeHtml(personalInfo.phone)}</div>
                        <div>&gt; Location: ${escapeHtml(personalInfo.location)}</div>
                        ${personalInfo.website ? `<div>&gt; Website: ${escapeHtml(personalInfo.website)}</div>` : ''}
                    </div>
                </div>
                ${personalInfo.summary ? `
                <div>
                    <div style="color: #10b981; font-size: 0.875rem;">$ cat README.md</div>
                    <div style="color: white; font-size: 0.75rem; margin-left: 1rem; line-height: 1.4;">&gt; ${escapeHtml(personalInfo.summary)}</div>
                </div>
                ` : ''}
            </div>

            <!-- Experience Section -->
            ${experience.length > 0 ? `
            <div style="margin-bottom: 1.5rem;">
                <div style="color: #10b981; font-size: 0.875rem; margin-bottom: 0.75rem;">$ ls -la experience/</div>
                ${experience.map(exp => `
                    <div style="margin-bottom: 1rem; margin-left: 1rem;">
                        <div style="color: #3b82f6; font-size: 0.75rem;">drwxr-xr-x ${escapeHtml(exp.company).toLowerCase().replace(/\s+/g, '_')}/</div>
                        <div style="color: #6b7280; font-size: 0.75rem; margin-left: 1rem;"># ${escapeHtml(exp.position)}</div>
                        <div style="color: #6b7280; font-size: 0.75rem; margin-left: 1rem;"># ${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)} | ${escapeHtml(exp.location)}</div>
                        ${exp.description ? `<div style="color: white; font-size: 0.75rem; margin-left: 1rem; margin-top: 0.25rem;"># ${escapeHtml(exp.description)}</div>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Education Section -->
            ${education.length > 0 ? `
            <div style="margin-bottom: 1.5rem;">
                <div style="color: #10b981; font-size: 0.875rem; margin-bottom: 0.75rem;">$ ls -la education/</div>
                ${education.map(edu => `
                    <div style="margin-bottom: 1rem; margin-left: 1rem;">
                        <div style="color: #3b82f6; font-size: 0.75rem;">drwxr-xr-x ${escapeHtml(edu.institution).toLowerCase().replace(/\s+/g, '_')}/</div>
                        <div style="color: #6b7280; font-size: 0.75rem; margin-left: 1rem;"># ${escapeHtml(edu.degree)}</div>
                        <div style="color: #6b7280; font-size: 0.75rem; margin-left: 1rem;"># ${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)} | ${escapeHtml(edu.location)}</div>
                        ${edu.gpa ? `<div style="color: #6b7280; font-size: 0.75rem; margin-left: 1rem;"># GPA: ${escapeHtml(edu.gpa)}</div>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Projects Section -->
            ${projects.length > 0 ? `
            <div style="margin-bottom: 1.5rem;">
                <div style="color: #10b981; font-size: 0.875rem; margin-bottom: 0.75rem;">$ ls -la projects/</div>
                ${projects.map(project => `
                    <div style="margin-bottom: 1rem; margin-left: 1rem;">
                        <div style="color: #3b82f6; font-size: 0.75rem;">drwxr-xr-x ${escapeHtml(project.name).toLowerCase().replace(/\s+/g, '_')}/</div>
                        ${project.description ? `<div style="color: #6b7280; font-size: 0.75rem; margin-left: 1rem;"># ${escapeHtml(project.description)}</div>` : ''}
                        ${project.technologies && project.technologies.length > 0 ? `<div style="color: #8b5cf6; font-size: 0.75rem; margin-left: 1rem;"># Stack: ${project.technologies.map(tech => escapeHtml(tech)).join(', ')}</div>` : ''}
                        ${project.link ? `<div style="color: #10b981; font-size: 0.75rem; margin-left: 1rem;"># Link: ${escapeHtml(project.link)}</div>` : ''}
                        ${project.startDate ? `<div style="color: #6b7280; font-size: 0.75rem; margin-left: 1rem;"># ${escapeHtml(project.startDate)} - ${escapeHtml(project.endDate || 'Present')}</div>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Skills Section -->
            ${skills.length > 0 ? `
            <div>
                <div style="color: #10b981; font-size: 0.875rem; margin-bottom: 0.75rem;">$ cat skills.json</div>
                <div style="margin-left: 1rem;">
                    <div style="color: white; font-size: 0.75rem;">{</div>
                    <div style="color: #f59e0b; font-size: 0.75rem; margin-left: 1rem;">"technologies": [</div>
                    ${skills.map((skill, index) => `
                        <div style="color: #34d399; font-size: 0.75rem; margin-left: 2rem;">"${escapeHtml(skill)}"${index < skills.length - 1 ? ',' : ''}</div>
                    `).join('')}
                    <div style="color: #f59e0b; font-size: 0.75rem; margin-left: 1rem;">]</div>
                    <div style="color: white; font-size: 0.75rem;">}</div>
                </div>
            </div>
            ` : ''}
            
            <!-- Terminal Footer -->
            <div style="margin-top: 2rem; border-top: 1px solid #374151; padding-top: 1rem;">
                <div style="color: #10b981; font-size: 0.75rem;">$ echo "Resume generated successfully!"</div>
                <div style="color: white; font-size: 0.75rem;">&gt; Resume generated successfully!</div>
                <div style="color: #10b981; font-size: 0.75rem; margin-top: 0.5rem;">$ █</div>
            </div>
        </div>
    `;
}

// Export the template generator
if (typeof window !== 'undefined') {
    window.TechTemplate = generateTechTemplate;
}