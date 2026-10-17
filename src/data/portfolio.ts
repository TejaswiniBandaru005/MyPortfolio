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
];

export const projects: Project[] = [
  {
    id: 'neural-canvas',
    title: 'Neural Canvas',
    tagline: 'AI-powered design platform',
    description: 'A real-time collaborative design tool that uses machine learning to suggest layouts, color palettes, and component arrangements.',
    longDescription: 'Neural Canvas reimagines the creative workflow by embedding AI directly into the design process. Built with a WebSocket-based collaboration engine, it allows multiple designers to work on the same canvas simultaneously. The ML suggestion engine analyzes design patterns and recommends improvements in real time, reducing design iteration time by 60%.',
    tags: ['React', 'TypeScript', 'WebSocket', 'TensorFlow.js', 'Canvas API'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://neural-canvas-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/neural-canvas',
    metrics: [
      { label: 'Active Users', value: '12K+' },
      { label: 'Designs Created', value: '85K+' },
      { label: 'Avg. Load Time', value: '0.8s' },
    ],
  },
  {
    id: 'orbital-task',
    title: 'Orbital Task',
    tagline: '3D project management board',
    description: 'A spatial project management tool where tasks orbit around milestones in an interactive 3D galaxy view.',
    longDescription: 'Orbital Task transforms traditional project management into an immersive 3D experience. Tasks are represented as planets orbiting milestone stars, with dependency chains visualized as gravitational connections. Powered by React Three Fiber and a real-time sync backend, teams can drag, rearrange, and zoom through their project universe.',
    tags: ['React Three Fiber', 'Node.js', 'PostgreSQL', 'Supabase', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://orbital-task-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/orbital-task',
    metrics: [
      { label: 'Teams Onboarded', value: '340+' },
      { label: 'Tasks Managed', value: '1.2M+' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'pulse-analytics',
    title: 'Pulse Analytics',
    tagline: 'Real-time data visualization suite',
    description: 'A streaming analytics dashboard with animated charts, heatmaps, and predictive forecasting powered by live data pipelines.',
    longDescription: 'Pulse Analytics processes millions of events per minute and renders them as beautiful, animated visualizations. The dashboard features custom-built chart components with WebGL rendering for 60fps performance even with 100K+ data points. The predictive forecasting module uses time-series models to surface trends before they happen.',
    tags: ['Next.js', 'D3.js', 'WebGL', 'Redis', 'Python'],
    image: 'https://images.pexels.com/photos/5900574/pexels-photo-5900574.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://pulse-analytics-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/pulse-analytics',
    metrics: [
      { label: 'Events / sec', value: '50K+' },
      { label: 'Data Sources', value: '24+' },
      { label: 'Query Speed', value: '< 50ms' },
    ],
  },
  {
    id: 'echo-commerce',
    title: 'Echo Commerce',
    tagline: 'Immersive 3D e-commerce store',
    description: 'A next-gen shopping experience with 3D product previews, AR try-on, and a frictionless checkout powered by Stripe.',
    longDescription: 'Echo Commerce bridges the gap between physical and digital retail. Customers can rotate, zoom, and inspect products in 3D, then use AR to preview items in their own space. The platform integrates Stripe for payments, Algolia for instant search, and a custom recommendation engine that boosts average order value by 35%.',
    tags: ['React', 'Three.js', 'Stripe', 'Algolia', 'AWS S3'],
    image: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://echo-commerce-demo.vercel.app',
    githubUrl: 'https://github.com/tejaswinibandaru/echo-commerce',
    metrics: [
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'Products', value: '10K+' },
      { label: 'AOV Lift', value: '+35%' },
    ],
  },
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
];

export const skills: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Languages', icon: 'Code2' },
  { name: 'React', level: 96, category: 'Frontend', icon: 'Atom' },
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
];

export const achievements: Achievement[] = [
  {
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
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'tejaswini_b',
    url: 'https://leetcode.com/tejaswini_b',
    stats: [
      { label: 'Problems Solved', value: '520+' },
      { label: 'Contest Rating', value: '1,842' },
      { label: 'Global Rank', value: 'Top 5%' },
    ],
    icon: 'Code2',
    color: '#f59e0b',
  },
  {
    platform: 'GitHub',
    username: 'tejaswinibandaru',
    url: 'https://github.com/tejaswinibandaru',
    stats: [
      { label: 'Repositories', value: '48' },
      { label: 'Contributions', value: '2,100+' },
      { label: 'Followers', value: '1.2K' },
    ],
    icon: 'Github',
    color: '#6366f1',
  },
  {
    platform: 'HackerRank',
    username: 'tejaswini_b',
    url: 'https://hackerrank.com/tejaswini_b',
    stats: [
      { label: 'Badges', value: '12' },
      { label: 'Problems', value: '180+' },
      { label: 'Rank', value: 'Gold' },
    ],
    icon: 'Trophy',
    color: '#00ea64',
  },
  {
    platform: 'CodeChef',
    username: 'tejaswini_b',
    url: 'https://codechef.com/tejaswini_b',
    stats: [
      { label: 'Rating', value: '1,920' },
      { label: 'Stars', value: '4' },
      { label: 'Contests', value: '35+' },
    ],
    icon: 'Flame',
    color: '#5b4638',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
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
  },
];

export const experience: ExperienceItem[] = [
  {
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
  },
];

export const hobbies: Hobby[] = [
  {
    name: 'Drawing & Sketching',
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
  },
];

export const techTicker = [
  'TypeScript', 'React', 'Next.js', 'Three.js', 'Node.js', 'PostgreSQL',
  'GraphQL', 'AWS', 'Docker', 'Python', 'Tailwind', 'Framer Motion',
  'Supabase', 'Vite', 'WebGL', 'TensorFlow.js', 'Redis', 'Stripe',
];
