
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
    name: 'QuantumExplorer',
    description: 'An AI-powered physics simulator that lets you visualize subatomic particles and complex wave functions right from your browser.',
    category: 'Science',
    image: 'https://picsum.photos/seed/physics/800/600',
    features: ['Real-time Particle Simulation', 'Interactive Wave Mechanics', 'VR/AR Ready'],
  },
  {
    id: '2',
    name: 'BioSynth Lab',
    description: 'Explore the blueprint of life. BioSynth uses deep learning to help you understand DNA sequencing and cellular biology through gamified modules.',
    category: 'Science',
    image: 'https://picsum.photos/seed/biology/800/600',
    features: ['DNA Sequence Editor', 'Cell Growth Modeling', 'Anatomy Explorer'],
  },
  {
    id: '3',
    name: 'ScribeGenius',
    description: 'The ultimate educational companion. It analyzes your learning style and creates personalized study guides for any subject in seconds.',
    category: 'Education',
    image: 'https://picsum.photos/seed/edu/800/600',
    features: ['Adaptive Learning Paths', 'Smart Note-taking', 'Instant Summaries'],
  },
  {
    id: '4',
    name: 'CosmoJourney',
    description: 'A pocket planetarium that uses AI to map the stars in real-time, teaching users about astrophysics and planetary movements.',
    category: 'Education',
    image: 'https://picsum.photos/seed/space/800/600',
    features: ['AR Star Mapping', 'Black Hole Physics', 'Historical Star Maps'],
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
