export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  experience: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  mode: 'Remote' | 'Onsite' | 'Hybrid';
  tags: string[];
  postedAt: string;
  description: string;
  eligibility: string;
  qualifications: string[];
  skills: string[];
  batch: string;
  category: 'off-campus' | 'internship' | 'work-from-home' | 'government';
  featured?: boolean;
}

export const jobs: Job[] = [
  {
    id: '1',
    slug: 'software-engineer-amazon',
    title: 'Software Development Engineer',
    company: 'Amazon',
    companyLogo: 'https://logo.clearbit.com/amazon.com',
    location: 'Bangalore, India',
    salary: '₹15-25 LPA',
    experience: '0-2 years',
    type: 'Full-time',
    mode: 'Hybrid',
    tags: ['Fresher', 'Tech', 'MNC'],
    postedAt: '2 days ago',
    description: 'Join Amazon as a Software Development Engineer and work on challenging problems at scale. You will design, develop, and maintain software solutions that impact millions of customers worldwide.',
    eligibility: 'B.Tech/B.E in Computer Science or related field',
    qualifications: ['Bachelor\'s degree in Computer Science', 'Strong programming fundamentals', 'Knowledge of data structures and algorithms'],
    skills: ['Java', 'Python', 'AWS', 'Data Structures', 'System Design'],
    batch: '2023, 2024, 2025',
    category: 'off-campus',
    featured: true
  },
  {
    id: '2',
    slug: 'frontend-developer-microsoft',
    title: 'Frontend Developer',
    company: 'Microsoft',
    companyLogo: 'https://logo.clearbit.com/microsoft.com',
    location: 'Hyderabad, India',
    salary: '₹18-30 LPA',
    experience: '0-3 years',
    type: 'Full-time',
    mode: 'Hybrid',
    tags: ['Fresher', 'Tech', 'MNC'],
    postedAt: '1 day ago',
    description: 'Microsoft is looking for talented Frontend Developers to build world-class user experiences. Work with cutting-edge technologies and collaborate with teams globally.',
    eligibility: 'B.Tech/B.E/MCA in Computer Science or related field',
    qualifications: ['Bachelor\'s or Master\'s in Computer Science', 'Experience with modern JavaScript frameworks', 'Strong UI/UX sensibilities'],
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript', 'Azure'],
    batch: '2023, 2024',
    category: 'off-campus',
    featured: true
  },
  {
    id: '3',
    slug: 'data-analyst-intern-google',
    title: 'Data Analyst Intern',
    company: 'Google',
    companyLogo: 'https://logo.clearbit.com/google.com',
    location: 'Bangalore, India',
    salary: '₹80,000/month',
    experience: 'Fresher',
    type: 'Internship',
    mode: 'Onsite',
    tags: ['Internship', 'Tech', 'MNC'],
    postedAt: '3 days ago',
    description: 'Join Google as a Data Analyst Intern and work on real-world data challenges. Learn from the best in the industry and gain hands-on experience with big data technologies.',
    eligibility: 'Currently pursuing B.Tech/B.E/M.Tech in any stream',
    qualifications: ['Currently enrolled in undergraduate or graduate program', 'Strong analytical skills', 'Basic knowledge of SQL and Python'],
    skills: ['SQL', 'Python', 'Excel', 'Data Visualization', 'Statistics'],
    batch: '2025, 2026',
    category: 'internship',
    featured: true
  },
  {
    id: '4',
    slug: 'content-writer-remote-zomato',
    title: 'Content Writer',
    company: 'Zomato',
    companyLogo: 'https://logo.clearbit.com/zomato.com',
    location: 'Remote',
    salary: '₹4-6 LPA',
    experience: '0-1 years',
    type: 'Full-time',
    mode: 'Remote',
    tags: ['Remote', 'Fresher', 'Content'],
    postedAt: '5 days ago',
    description: 'Zomato is hiring Content Writers to craft compelling stories about food and dining. Work from anywhere and be part of India\'s largest food delivery platform.',
    eligibility: 'Any graduate with excellent writing skills',
    qualifications: ['Bachelor\'s degree in any field', 'Excellent English writing skills', 'Creative mindset'],
    skills: ['Content Writing', 'SEO', 'Copywriting', 'Social Media', 'Research'],
    batch: '2022, 2023, 2024',
    category: 'work-from-home'
  },
  {
    id: '5',
    slug: 'associate-consultant-accenture',
    title: 'Associate Software Engineer',
    company: 'Accenture',
    companyLogo: 'https://logo.clearbit.com/accenture.com',
    location: 'Mumbai, India',
    salary: '₹4.5-7 LPA',
    experience: '0-1 years',
    type: 'Full-time',
    mode: 'Hybrid',
    tags: ['Fresher', 'Tech', 'MNC'],
    postedAt: '1 week ago',
    description: 'Accenture is hiring fresh graduates for the role of Associate Software Engineer. Join our technology practice and work on exciting digital transformation projects.',
    eligibility: 'B.Tech/B.E/MCA with 60% aggregate',
    qualifications: ['Bachelor\'s degree with 60% or above', 'No active backlogs', 'Good communication skills'],
    skills: ['Java', 'Python', 'SQL', 'Problem Solving', 'Communication'],
    batch: '2024, 2025',
    category: 'off-campus',
    featured: true
  },
  {
    id: '6',
    slug: 'backend-developer-ibm',
    title: 'Backend Developer',
    company: 'IBM',
    companyLogo: 'https://logo.clearbit.com/ibm.com',
    location: 'Pune, India',
    salary: '₹8-14 LPA',
    experience: '0-2 years',
    type: 'Full-time',
    mode: 'Onsite',
    tags: ['Fresher', 'Tech', 'MNC'],
    postedAt: '4 days ago',
    description: 'IBM is looking for Backend Developers to build scalable enterprise solutions. Work with cloud technologies and contribute to innovative projects.',
    eligibility: 'B.Tech/B.E in Computer Science or IT',
    qualifications: ['Bachelor\'s in Computer Science or related field', 'Strong programming skills', 'Understanding of databases'],
    skills: ['Node.js', 'Python', 'MongoDB', 'Docker', 'Kubernetes'],
    batch: '2023, 2024',
    category: 'off-campus',
    featured: true
  },
  {
    id: '7',
    slug: 'customer-support-flipkart-remote',
    title: 'Customer Support Executive',
    company: 'Flipkart',
    companyLogo: 'https://logo.clearbit.com/flipkart.com',
    location: 'Remote',
    salary: '₹3-4.5 LPA',
    experience: 'Fresher',
    type: 'Full-time',
    mode: 'Remote',
    tags: ['Remote', 'Fresher', 'Support'],
    postedAt: '2 days ago',
    description: 'Join Flipkart\'s customer support team and help millions of customers with their queries. Work from home with flexible timings.',
    eligibility: 'Any graduate with good communication skills',
    qualifications: ['Graduate in any discipline', 'Fluent in English and Hindi', 'Basic computer knowledge'],
    skills: ['Communication', 'Problem Solving', 'Customer Service', 'Patience', 'Computer Skills'],
    batch: '2022, 2023, 2024',
    category: 'work-from-home'
  },
  {
    id: '8',
    slug: 'ssc-cgl-2024',
    title: 'SSC CGL 2024 - Multiple Posts',
    company: 'Staff Selection Commission',
    companyLogo: 'https://logo.clearbit.com/ssc.nic.in',
    location: 'All India',
    salary: '₹25,000 - ₹1,12,000',
    experience: 'Fresher',
    type: 'Full-time',
    mode: 'Onsite',
    tags: ['Government', 'SSC', 'Central Govt'],
    postedAt: '1 week ago',
    description: 'SSC CGL 2024 recruitment for various Group B and Group C posts in central government ministries and departments. Secure your career with a government job.',
    eligibility: 'Bachelor\'s degree from recognized university',
    qualifications: ['Graduate in any discipline', 'Age 18-32 years', 'Indian citizenship'],
    skills: ['General Awareness', 'Quantitative Aptitude', 'English', 'Reasoning'],
    batch: 'All batches',
    category: 'government'
  },
  {
    id: '9',
    slug: 'ui-ux-intern-swiggy',
    title: 'UI/UX Design Intern',
    company: 'Swiggy',
    companyLogo: 'https://logo.clearbit.com/swiggy.com',
    location: 'Bangalore, India',
    salary: '₹40,000/month',
    experience: 'Fresher',
    type: 'Internship',
    mode: 'Hybrid',
    tags: ['Internship', 'Design', 'Startup'],
    postedAt: '6 days ago',
    description: 'Swiggy is looking for creative UI/UX Design Interns to help design delightful user experiences for millions of food lovers.',
    eligibility: 'Currently pursuing design or related course',
    qualifications: ['Enrolled in design program', 'Portfolio required', 'Knowledge of design tools'],
    skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Adobe XD'],
    batch: '2025, 2026',
    category: 'internship'
  },
  {
    id: '10',
    slug: 'ibps-po-2024',
    title: 'IBPS PO 2024 - Probationary Officer',
    company: 'IBPS',
    companyLogo: 'https://logo.clearbit.com/ibps.in',
    location: 'All India',
    salary: '₹36,000 - ₹63,000',
    experience: 'Fresher',
    type: 'Full-time',
    mode: 'Onsite',
    tags: ['Government', 'Banking', 'IBPS'],
    postedAt: '3 days ago',
    description: 'IBPS PO recruitment for Probationary Officer posts in various public sector banks. Start your banking career with this prestigious position.',
    eligibility: 'Bachelor\'s degree with 60% marks',
    qualifications: ['Graduate with minimum 60%', 'Age 20-30 years', 'Computer literacy'],
    skills: ['Banking Awareness', 'Quantitative Aptitude', 'English', 'Reasoning', 'Computer Knowledge'],
    batch: 'All batches',
    category: 'government'
  },
  {
    id: '11',
    slug: 'data-entry-operator-remote',
    title: 'Data Entry Operator',
    company: 'TCS',
    companyLogo: 'https://logo.clearbit.com/tcs.com',
    location: 'Remote',
    salary: '₹2.5-3.5 LPA',
    experience: 'Fresher',
    type: 'Full-time',
    mode: 'Remote',
    tags: ['Remote', 'Fresher', 'Data Entry'],
    postedAt: '1 day ago',
    description: 'TCS is hiring Data Entry Operators for a work-from-home position. Flexible hours and good typing speed required.',
    eligibility: 'Any graduate with typing skills',
    qualifications: ['Graduate in any field', 'Typing speed 40+ WPM', 'Basic Excel knowledge'],
    skills: ['Data Entry', 'Excel', 'Typing', 'Attention to Detail', 'MS Office'],
    batch: '2022, 2023, 2024',
    category: 'work-from-home'
  },
  {
    id: '12',
    slug: 'ml-engineer-intern-nvidia',
    title: 'ML Engineer Intern',
    company: 'NVIDIA',
    companyLogo: 'https://logo.clearbit.com/nvidia.com',
    location: 'Bangalore, India',
    salary: '₹1,00,000/month',
    experience: 'Fresher',
    type: 'Internship',
    mode: 'Onsite',
    tags: ['Internship', 'AI/ML', 'Tech'],
    postedAt: '5 days ago',
    description: 'Join NVIDIA as an ML Engineer Intern and work on cutting-edge AI technologies. Be part of the team shaping the future of computing.',
    eligibility: 'Pursuing M.Tech/MS in CS/AI/ML',
    qualifications: ['Currently enrolled in M.Tech/MS program', 'Strong mathematics background', 'Research experience preferred'],
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'CUDA'],
    batch: '2025, 2026',
    category: 'internship'
  }
];

export const categories = [
  {
    id: 'off-campus',
    name: 'Off Campus Jobs',
    description: 'Direct hiring from top companies',
    icon: 'building',
    count: jobs.filter(j => j.category === 'off-campus').length
  },
  {
    id: 'internship',
    name: 'Internships',
    description: 'Paid internships for students',
    icon: 'graduation-cap',
    count: jobs.filter(j => j.category === 'internship').length
  },
  {
    id: 'work-from-home',
    name: 'Work From Home',
    description: 'Remote jobs with flexibility',
    icon: 'home',
    count: jobs.filter(j => j.category === 'work-from-home').length
  },
  {
    id: 'government',
    name: 'Government Jobs',
    description: 'Secure government positions',
    icon: 'landmark',
    count: jobs.filter(j => j.category === 'government').length
  },
  {
    id: 'certifications',
    name: 'Free Certifications',
    description: 'Boost your resume for free',
    icon: 'award',
    count: 50
  }
];

export const featuredCompanies = [
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Accenture', logo: 'https://logo.clearbit.com/accenture.com' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
  { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com' },
  { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com' },
  { name: 'Wipro', logo: 'https://logo.clearbit.com/wipro.com' }
];
