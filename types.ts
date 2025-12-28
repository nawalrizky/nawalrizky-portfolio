export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  year: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}