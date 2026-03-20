export const siteConfig = {
    name: process.env.NEXT_PUBLIC_NAME || "Edward Andres Sandoval Pineda",
    title: "Machine Learning Engineer",
    subtitle: "Research Scientist & AI Consultant",
    description:
        "Specialized in deep learning for medical image analysis, with hands-on experience in NLP and foundational models. Experienced in developing self-supervised architectures.",
    email: process.env.NEXT_PUBLIC_EMAIL || "your-email@here.com.cos",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/your-username",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/your-username",
    location: process.env.NEXT_PUBLIC_LOCATION || "Bucaramanga, Santander, Colombia",
    githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "your-username",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000",
    resumePdf: "/resume.pdf",

    techTags: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Medical Imaging",
        "Riemannian Geometry",
        "Self-Supervised Learning",
        "PyTorch",
        "TensorFlow",
        "Docker",
        "Python",
        "MATLAB"
    ],

    skills: {
        "Machine Learning": [
            "PyTorch",
            "TensorFlow",
            "Scikit-learn",
            "Hugging Face",
            "Deep Learning",
            "Self-Supervised Learning",
            "Model Validation"
        ],
        "Data Engineering": [
            "NumPy",
            "SQL",
            "Pandas",
            "Plotly",
            "Matplotlib",
            "Polars"
        ],
        MLOps: [
            "Docker",
            "Linux",
            "Git",
            "Dependency Management"
        ],
        "Software Engineering": [
            "Python",
            "MATLAB",
            "FastAPI",
            "JavaScript",
            "TypeScript",
            "C++",
            "Java"
        ],
    },

    experience: [
        {
            role: "Artificial Intelligence Consultant",
            company: "Tecnologica FITEC",
            period: "2023 – 2024",
            description:
                "Developed subject-specific chatbots using OpenAI APIs and fine-tuned models for educational intent recognition. Conducted AI literacy workshops for faculty.",
            technologies: ["OpenAI API", "NLP", "Python", "Fine-tuning"],
        },
        {
            role: "Machine Learning Engineer",
            company: "Industrial University of Santander",
            period: "2022 – 2024",
            description:
                "Integrated state-of-the-art models from Hugging Face into project infrastructure. Managed Docker containerization and coordinated model deployment in JS/TS environments.",
            technologies: ["PyTorch", "FastAPI", "Docker", "TypeScript"],
        },
        {
            role: "Research Scientist",
            company: "Industrial University of Santander",
            period: "2021 – 2023",
            description:
                "Led implementation of advanced eye-tracking classification for Parkinson's disease. Developed discriminative representations using unsupervised learning to circumvent labeling challenges.",
            technologies: ["Python", "MATLAB", "Computer Vision", "Riemannian Geometry"],
        },
    ],

    education: [
        {
            degree: "Master's in Systems and Computer Engineering",
            school: "Industrial University of Santander",
            period: "2024 – Present",
            details: "Focus on malignancy stratification of prostate lesions using MRI sequences and unsupervised representations.",
        },
        {
            degree: "B.S. in Computer Science",
            school: "Industrial University of Santander",
            period: "2018 – 2023",
            details: "GPA: 4.45/5. Meritorious Thesis on Deep Riemannian Representation for Parkinsonian patterns.",
        },
    ],

    publications: [
        {
            title: "RIEMAE: Riemannian Masked Autoencoder for Classifying Malignant Prostate Cancer Patterns",
            venue: "ISBI 2025",
            url: "https://ieeexplore.ieee.org/abstract/document/10980910",
        },
        {
            title: "A self-supervised deep Riemannian representation to classify parkinsonian fixational patterns",
            venue: "Artificial Intelligence in Medicine, Volume 157",
            url: "https://www.sciencedirect.com/science/article/pii/S093336572400229X",
        },
    ],

    navLinks: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Skills", href: "/skills" },
        { label: "Blog", href: "/blog" },
        { label: "Resume", href: "/resume" },
        { label: "Contact", href: "/contact" },
    ],
};

export type SiteConfig = typeof siteConfig;