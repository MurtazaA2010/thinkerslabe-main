
export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Science' | 'Education' | 'Hybrid';
  image: string;
  features: string[];
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface NavItem {
  label: string;
  path: string;
}
