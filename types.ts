
export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Science' | 'Education' | 'Hybrid';
  image: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}
