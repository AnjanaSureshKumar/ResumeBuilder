// Other Resume Templates (Minimal, Elegant, Tech, Creative)
const { escapeHtml } = window.ResumeUtils;

function generateMinimalTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    return `
        <div style="background: #f9fafb; color: #374151; padding: 2rem; font-family: '${currentFont}', sans-serif; min-height: 100%; text-align: center; line-height: 1.6;">
            <div style="margin-bottom: 2rem;">
                <h1 style="font-size: 2.5rem; font-weight: 300; letter-spacing: 0.1em; margin-bottom: 0.5rem; margin-top: 0;">${escapeHtml(personalInfo.fullName)}</h1>
                <div style="font-size: 0.875rem; color: #6b7280; margin-bottom: 1rem;">
                    ${escapeHtml(personalInfo.email)} • ${escapeHtml(personalInfo.phone)} • ${escapeHtml(personalInfo.location)}
                    ${personalInfo.website ? ` • ${escapeHtml(personalInfo.website)}` : ''}
                </div>
                ${personalInfo.summary ? `<p style="font-size: 0.875rem; color: #4b5563; max-width: 600px; margin: 0 auto; font-style: italic;">${escapeHtml(personalInfo.summary)}</p>` : ''}
            </div>

            ${experience.length > 0 ? `
            <div style="margin-bottom: 2rem;">
                <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.15em; color: #9ca3af; margin-bottom: 1rem; margin-top: 0;">Experience</h2>
                ${experience.map(exp => `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="font-weight: 300; font-size: 1.125rem; margin: 0 0 0.25rem 0;">${escapeHtml(exp.position)}</h3>
                        <p style="color: #6b7280; font-size: 0.875rem; margin: 0 0 0.25rem 0;">${escapeHtml(exp.company)} • ${escapeHtml(exp.location)}</p>
                        <p style="color: #9ca3af; font-size: 0.75rem; margin: 0 0 0.5rem 0;">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</p>
                        ${exp.description ? `<p style="font-size: 0.875rem; color: #4b5563; max-width: 600px; margin: 0 auto;">${escapeHtml(exp.description)}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}

            ${skills.length > 0 ? `
            <div>
                <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.15em; color: #9ca3af; margin-bottom: 1rem; margin-top: 0;">Skills</h2>
                <p style="font-size: 0.875rem; color: #374151; margin: 0;">${skills.map(skill => escapeHtml(skill)).join(' • ')}</p>
            </div>
            ` : ''}
        </div>
    `;
}

function generateElegantTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    return `
        <div style="display: grid; grid-template-columns: 1fr 2fr; min-height: 100%; font-family: '${currentFont}', serif;">
            <div style="background: linear-gradient(to bottom, #7c3aed, #6d28d9); color: white; padding: 2rem;">
                <div style="margin-bottom: 2rem;">
                    <h1 style="font-family: serif; font-size: 1.5rem; margin-bottom: 1rem; margin-top: 0;">${escapeHtml(personalInfo.fullName)}</h1>
                    <div style="font-size: 0.875rem; opacity: 0.9; line-height: 1.6;">
                        <div style="margin-bottom: 0.5rem;">📧 ${escapeHtml(personalInfo.email)}</div>
                        <div style="margin-bottom: 0.5rem;">📞 ${escapeHtml(personalInfo.phone)}</div>
                        <div style="margin-bottom: 0.5rem;">📍 ${escapeHtml(personalInfo.location)}</div>
                    </div>
                </div>
                ${skills.length > 0 ? `
                <div>
                    <h2 style="font-family: serif; font-size: 1.125rem; border-bottom: 1px solid rgba(255,255,255,0.3); margin-bottom: 1rem; padding-bottom: 0.5rem; margin-top: 0;">Skills</h2>
                    <div style="line-height: 1.8;">
                        ${skills.map(skill => `
                            <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                                <div style="width: 4px; height: 4px; background: rgba(255,255,255,0.7); border-radius: 50%; margin-right: 0.75rem;"></div>
                                <span style="font-size: 0.875rem;">${escapeHtml(skill)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
            <div style="padding: 2rem; background: white;">
                ${experience.length > 0 ? `
                <div style="margin-bottom: 2rem;">
                    <h2 style="font-family: serif; color: #7c3aed; font-size: 1.25rem; border-bottom: 1px solid #e5e7eb; margin-bottom: 1rem; padding-bottom: 0.5rem; margin-top: 0;">Experience</h2>
                    ${experience.map(exp => `
                        <div style="position: relative; margin-bottom: 1.5rem;">
                            <div style="position: absolute; left: 0; top: 0.25rem; width: 8px; height: 8px; background: #d8b4fe; border-radius: 50%;"></div>
                            <div style="margin-left: 1.5rem;">
                                <h3 style="font-family: serif; color: #6d28d9; font-size: 1rem; margin: 0;">${escapeHtml(exp.position)}</h3>
                                <p style="color: #7c3aed; font-size: 0.875rem; margin: 0;">${escapeHtml(exp.company)}</p>
                                ${exp.description ? `<p style="font-size: 0.875rem; color: #374151; margin: 0.5rem 0 0 0;">${escapeHtml(exp.description)}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

function generateTechTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    return `
        <div style="background: #1f2937; color: #10b981; padding: 2rem; font-family: 'Courier New', monospace; min-height: 100%; line-height: 1.5;">
            <div style="border: 1px solid #10b981; padding: 1rem; margin-bottom: 1.5rem; border-radius: 0.25rem;">
                <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
                    <div style="width: 12px; height: 12px; background: #ef4444; border-radius: 50%;"></div>
                    <div style="width: 12px; height: 12px; background: #eab308; border-radius: 50%;"></div>
                    <div style="width: 12px; height: 12px; background: #22c55e; border-radius: 50%;"></div>
                </div>
                <div>
                    <div style="color: #10b981; font-size: 0.875rem;">$ whoami</div>
                    <div style="color: white; font-size: 0.875rem; margin-left: 1rem;">&gt; ${escapeHtml(personalInfo.fullName)}</div>
                </div>
            </div>

            ${experience.length > 0 ? `
            <div>
                <div style="color: #10b981; font-size: 0.875rem; margin-bottom: 0.75rem;">$ ls -la experience/</div>
                ${experience.map(exp => `
                    <div style="margin-bottom: 1rem; margin-left: 1rem;">
                        <div style="color: #3b82f6; font-size: 0.75rem;">drwxr-xr-x ${escapeHtml(exp.company).toLowerCase().replace(/\s+/g, '_')}/</div>
                        <div style="color: #6b7280; font-size: 0.75rem; margin-left: 1rem;"># ${escapeHtml(exp.position)}</div>
                    </div>
                `).join('')}
            </div>
            ` : ''}

            ${skills.length > 0 ? `
            <div style="margin-top: 1.5rem;">
                <div style="color: #10b981; font-size: 0.875rem;">$ cat skills.json</div>
                <div style="margin-left: 1rem; color: white; font-size: 0.75rem;">
                    { "technologies": [${skills.map(skill => `"${escapeHtml(skill)}"`).join(', ')}] }
                </div>
            </div>
            ` : ''}
        </div>
    `;
}

function generateCreativeTemplate(resumeData, currentFont, currentColor) {
    const { personalInfo, experience, education, skills, projects } = resumeData;
    
    return `
        <div style="background: linear-gradient(135deg, #fef7f0 0%, #fff7ed 100%); min-height: 100%; position: relative; overflow: hidden; font-family: '${currentFont}', sans-serif;">
            <div style="position: absolute; top: 2rem; right: 2rem; width: 4rem; height: 4rem; background: linear-gradient(45deg, #fed7aa, #fdba74); border-radius: 50%; opacity: 0.6;"></div>
            
            <div style="padding: 2rem; position: relative; z-index: 10;">
                <h1 style="font-size: 2.5rem; font-weight: bold; background: linear-gradient(45deg, ${currentColor}, #ec4899); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; margin-top: 0;">${escapeHtml(personalInfo.fullName)}</h1>
                
                ${experience.length > 0 ? `
                <div style="background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 1rem;">
                    <h2 style="color: ${currentColor}; font-weight: 600; font-size: 1.25rem; margin-bottom: 1rem; margin-top: 0;">Experience</h2>
                    ${experience.map(exp => `
                        <div style="margin-bottom: 1rem;">
                            <h3 style="font-weight: bold; font-size: 1rem; margin: 0;">${escapeHtml(exp.position)}</h3>
                            <p style="color: ${currentColor}; font-size: 0.875rem; margin: 0;">${escapeHtml(exp.company)}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}

                ${skills.length > 0 ? `
                <div style="background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <h2 style="color: ${currentColor}; font-weight: 600; font-size: 1.25rem; margin-bottom: 1rem; margin-top: 0;">Skills</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${skills.map(skill => `
                            <span style="background: linear-gradient(45deg, ${currentColor}, #ec4899); color: white; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.875rem;">${escapeHtml(skill)}</span>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Export all template generators
window.OtherTemplates = {
    generateMinimalTemplate,
    generateElegantTemplate,
    generateTechTemplate,
    generateCreativeTemplate
};