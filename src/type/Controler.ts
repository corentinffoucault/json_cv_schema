import z from 'zod';

import { ResumeSchema } from './type.js';
import { ResumeSchemaForZod } from './ZodType.js';

export default class {
    public static isValidResume(resume: unknown): resume is ResumeSchema {
        const result = ResumeSchemaForZod.safeParse(resume);
        if (!result.success) {
            throw new Error("JSON invalide: " + z.prettifyError(result.error));
        }
        return true;
    }
}