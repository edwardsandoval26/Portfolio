export const siteConfig = {
    name: process.env.NEXT_PUBLIC_NAME || "Your Name",
    title: "Machine Learning Engineer",
    subtitle: "Data Scientist",
    description:
        "Building intelligent systems that transform data into actionable insights. Specializing in end-to-end ML pipelines, deep learning, and scalable AI infrastructure.",
    email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/your-username",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/your-username",
    location: process.env.NEXT_PUBLIC_LOCATION || "Remote / Worldwide",
    githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "your-username",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    resumePdf: "/resume.pdf",

    stats: {
        projects: 12,
        technologies: 25,
        publications: 4,
    },

    techTags: [
        "Machine Learning",
        "Deep Learning",
        "MLOps",
        "Data Engineering",
        "Computer Vision",
        "NLP",
        "PyTorch",
        "TensorFlow",
        "Python",
        "AWS",
        "Docker",
        "Kubernetes",
    ],

    skills: {
        "Machine Learning": [
            "PyTorch",
            "TensorFlow",
            "Scikit-learn",
            "XGBoost",
            "Hugging Face",
            "LangChain",
            "OpenCV",
            "ONNX",
        ],
        "Data Engineering": [
            "Pandas",
            "NumPy",
            "SQL",
            "Apache Spark",
            "Airflow",
            "dbt",
            "BigQuery",
            "Snowflake",
        ],
        MLOps: [
            "Docker",
            "Kubernetes",
            "AWS SageMaker",
            "MLflow",
            "Weights & Biases",
            "DVC",
            "Terraform",
            "CI/CD",
        ],
        "Software Engineering": [
            "Python",
            "TypeScript",
            "FastAPI",
            "Flask",
            "Git",
            "REST APIs",
            "PostgreSQL",
            "Redis",
        ],
    },

    experience: [
        {
            role: "Senior Machine Learning Engineer",
            company: "Tech Company",
            period: "2022 – Present",
            description:
                "Led development of recommendation systems serving 10M+ users. Built real-time feature pipelines and deployed models on AWS SageMaker.",
            technologies: ["PyTorch", "AWS", "Spark", "MLflow"],
        },
        {
            role: "Machine Learning Engineer",
            company: "AI Startup",
            period: "2020 – 2022",
            description:
                "Developed NLP models for document understanding. Built end-to-end ML pipelines with experiment tracking and automated retraining.",
            technologies: ["TensorFlow", "Hugging Face", "Docker", "GCP"],
        },
        {
            role: "Data Scientist",
            company: "Analytics Firm",
            period: "2018 – 2020",
            description:
                "Built predictive models for customer churn and lifetime value. Developed dashboards and reporting tools.",
            technologies: ["Scikit-learn", "Pandas", "SQL", "Tableau"],
        },
    ],

    education: [
        {
            degree: "M.S. Computer Science (Machine Learning)",
            school: "University Name",
            period: "2016 – 2018",
            details: "Thesis: Deep Learning approaches for time-series forecasting",
        },
        {
            degree: "B.S. Computer Science",
            school: "University Name",
            period: "2012 – 2016",
            details: "Minor in Mathematics, Dean's List",
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
