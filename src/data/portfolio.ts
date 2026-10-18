import profilePhoto from './Tej.jpeg';
import ecommerceImage from './ecommerce.png';
import weatherImage from './weather.png';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  metrics: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId: string;
  url: string;
  icon: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  stats: { label: string; value: string }[];
  icon: string;
  color: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  grade: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Hobby {
  name: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export const profile = { 
  name: 'Tejaswini Bandaru', 
  role: 'Full-Stack Developer, Machine Learning & Agentic AI Enthusiast', 
  tagline: 'I craft immersive digital experiences where code meets creativity', 
  email: 'tejaswinibandaru8@gmail.com', 
  location: 'Andhra Pradesh, India', 
  resumeUrl: 'https://drive.google.com/file/d/1xeenKvQYtLhbO3XwMyP4bVrtibUVPxsH/view', 
  bio: `Hello, I'm Tejaswini! I am a Computer Science student with a strong interest in full-stack development, Machine Learning, and Agentic AI. I am an enthusiastic and quick learner who enjoys exploring new technologies, building user-friendly applications, and solving real-world problems. I continuously improve my technical skills through projects, hackathons, and hands-on learning. I am adaptable to new technologies and passionate about creating practical, efficient, and meaningful digital solutions.,`,
  photo: profilePhoto, };

export const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/TejaswiniBandaru005/', icon: 'Github', handle: '@tejaswinibandaru' },
  { name: 'LinkedIn', url: 'www.linkedin.com/in/bandaru-tejaswini-444517325', icon: 'Linkedin', handle: 'Tejaswini Bandaru' },
  { name: 'Instagram', url: 'https://www.instagram.com/artsy.aswini/', icon: 'Instagram', handle: '@tejaswini.art' },
];

