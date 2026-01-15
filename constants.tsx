
import { Product, BlogPost, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Phi AI',
    description: 'An AI powered tool to generate STEM animations',
    category: 'Education',
    image: 'https://picsum.photos/seed/physics/800/600',
    features: ['Prompt to Animation', 'Mathematical Equations', 'Mathematical Formulas'],
    link: "http://youtube.com"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'Why AI is the New Blackboard',
    excerpt: 'The transition from traditional teaching to AI-integrated classrooms is happening faster than we thought.',
    author: 'Dr. Sarah Chen',
    date: 'Oct 12, 2023',
    category: 'Education',
    image: 'https://picsum.photos/seed/blog1/600/400',
  },
  {
    id: '2',
    title: 'Understanding Dark Matter with Neural Networks',
    excerpt: 'How our latest algorithms are helping general consumers visualize the invisible parts of our universe.',
    author: 'Marcus Thorne',
    date: 'Oct 05, 2023',
    category: 'Science',
    image: 'https://picsum.photos/seed/blog2/600/400',
  },
  {
    id: '3',
    title: '5 Ways to Improve Your Study Habits Using AI',
    excerpt: 'Practical tips for students and life-long learners to leverage ThinkersLabe tools effectively.',
    author: 'Elena Rodriguez',
    date: 'Sep 28, 2023',
    category: 'Tips',
    image: 'https://picsum.photos/seed/blog3/600/400',
  }
];
