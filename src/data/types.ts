import { type TagKey } from './tags';

export interface Experience {
    title: string;
    company: string;
    description: string;
    link?: string;
    date: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
    github?: string;
    tags: TagKey[];
}