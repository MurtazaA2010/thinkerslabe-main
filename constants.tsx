
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
    author: 'Murtaza Abdullah',
    date: 'Oct 12, 2023',
    category: 'Education',
    image: 'https://picsum.photos/seed/blog1/600/400',
    content: `
      <p class="mb-6">The classroom of 2030 won't clearly distinguish between "online" and "offline" learning. Instead, AI will serve as an invisible layer of intelligence that supports both teachers and students in real-time.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Personalized Learning at Scale</h3>
      <p class="mb-6">One of the biggest promises of AI in education is true personalization. Algorithms can now analyze a student's learning patterns, identify gaps in understanding, and adapt the curriculum accordingly. This isn't just about faster learning—it's about deeper mastery.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">The Teacher's Co-Pilot</h3>
      <p class="mb-6">Far from replacing teachers, AI tools act as powerful assistants. They can handle administrative tasks, grade assessments, and even suggest lesson plan modifications based on class performance data, freeing up educators to do what they do best: inspire and mentor.</p>
      
      <p>As we move forward, the question isn't whether AI should be in the classroom, but how we can design these tools to be ethical, effective, and conducive to critical thinking.</p>
    `
  },
  {
    id: '2',
    title: 'Understanding Dark Matter with Neural Networks',
    excerpt: 'How our latest algorithms are helping general consumers visualize the invisible parts of our universe.',
    author: 'Murtaza Abdullah',
    date: 'Oct 05, 2023',
    category: 'Science',
    image: 'https://picsum.photos/seed/blog2/600/400',
    content: `
      <p class="mb-6">Dark matter makes up about 85% of the matter in the universe, yet it remains invisible to our telescopes. Traditional methods of detecting it rely on observing gravitational effects, but these are often subtle and hard to interpret.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Neural Networks to the Rescue</h3>
      <p class="mb-6">Recent breakthroughs involve training neural networks on massive simulations of cosmic evolution. These AI models learn to recognize the "fingerprints" of dark matter in the distribution of galaxies and gas clouds.</p>
      
      <p class="mb-6">By applying these trained models to actual telescope data, researchers are visualizing the cosmic web with unprecedented clarity. This allows consumers and enthusiasts to see meaningful representations of the invisible forces shaping our universe.</p>
      
      <p>This intersection of astrophysics and artificial intelligence is opening new windows into the fundamental nature of reality.</p>
    `
  },
  {
    id: '3',
    title: '5 Ways to Improve Your Study Habits Using AI',
    excerpt: 'Practical tips for students and life-long learners to leverage ThinkersLabe tools effectively.',
    author: 'Elena Rodriguez',
    date: 'Sep 28, 2023',
    category: 'Tips',
    image: 'https://picsum.photos/seed/blog3/600/400',
    content: `
      <p class="mb-6">Artificial Intelligence isn't just for coding or data science—it's a powerful tool for everyday learning. Here are five ways you can use ThinkersLabe's AI tools to upgrade your study routine:</p>
      
      <ol class="list-decimal list-inside space-y-4 mb-6 ml-4">
        <li><strong>Summarize Complex Papers:</strong> Feed long academic papers into our summarizer to get the key points instantly.</li>
        <li><strong>Generate Quiz Questions:</strong> Test your knowledge by asking the AI to create practice quizzes from your notes.</li>
        <li><strong>Visualize Concepts:</strong> Use our image generation tools to turn abstract descriptions into visual diagrams.</li>
        <li><strong>Find Analogies:</strong> Stuck on a hard concept? Ask for a simple analogy to make it click.</li>
        <li><strong>Schedule Optimization:</strong> Let AI help you plan your study sessions for maximum retention.</li>
      </ol>
      
      <p>By integrating these tools, you can spend less time organizing and more time explicitly learning.</p>
    `
  }
];
