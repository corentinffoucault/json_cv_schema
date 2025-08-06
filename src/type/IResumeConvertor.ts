import type { ResumeSchema } from './Type';

export interface IResumeConvertor {
    generateResume(lang: Intl.LocalesArgument, resumeJson: ResumeSchema): Promise<string>;
}