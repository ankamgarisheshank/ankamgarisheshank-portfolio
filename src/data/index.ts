import { Project, Skill, TimelineItem, Testimonial } from '../types';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'Data Science', level: 70 },
  { name: 'UI/UX Design', level: 85 },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Task Manager',
    description: 'A task management application that uses AI to prioritize and categorize tasks. Built with React, Node.js, and TensorFlow.js.',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'TensorFlow.js', 'MongoDB'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    id: '2',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer behavior.',
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    id: '3',
    title: 'Data Visualization Platform',
    description: 'An interactive platform that transforms complex data into intuitive visualizations for business intelligence.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['D3.js', 'React', 'Python', 'Flask', 'PostgreSQL'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    id: '4',
    title: 'Social Media Analytics Tool',
    description: 'A tool that analyzes social media engagement and provides actionable insights for marketing teams.',
    image: 'https://images.pexels.com/photos/6177612/pexels-photo-6177612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: '1',
    title: 'Bachelor of Technology in Artificial Intelligence',
    organization: 'Anurag University, Hyderabad',
    date: '2023',
    description: 'Specialized in Artificial Intelligence. Worked on projects involving machine learning, deep learning, and data analysis. Graduated with honors.',
    type: 'education',
  },
  {
    id: '2',
    title: 'Intermediate Education',
    organization: 'Sri Medhavi Junior College',
    date: '2021',
    description: 'Focused on mathematics, physics, and chemistry during my intermediate education. Excelled in academics and developed a keen interest in technology.',
    type: 'education',
  },
  {
    id: '3',
    title: 'School Education',
    organization: 'Nagarjuna High School',
    date: '2020',
    description: 'Completed my schooling with a strong foundation in mathematics and science. Participated in various academic and extracurricular activities.',
    type: 'education',
  },
];
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'CRAZY GUYS YOUTH ASSOCIATION',
    quote: 'Working with Shashank is always a delight! His designs are creative, impactful, and perfectly capture the spirit of our events. We truly appreciate his talent and dedication.',
    image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745388687/lgqk9furr2yvuyf8obud.jpg',
    title: undefined,
    company: ''
  },];