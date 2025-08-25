export type Iso8601 = string;

export type Labels = {
    works: string;
    planguages: string;
    team: string;
    tools: string;
    environment: string;
    methods: string;
    worksSkill: string;
    diploma: string;
    language: string;
    interests: string;
};

export type Location = {
    address?: string;
    postalCode?: string;
    city: string;
    countryCode: string;
    region?: string;
};

export type Profiles = {
    network: string;
    username: string;
    url: string;
};

export type Basics = {
    name: string;
    label: string;
    email: string;
    phone: string;
    birth?: string;
    location: Location;
    profiles?: Profiles[];
    summary?: string;
};

export type Team = {
    back: number;
    front: number;
    fullStack: number;
    description: string;
};

export type Highlight = {
    subject: string;
    cat?: string;
    alternative?: string;
    details?: string[];
};

export type Work = {
    name: string;
    location?: string;
    description?: string;
    position: string;
    url?: string;
    startDate?: Iso8601;
    endDate?: Iso8601;
    summary?: string;
    team?: Team;
    highlights?: Highlight[];
    planguages?: string[];
    env?: string[];
    tools?: string[];
    method?: string[];
};

export type Education = {
    institution: string;
    url: string;
    area: string;
    endDate: Iso8601;
};

export type Skill = {
    name: string;
    keywords: string[];
};

export type Language = {
    language: string;
    fluency: string;
};

export type Interest = {
    name: string;
};

export type ResumeSchema = {
    labels: Labels;
    basics: Basics;
    work: Work[];
    education: Education[];
    skills: Skill[];
    languages: Language[];
    interests: Interest[];
};