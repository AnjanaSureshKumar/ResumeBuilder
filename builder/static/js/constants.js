// Resume Builder Constants
const DEFAULT_RESUME_DATA = {
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

const TEMPLATE_CONFIG = {
    templates: [
        {
            id: 'classic',
            name: 'Classic',
            description: 'Traditional design perfect for conservative industries',
            popular: true
        },
        {
            id: 'modern',
            name: 'Modern',
            description: 'Clean and contemporary design for tech professionals',
            popular: true
        },
        {
            id: 'minimal',
            name: 'Minimal',
            description: 'Simple and elegant with plenty of white space',
            popular: false
        },
        {
            id: 'elegant',
            name: 'Elegant',
            description: 'Sophisticated design for executive positions',
            popular: false
        },
        {
            id: 'tech',
            name: 'Tech',
            description: 'Dark theme optimized for developers',
            popular: false
        },
        {
            id: 'creative',
            name: 'Creative',
            description: 'Bold and colorful for creative professionals',
            popular: false
        }
    ],
    fonts: [
        { value: 'Inter', label: 'Inter' },
        { value: 'Roboto', label: 'Roboto' },
        { value: 'Open Sans', label: 'Open Sans' },
        { value: 'Lato', label: 'Lato' }
    ],
    colors: [
        { value: '#FF6B35', label: 'Orange' },
        { value: '#FF7F50', label: 'Coral' },
        { value: '#FF8C42', label: 'Tangerine' },
        { value: '#FF4500', label: 'Red Orange' },
        { value: '#FF9500', label: 'Amber' },
        { value: '#E85D00', label: 'Dark Orange' }
    ]
};

const APP_CONSTANTS = {
    defaultPage: 'home',
    defaultTemplate: 'modern',
    defaultFont: 'Inter',
    defaultColor: '#FF6B35',
    stats: [
        { icon: 'users', number: '50K+', label: 'Resumes Created' },
        { icon: 'star', number: '95%', label: 'Success Rate' },
        { icon: 'clock', number: '24/7', label: 'Available' }
    ],
    features: [
        {
            icon: 'zap',
            title: 'Lightning Fast',
            description: 'Create professional resumes in minutes, not hours'
        },
        {
            icon: 'download',
            title: 'Instant Download',
            description: 'Download your resume as PDF immediately'
        },
        {
            icon: 'star',
            title: 'Professional Templates',
            description: 'Choose from expertly designed templates'
        }
    ],
    steps: [
        {
            number: 1,
            title: 'Choose Template',
            description: 'Pick from our collection of professional templates'
        },
        {
            number: 2,
            title: 'Fill Details',
            description: 'Add your information using our guided form'
        },
        {
            number: 3,
            title: 'Download',
            description: 'Get your professional resume instantly'
        }
    ]
};