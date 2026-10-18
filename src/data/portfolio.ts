<<<<<<< HEAD
import profilePhoto from './Tej.jpeg';
import ecommerceImage from './ecommerce.png';
import weatherImage from './weather.png';

=======
>>>>>>> origin/main
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

<<<<<<< HEAD
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
=======
export const profile = {
  name: 'Tejaswini Bandaru',
  role: 'Full-Stack Developer & UI Engineer',
  tagline: 'I craft immersive digital experiences where code meets creativity',
  email: 'tejaswini.bandaru@gmail.com',
  location: 'Hyderabad, India',
  resumeUrl: '#',
  bio: 'I am a passionate full-stack developer who loves turning complex problems into elegant, user-centric solutions. With a strong foundation in both frontend and backend technologies, I specialize in building performant web applications that feel as good as they look. When I am not coding, you will find me exploring 3D graphics, contributing to open source, or mentoring aspiring developers.',
  photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/tejaswinibandaru', icon: 'Github', handle: '@tejaswinibandaru' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tejaswini-bandaru', icon: 'Linkedin', handle: 'Tejaswini Bandaru' },
  { name: 'Twitter', url: 'https://twitter.com/tejaswini_dev', icon: 'Twitter', handle: '@tejaswini_dev' },
  { name: 'Instagram', url: 'https://instagram.com/tejaswini.art', icon: 'Instagram', handle: '@tejaswini.art' },
  { name: 'Dribbble', url: 'https://dribbble.com/tejaswini', icon: 'Dribbble', handle: '@tejaswini' },
  { name: 'YouTube', url: 'https://youtube.com/@tejaswini_codes', icon: 'Youtube', handle: '@tejaswini_codes' },
>>>>>>> origin/main
];

