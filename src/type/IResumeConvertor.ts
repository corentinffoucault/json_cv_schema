import type { ResumeSchema } from './Type';

export interface IResumeConvertor {
    generateResume(resumeJson: ResumeSchema): Promise<string>;
}