export const projects: Project[] = [
  {
    id: 'EduLearn',
    title: 'EduLearn',
    tagline: 'Revolutionizing Education Through Technology',
    description: 'A comprehensive solution for managing educational institutions, including student records, course management, and resource allocation.',
    longDescription: 'The EduLearn Platform is designed to optimize educational delivery by providing an integrated platform for managing student data, courses, and institutional resources. Built with a focus on usability and efficiency, it reduces administrative overhead and improves learning outcomes.',
    tags: ['React', 'TypeScript'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYclCX1MNnVWE7eckcmCNPAjy8tp6rmWuvlvETKo-2s3h2YEdxb81axg&s=10',
    liveUrl: 'https://edulearn-demo.vercel.app',
    githubUrl: 'https://github.com/TejaswiniBandaru005/edulearn',
    metrics: [
      { label: 'Active Users', value: '12K+' },
      { label: 'Designs Created', value: '85K+' },
      { label: 'Avg. Load Time', value: '0.8s' },
    ],
  },
  {
    id: 'ecommerce-platform',
    title: 'ClickCart-Connect',
    tagline: 'Scalable online shopping solution',
    description: 'A feature-rich e-commerce platform with inventory management, payment processing, and customer analytics.',
    longDescription: 'The Ecommerce Platform is a robust solution for businesses looking to establish a strong online presence. It includes seamless integration with popular payment gateways, advanced inventory management, and detailed analytics to drive sales growth.',
    tags: ['React', 'TypeScript'],

    image: ecommerceImage,
    liveUrl: 'https://ClickCart-Connect-demo.vercel.app',
    githubUrl: 'https://github.com/TejaswiniBandaru005/ClickCart-Connect',
    metrics: [
      { label: 'Teams Onboarded', value: '340+' },
      { label: 'Tasks Managed', value: '1.2M+' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'careconnect',
    title: 'CareConnect Hospital Management',
    tagline: 'A comprehensive hospital Management system for efficient healthcare operations',
    description: 'A streaming analytics dashboard with animated charts, heatmaps, and predictive forecasting powered by live data pipelines.',
    longDescription: 'Pulse Analytics processes millions of events per minute and renders them as beautiful, animated visualizations. The dashboard features custom-built chart components with WebGL rendering for 60fps performance even with 100K+ data points. The predictive forecasting module uses time-series models to surface trends before they happen.',
    tags: ['React', 'TypeScript', ''],
    image: 'https://i.pinimg.com/736x/65/5a/15/655a15abf76e4e29a10f09eef7093cd2.jpg',
    liveUrl: 'https://pulse-analytics-demo.vercel.app',
    githubUrl: 'https://github.com/TejaswiniBandaru005/CareConnect',
    metrics: [
      { label: 'Events / sec', value: '50K+' },
      { label: 'Data Sources', value: '24+' },
      { label: 'Query Speed', value: '< 50ms' },
    ],
  },
  {
    id: 'weather-condition',
    title: 'Weather Condition',
    tagline: 'Real-time weather information platform',
    description: 'A comprehensive weather forecasting app with interactive maps, detailed reports, and personalized alerts.',
    longDescription: 'Weather Condition provides accurate, real-time weather information with a user-friendly interface. Users can view detailed forecasts, access historical data, and receive personalized alerts based on their location and preferences. The app integrates with multiple weather APIs to ensure the most up-to-date information.',
    tags: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    image: weatherImage,
    liveUrl: 'https://tejaswinibandaru005.github.io/Weather-Condition/',
    githubUrl: 'https://github.com/TejaswiniBandaru005/Weather-Condition',
    metrics: [
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'Products', value: '10K+' },
      { label: 'AOV Lift', value: '+35%' },
    ],
  },
];

export const skills: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Programming Languages', icon: 'Code2' },
{ name: 'React', level: 80, category: 'Frontend Development', icon: 'Atom' },
{ name: 'Java', level: 92, category: 'Programming Languages', icon: 'Coffee' },
{ name: 'Python', level: 80, category: 'Programming Languages', icon: 'Terminal' },
{ name: 'Tailwind CSS', level: 85, category: 'Frontend Development', icon: 'Palette' },
{ name: 'Agentic AI', level: 85, category: 'Artificial Intelligence', icon: 'Brain' },
{ name: 'AI Coding Assistants', level: 94, category: 'AI Tools', icon: 'Bot' },
{ name: 'Responsible AI Usage', level: 80, category: 'AI Ethics & Safety', icon: 'ShieldCheck' },
{ name: 'n8n', level: 94, category: 'Workflow Automation', icon: 'Workflow' },
{ name: 'Prompt Engineering', level: 85, category: 'Generative AI', icon: 'MessageSquareText' },
  // { name: 'AWS / Docker', level: 82, category: 'DevOps', icon: 'Cloud' },
];

export const achievements: Achievement[] = [
  {
      "title": "Runner-Up – 2025 Flutter Hackathon",
      "description": "Secured second place 🥈 in a Flutter app development competition, demonstrating creativity, technical skills, and problem-solving abilities.",
      "year": "2025",
      "icon": "Trophy"
    },
    {
      "title": "Semi-Finalist – Amaravati Quantum Valley Hackathon",
      "description": "Reached the semi-final round of the Amaravati Quantum Valley Hackathon 2025, held at Dhanekula Institute of Engineering & Technology, Vijayawada, in collaboration with TCS, IBM, and the Department of Science and Technology.",
      "year": "2025",
      "icon": "GitBranch"
    },
    {
      "title": "Best Presentation Award – 2025",
      "description": "Received the Best Presentation Award at the CSE department-level hackathon for presenting the Care Connect Hospital Management project, highlighting innovation, teamwork, and effective communication.",
      "year": "2025",
      "icon": "Award"
    },
    {
      "title": "Merit Scholarship – 2022–2023",
      "description": "Received a merit-based scholarship and certificate in recognition of academic excellence and outstanding performance in Computer Science and Engineering.",
      "year": "2022–2023",
      "icon": "GraduationCap"
    },
    {
      "title": "Drawing Competition Winner",
      "description": "Won first place in a drawing competition organized by the art club, showcasing creativity and artistic skills.",
      "year": "2019",
      "icon": "Palette"
    }
];

export const certifications: Certification[] = [
{
      "title": "SAP Certified — Back-End Developer - ABAP Cloud",
      "issuer": "SAP",
      "year": "2026",
      "credentialId": "d6e2e157-ad8c-4f0d-90d9-aed32e9f33e0",
      "url": "https://www.credly.com/badges/d6e2e157-ad8c-4f0d-90d9-aed32e9f33e0",
      "icon": "Cloud"
    },
    {
      "title": "Certified LLM Security Professional (CLLMSP)",
      "issuer": "RED TEAM LEADERS",
      "year": "2026",
      "credentialId": "e541df498bf61a33",
      "url": "https://courses.redteamleaders.com/exam-completion/e541df498bf61a33",
      "icon": "Database"
    },
    {
      "title": "MERN-STACK DEVELOPER INTERNSHIP",
      "issuer": "KSHITIJ CODEFORGE",
      "year": "2025",
      "credentialId": "KCF20250206IN8029",
      "url": "https://drive.google.com/file/d/130s5jRoc9Ca9D_UKiPQolJr8VVL_Gz2W/view?usp=drive_link",
      "icon": "Code2"
    }
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'Bandaru_Tejaswini',
    url: 'https://leetcode.com/u/Bandaru_Tejaswini/',
    stats:[],
    icon: 'Code2',
    color: '#f59e0b',
  },
  {
    platform: 'GitHub',
    username: 'TejaswiniBandaru005',
    url: 'https://github.com/TejaswiniBandaru005',
    stats: [
      // { label: 'Repositories', value: '48' },
      // { label: 'Contributions', value: '2,100+' },
      // { label: 'Followers', value: '1.2K' },
    ],
    icon: 'Github',
    color: '#6366f1',
  },
  {
    platform: 'HackerRank',
    username: 'Bandaru Tejaswini',
    url: 'https://www.hackerrank.com/profile/bandarutejaswin2',
    stats: [
      // { label: 'Badges', value: '12' },
      // { label: 'Problems', value: '180+' },
      // { label: 'Rank', value: 'Gold' },
    ],
    icon: 'Trophy',
    color: '#00ea64',
  },
  {
    platform: 'Guvi',
    username: 'Bandaru Tejaswini',
    url: 'https://www.guvi.in/bandarutejaswini835330',
    stats: [
      // { label: 'Rating', value: '1,920' },
      // { label: 'Stars', value: '4' },
      // { label: 'Contests', value: '35+' },
    ],
    icon: 'GraduationCap',
    color: '#5b4638',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'KKR & KSR Institute of Technology and Sciences, Vinjanampadu, Guntur',
    period: '2024 - 2027',
    description: 'Specialized in Computer Science and Engineering. CGPA: 8.7/10.',
    grade: 'CGPA: 8.7 / 10',
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Kallam HaranadhaReddy Institute of Technology and Sciences, Dasaripalem, Guntur',
    period: '2021 - 2024',
    description: 'Specialized in Computer Scince and Engineering, top 5% of the class. CGPA: 8.7/10.',
    grade: 'CGPA: 8.7 / 10',
  },
  {
    degree: 'Secondary School of Eductaion (SSC)',
    institution: 'Kanna English Medium High School, Railpet, Guntur',
    period: '2021',
    description: 'The Board of Secondary Education, Andhra Pradesh (BSEAP) conducts the AP SSC Public Examinations for Class 10 students in the state of Andhra Pradesh.',
    grade: 'Percentage: 100% ',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Intern',
    company: 'KSHITIJ CODEFORGE',
    period: '3 Months',
    description: 'Built LMS Platform with some Chatbot functionality for better user engagement.',
  },
];