export const projects: Project[] = [
  {
<<<<<<< HEAD
    id: 'EduLearn',
    title: 'EduLearn',
    tagline: 'Revolutionizing Education Through Technology',
    description: 'A comprehensive solution for managing educational institutions, including student records, course management, and resource allocation.',
    longDescription: 'The EduLearn Platform is designed to optimize educational delivery by providing an integrated platform for managing student data, courses, and institutional resources. Built with a focus on usability and efficiency, it reduces administrative overhead and improves learning outcomes.',
    tags: ['React', 'TypeScript'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYclCX1MNnVWE7eckcmCNPAjy8tp6rmWuvlvETKo-2s3h2YEdxb81axg&s=10',
    liveUrl: 'https://edulearn-demo.vercel.app',
    githubUrl: 'https://github.com/TejaswiniBandaru005/edulearn',
=======
    id: 'neural-canvas',
    title: 'Neural Canvas',
    tagline: 'AI-powered design platform',
    description: 'A real-time collaborative design tool that uses machine learning to suggest layouts, color palettes, and component arrangements.',
    longDescription: 'Neural Canvas reimagines the creative workflow by embedding AI directly into the design process. Built with a WebSocket-based collaboration engine, it allows multiple designers to work on the same canvas simultaneously. The ML suggestion engine analyzes design patterns and recommends improvements in real time, reducing design iteration time by 60%.',
    tags: ['React', 'TypeScript', 'WebSocket', 'TensorFlow.js', 'Canvas API'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://neural-canvas-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/neural-canvas',
>>>>>>> origin/main
    metrics: [
      { label: 'Active Users', value: '12K+' },
      { label: 'Designs Created', value: '85K+' },
      { label: 'Avg. Load Time', value: '0.8s' },
    ],
  },
  {
<<<<<<< HEAD
    id: 'ecommerce-platform',
    title: 'ClickCart-Connect',
    tagline: 'Scalable online shopping solution',
    description: 'A feature-rich e-commerce platform with inventory management, payment processing, and customer analytics.',
    longDescription: 'The Ecommerce Platform is a robust solution for businesses looking to establish a strong online presence. It includes seamless integration with popular payment gateways, advanced inventory management, and detailed analytics to drive sales growth.',
    tags: ['React', 'TypeScript'],

    image: ecommerceImage,
    liveUrl: 'https://ClickCart-Connect-demo.vercel.app',
    githubUrl: 'https://github.com/TejaswiniBandaru005/ClickCart-Connect',
=======
    id: 'orbital-task',
    title: 'Orbital Task',
    tagline: '3D project management board',
    description: 'A spatial project management tool where tasks orbit around milestones in an interactive 3D galaxy view.',
    longDescription: 'Orbital Task transforms traditional project management into an immersive 3D experience. Tasks are represented as planets orbiting milestone stars, with dependency chains visualized as gravitational connections. Powered by React Three Fiber and a real-time sync backend, teams can drag, rearrange, and zoom through their project universe.',
    tags: ['React Three Fiber', 'Node.js', 'PostgreSQL', 'Supabase', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://orbital-task-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/orbital-task',
>>>>>>> origin/main
    metrics: [
      { label: 'Teams Onboarded', value: '340+' },
      { label: 'Tasks Managed', value: '1.2M+' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
<<<<<<< HEAD
    id: 'careconnect',
    title: 'CareConnect Hospital Management',
    tagline: 'A comprehensive hospital Management system for efficient healthcare operations',
    description: 'A streaming analytics dashboard with animated charts, heatmaps, and predictive forecasting powered by live data pipelines.',
    longDescription: 'Pulse Analytics processes millions of events per minute and renders them as beautiful, animated visualizations. The dashboard features custom-built chart components with WebGL rendering for 60fps performance even with 100K+ data points. The predictive forecasting module uses time-series models to surface trends before they happen.',
    tags: ['React', 'TypeScript', ''],
    image: 'https://i.pinimg.com/736x/65/5a/15/655a15abf76e4e29a10f09eef7093cd2.jpg',
    liveUrl: 'https://pulse-analytics-demo.vercel.app',
    githubUrl: 'https://github.com/TejaswiniBandaru005/CareConnect',
=======
    id: 'pulse-analytics',
    title: 'Pulse Analytics',
    tagline: 'Real-time data visualization suite',
    description: 'A streaming analytics dashboard with animated charts, heatmaps, and predictive forecasting powered by live data pipelines.',
    longDescription: 'Pulse Analytics processes millions of events per minute and renders them as beautiful, animated visualizations. The dashboard features custom-built chart components with WebGL rendering for 60fps performance even with 100K+ data points. The predictive forecasting module uses time-series models to surface trends before they happen.',
    tags: ['Next.js', 'D3.js', 'WebGL', 'Redis', 'Python'],
    image: 'https://images.pexels.com/photos/5900574/pexels-photo-5900574.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://pulse-analytics-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/pulse-analytics',
>>>>>>> origin/main
    metrics: [
      { label: 'Events / sec', value: '50K+' },
      { label: 'Data Sources', value: '24+' },
      { label: 'Query Speed', value: '< 50ms' },
    ],
  },
  {
<<<<<<< HEAD
    id: 'weather-condition',
    title: 'Weather Condition',
    tagline: 'Real-time weather information platform',
    description: 'A comprehensive weather forecasting app with interactive maps, detailed reports, and personalized alerts.',
    longDescription: 'Weather Condition provides accurate, real-time weather information with a user-friendly interface. Users can view detailed forecasts, access historical data, and receive personalized alerts based on their location and preferences. The app integrates with multiple weather APIs to ensure the most up-to-date information.',
    tags: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    image: weatherImage,
    liveUrl: 'https://tejaswinibandaru005.github.io/Weather-Condition/',
    githubUrl: 'https://github.com/TejaswiniBandaru005/Weather-Condition',
=======
    id: 'echo-commerce',
    title: 'Echo Commerce',
    tagline: 'Immersive 3D e-commerce store',
    description: 'A next-gen shopping experience with 3D product previews, AR try-on, and a frictionless checkout powered by Stripe.',
    longDescription: 'Echo Commerce bridges the gap between physical and digital retail. Customers can rotate, zoom, and inspect products in 3D, then use AR to preview items in their own space. The platform integrates Stripe for payments, Algolia for instant search, and a custom recommendation engine that boosts average order value by 35%.',
    tags: ['React', 'Three.js', 'Stripe', 'Algolia', 'AWS S3'],
    image: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://echo-commerce-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/echo-commerce',
>>>>>>> origin/main
    metrics: [
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'Products', value: '10K+' },
      { label: 'AOV Lift', value: '+35%' },
    ],
  },
<<<<<<< HEAD
=======
  {
    id: 'synth-voice',
    title: 'Synth Voice',
    tagline: 'AI voice assistant SDK',
    description: 'A developer-first SDK for embedding natural voice interactions into any web app with sub-200ms response latency.',
    longDescription: 'Synth Voice provides a plug-and-play SDK that brings voice commands, dictation, and conversational AI to web applications. With streaming audio processing and edge-deployed models, it achieves human-like response times. The SDK supports 30+ languages and includes a visual voice editor for designing conversation flows.',
    tags: ['TypeScript', 'Web Speech API', 'WebRTC', 'Edge Functions', 'Vite'],
    image: 'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://synth-voice-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/synth-voice',
    metrics: [
      { label: 'Languages', value: '30+' },
      { label: 'Latency', value: '< 200ms' },
      { label: 'Accuracy', value: '97.2%' },
    ],
  },
  {
    id: 'terraform-viz',
    title: 'Terraform Visualizer',
    tagline: 'Cloud infrastructure mapper',
    description: 'An interactive tool that parses Terraform configs and generates beautiful, navigable architecture diagrams in real time.',
    longDescription: 'Terraform Visualizer reads your infrastructure-as-code files and produces animated, interactive architecture diagrams. Teams can click any resource to see its dependencies, drift status, and cost estimates. The tool supports Terraform, Pulumi, and CloudFormation, making it the universal visual layer for cloud infrastructure.',
    tags: ['React', 'Go', 'D3.js', 'Docker', 'Terraform'],
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://terraform-viz-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/terraform-visualizer',
    metrics: [
      { label: 'Resources Mapped', value: '500K+' },
      { label: 'Cloud Providers', value: '12+' },
      { label: 'Fortune 500 Users', value: '8+' },
    ],
  },
>>>>>>> origin/main
];

export const skills: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Languages', icon: 'Code2' },
  { name: 'React', level: 96, category: 'Frontend', icon: 'Atom' },
<<<<<<< HEAD
  { name: 'Java', level: 92, category: 'Backend', icon: 'Server' },
  { name: 'Python', level: 80, category: 'Languages', icon: 'Terminal' },
  { name: 'Tailwind CSS', level: 94, category: 'Frontend', icon: 'Palette' },
  { name: 'Agentis AI', level: 85, category: 'AI & Tools', icon: 'Brain' },
  // { name: 'AWS / Docker', level: 82, category: 'DevOps', icon: 'Cloud' },
=======
  { name: 'Next.js', level: 90, category: 'Frontend', icon: 'Globe' },
  { name: 'Three.js / R3F', level: 85, category: '3D & Graphics', icon: 'Box' },
  { name: 'Node.js', level: 92, category: 'Backend', icon: 'Server' },
  { name: 'PostgreSQL', level: 88, category: 'Database', icon: 'Database' },
  { name: 'Python', level: 80, category: 'Languages', icon: 'Terminal' },
  { name: 'AWS / Docker', level: 82, category: 'DevOps', icon: 'Cloud' },
  { name: 'GraphQL', level: 85, category: 'Backend', icon: 'Share2' },
  { name: 'Tailwind CSS', level: 94, category: 'Frontend', icon: 'Palette' },
  { name: 'Framer Motion', level: 90, category: 'Animation', icon: 'Sparkles' },
  { name: 'Supabase', level: 87, category: 'Backend', icon: 'Zap' },
>>>>>>> origin/main
];

export const achievements: Achievement[] = [
  {
<<<<<<< HEAD
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
=======
    title: 'Winner — HackTheStack 2024',
    description: 'First place out of 500+ teams for building an AI-powered accessibility tool in 48 hours.',
    year: '2024',
    icon: 'Trophy',
  },
  {
    title: 'Speaker — ReactConf India',
    description: 'Delivered a talk on "Building Performant 3D Web Experiences with React Three Fiber" to 2,000+ attendees.',
    year: '2023',
    icon: 'Mic',
  },
  {
    title: 'Open Source Contributor',
    description: '500+ contributions across 15 repositories. Maintainer of two popular React animation libraries.',
    year: '2022 — Present',
    icon: 'GitBranch',
  },
  {
    title: 'Google Developer Expert — Web',
    description: 'Recognized by Google for expertise in web technologies and community contributions.',
    year: '2023',
    icon: 'Star',
  },
  {
    title: 'Women in Tech Award',
    description: 'Honored for excellence in engineering and advocacy for diversity in the tech community.',
    year: '2023',
    icon: 'Heart',
  },
  {
    title: 'Top 1% — GitHub India',
    description: 'Ranked among the top 1% most active developers on GitHub in India by contribution count.',
    year: '2024',
    icon: 'Flame',
  },
];

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect — Professional',
    issuer: 'Amazon Web Services',
    year: '2024',
    credentialId: 'AWS-PSA-2024-7821',
    url: 'https://aws.amazon.com/verification',
    icon: 'Cloud',
  },
  {
    title: 'Meta Front-End Developer Professional',
    issuer: 'Meta / Coursera',
    year: '2023',
    credentialId: 'META-FE-2023-3456',
    url: 'https://coursera.org/verify',
    icon: 'Code2',
  },
  {
    title: 'Google UX Design Professional',
    issuer: 'Google / Coursera',
    year: '2023',
    credentialId: 'GOOG-UX-2023-9120',
    url: 'https://coursera.org/verify',
    icon: 'Palette',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    year: '2022',
    credentialId: 'MDB-DEV-2022-5678',
    url: 'https://university.mongodb.com',
    icon: 'Database',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google / TensorFlow',
    year: '2022',
    credentialId: 'TF-DEV-2022-2233',
    url: 'https://tensorflow.org/certificate',
    icon: 'Brain',
  },
  {
    title: 'Scrum Master Certified (SMC)',
    issuer: 'Scrum Institute',
    year: '2021',
    credentialId: 'SMC-2021-1100',
    url: 'https://scruminstitute.org',
    icon: 'Users',
  },
>>>>>>> origin/main
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
<<<<<<< HEAD
    username: 'Bandaru_Tejaswini',
    url: 'https://leetcode.com/u/Bandaru_Tejaswini/',
    stats:[],
=======
    username: 'tejaswini_b',
    url: 'https://leetcode.com/tejaswini_b',
    stats: [
      { label: 'Problems Solved', value: '520+' },
      { label: 'Contest Rating', value: '1,842' },
      { label: 'Global Rank', value: 'Top 5%' },
    ],
>>>>>>> origin/main
    icon: 'Code2',
    color: '#f59e0b',
  },
  {
    platform: 'GitHub',
<<<<<<< HEAD
    username: 'TejaswiniBandaru005',
    url: 'https://github.com/TejaswiniBandaru005',
    stats: [
      // { label: 'Repositories', value: '48' },
      // { label: 'Contributions', value: '2,100+' },
      // { label: 'Followers', value: '1.2K' },
=======
    username: 'tejaswinibandaru',
    url: 'https://github.com/tejaswinibandaru',
    stats: [
      { label: 'Repositories', value: '48' },
      { label: 'Contributions', value: '2,100+' },
      { label: 'Followers', value: '1.2K' },
>>>>>>> origin/main
    ],
    icon: 'Github',
    color: '#6366f1',
  },
  {
    platform: 'HackerRank',
<<<<<<< HEAD
    username: 'Bandaru Tejaswini',
    url: 'https://www.hackerrank.com/profile/bandarutejaswin2',
    stats: [
      // { label: 'Badges', value: '12' },
      // { label: 'Problems', value: '180+' },
      // { label: 'Rank', value: 'Gold' },
=======
    username: 'tejaswini_b',
    url: 'https://hackerrank.com/tejaswini_b',
    stats: [
      { label: 'Badges', value: '12' },
      { label: 'Problems', value: '180+' },
      { label: 'Rank', value: 'Gold' },
>>>>>>> origin/main
    ],
    icon: 'Trophy',
    color: '#00ea64',
  },
  {
<<<<<<< HEAD
    platform: 'Guvi',
    username: 'Bandaru Tejaswini',
    url: 'https://www.guvi.in/bandarutejaswini835330',
    stats: [
      // { label: 'Rating', value: '1,920' },
      // { label: 'Stars', value: '4' },
      // { label: 'Contests', value: '35+' },
    ],
    icon: 'GraduationCap',
=======
    platform: 'CodeChef',
    username: 'tejaswini_b',
    url: 'https://codechef.com/tejaswini_b',
    stats: [
      { label: 'Rating', value: '1,920' },
      { label: 'Stars', value: '4' },
      { label: 'Contests', value: '35+' },
    ],
    icon: 'Flame',
>>>>>>> origin/main
    color: '#5b4638',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
<<<<<<< HEAD
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
=======
    institution: 'Indian Institute of Technology, Hyderabad',
    period: '2017 — 2021',
    description: 'Specialized in Human-Computer Interaction and Distributed Systems. Thesis on "Real-time Collaborative Editing using CRDTs". CGPA: 9.1/10.',
    grade: 'CGPA: 9.1 / 10',
  },
  {
    degree: 'Higher Secondary (PCM + CS)',
    institution: 'Narayana Junior College, Hyderabad',
    period: '2015 — 2017',
    description: 'Topper in Computer Science. Represented the college at the National Math Olympiad and won a silver medal.',
    grade: 'Percentage: 98.2%',
  },
  {
    degree: 'Secondary School (CBSE)',
    institution: 'Delhi Public School, Hyderabad',
    period: '2015',
    description: 'School prefect and president of the coding club. Led the robotics team to a state-level championship.',
    grade: 'CGPA: 10 / 10',
>>>>>>> origin/main
  },
];

export const experience: ExperienceItem[] = [
  {
<<<<<<< HEAD
    role: 'Intern',
    company: 'KSHITIJ CODEFORGE',
    period: '3 Months',
    description: 'Built LMS Platform with some Chatbot functionality for better user engagement.',
=======
    role: 'Senior Full-Stack Developer',
    company: 'TechNova Solutions',
    period: '2023 — Present',
    description: 'Leading development of scalable web platforms serving 100K+ users. Architected micro-frontend systems and mentored a team of 5 developers.',
  },
  {
    role: 'Frontend Engineer',
    company: 'PixelForge Studios',
    period: '2021 — 2023',
    description: 'Built award-winning interactive web experiences using React, Three.js, and WebGL. Improved page load performance by 40%.',
  },
  {
    role: 'Software Developer Intern',
    company: 'InnoLabs',
    period: '2020 — 2021',
    description: 'Developed REST APIs and React components for a SaaS analytics dashboard. Shipped 15+ features to production.',
>>>>>>> origin/main
  },
];

export const hobbies: Hobby[] = [
  {
    name: 'Drawing & Sketching',
<<<<<<< HEAD
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
=======
    description: 'I love bringing ideas to life on paper — portraits, landscapes, and digital illustrations using Procreate.',
    icon: 'PenTool',
  },
  {
    name: 'Reading',
    description: 'Avid reader of sci-fi, design theory, and psychology. Currently exploring works by Cal Newport and Don Norman.',
    icon: 'BookOpen',
  },
  {
    name: 'Photography',
    description: 'Capturing moments from my travels — street, nature, and architecture. Shooting on a Fujifilm X-T30.',
    icon: 'Camera',
  },
  {
    name: 'Music Production',
    description: 'Producing lo-fi beats and ambient soundscapes in my free time. Self-taught on Ableton Live.',
    icon: 'Music',
  },
  {
    name: 'Hiking',
    description: 'Exploring trails across the Western Ghats. Completed the Hampta Pass trek in 2023.',
    icon: 'Mountain',
  },
  {
    name: 'Open Source',
    description: 'Contributing to React and Three.js ecosystem libraries. Maintainer of react-glow and drei-utils.',
    icon: 'GitBranch',
>>>>>>> origin/main
  },
];

export const techTicker = [
<<<<<<< HEAD
  'Java', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
  'React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'PostgreSQL', 'Supabase',
  'Git', 'GitHub', 'REST APIs',
  'Flutter', 'Dart',
  'SAP ABAP Cloud', 'Agentic AI', 'LLMs', 'Prompt Engineering', 'AI Security',
  'Docker', 'Vite', 'Framer Motion',
=======
  'TypeScript', 'React', 'Next.js', 'Three.js', 'Node.js', 'PostgreSQL',
  'GraphQL', 'AWS', 'Docker', 'Python', 'Tailwind', 'Framer Motion',
  'Supabase', 'Vite', 'WebGL', 'TensorFlow.js', 'Redis', 'Stripe',
>>>>>>> origin/main
];
