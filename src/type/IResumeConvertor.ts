import type { ResumeSchema } from './type';

export interface IResumeConvertor {
    generateResume(resumeJson: ResumeSchema): Promise<string>;
}