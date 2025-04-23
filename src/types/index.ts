import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'education' | 'experience';
}

export interface Testimonial {
  title: ReactNode;
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}