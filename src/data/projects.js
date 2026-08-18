import businessImage from '../assets/project-business.svg';
import portfolioImage from '../assets/project-portfolio.svg';
import dashboardImage from '../assets/project-dashboard.svg';

export const projects = [
  { id: 1, title: 'Business Landing Page', description: 'A polished, conversion-focused landing page concept for a modern consulting business.', technologies: ['React', 'JavaScript', 'Responsive CSS'], image: businessImage, accent: 'cyan', review: '“Clear, professional, and easy for our customers to navigate.” — Demo Client' },
  { id: 2, title: 'Portfolio Website', description: 'A refined personal portfolio concept designed to present work, skills, and experience with clarity.', technologies: ['React', 'Framer Motion', 'CSS3'], image: portfolioImage, accent: 'violet', review: '“The design feels personal, fast, and thoughtfully organized.” — Demo Client' },
  { id: 3, title: 'Dashboard UI', description: 'A responsive analytics dashboard concept with accessible data cards and clear visual hierarchy.', technologies: ['React', 'JavaScript', 'Data Visualization'], image: dashboardImage, accent: 'blue', review: '“Complex performance data became simple and actionable.” — Demo Client' },
];
