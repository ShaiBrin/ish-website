export interface Job {
    job_title: string;
    company: string;
    dates: string;
    location: string;
    functions: string[];
    tech_stack: string[];
    logo_path: string;
    link: string;
}

export interface Project {
    name: string;
    logo: string;
    tech: string[],
    premise: string,
    description: string;
    link: string;
}

export interface Links {
    links:string[]
}

export interface Social {
    name: string;
    link: string;
    image: string;
}

export interface Profile {
    name: string;
    profession: string;
    description: string[];
}

export interface Tech {
    tech: string;
    image: string;
}