import { z } from 'zod';

const Iso8601 = z.string().regex(/^(\d{4}-\d{2}-\d{2}|\d{4}-\d{2}|\d{4})$/);

const LabelsSchema = z.object({
    works: z.string(),
    planguages: z.string(),
    team: z.string(),
    tools: z.string(),
    environment: z.string(),
    methods: z.string(),
    worksSkill: z.string(),
    diploma: z.string(),
    language: z.string(),
    interests: z.string(),
});

const LocationSchema = z.object({
    address: z.string().optional(),
    postalCode: z.string().optional(),
    city: z.string(),
    countryCode: z.string(),
    region: z.string().optional(),
});

const ProfilesSchema = z.object({
    network: z.string(),
    username: z.string(),
    url: z.string(),
});

const BasicsSchema = z.object({
    name: z.string(),
    label: z.string(),
    email: z.email(),
    phone: z.string(),
    birth: Iso8601.optional(),
    location: LocationSchema,
    profiles: z.array(ProfilesSchema).optional(),
    summary: z.string().optional(),
});

const TeamSchema = z.object({
    back: z.number(),
    front: z.number(),
    fullStack: z.number(),
    description: z.string(),
});

const HighlightSchema = z.object({
    subject: z.string(),
    cat: z.string().optional(),
    alternative: z.string().optional(),
    details: z.array(z.string()).optional(),
});

const WorkSchema = z.object({
    name: z.string(),
    location: z.string().optional(),
    description: z.string().optional(),
    position: z.string(),
    url: z.string().optional(),
    startDate: Iso8601.optional(),
    endDate: Iso8601.optional(),
    summary: z.string().optional(),
    team: TeamSchema.optional(),
    highlights: z.array(HighlightSchema).optional(),
    planguages: z.array(z.string()).optional(),
    env: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
    method: z.array(z.string()).optional(),
});

const EducationSchema = z.object({
    institution: z.string(),
    url: z.string(),
    area: z.string(),
    endDate: Iso8601,
});

const SkillSchema = z.object({
    name: z.string(),
    keywords: z.array(z.string()),
});

const LanguageSchema = z.object({
    language: z.string(),
    fluency: z.string(),
});

const InterestSchema = z.object({
    name: z.string(),
});

export const ResumeSchemaForZod = z.object({
    labels: LabelsSchema,
    basics: BasicsSchema,
    work: z.array(WorkSchema),
    education: z.array(EducationSchema),
    skills: z.array(SkillSchema),
    languages: z.array(LanguageSchema),
    interests: z.array(InterestSchema),
});

export type Resume = z.infer<typeof ResumeSchemaForZod>;