export const hobbies: Hobby[] = [
  {
    name: 'Drawing & Sketching',
    description:
      'I enjoy expressing my creativity through drawing and sketching, bringing ideas and imagination to life through art.',
    icon: 'Palette',
  },
  {
    name: 'Poetry & Creative Writing',
    description:
      'I enjoy exploring poetry and creative writing as ways to express thoughts, emotions, and ideas through words.',
    icon: 'BookOpen',
  },
  {
    name: 'Exploring Technology',
    description:
      'I love exploring emerging technologies, experimenting with new tools, and learning about full-stack development, Machine Learning, and Agentic AI.',
    icon: 'Laptop',
  },
  {
    name: 'Problem Solving',
    description:
      'I enjoy solving challenging problems, participating in hackathons, and building practical applications that address real-world needs.',
    icon: 'Lightbulb',
  },
];

export const techTicker = [
  // Programming Languages
  'Java', 'Python', 'TypeScript', 'JavaScript',

  // Frontend Development
  'React', 'HTML5', 'CSS3', 'Tailwind CSS',

  // AI & Agent Development
  'Agentic AI', 'Generative AI', 'LLMs', 'Prompt Engineering',

  // AI Tools & Responsible AI
  'AI Coding Assistants', 'Responsible AI', 'AI Security',

  // Workflow Automation
  'n8n', 'Workflow Automation',

  // Development Tools
  'Git', 'GitHub', 'VS Code', 'REST APIs',
];