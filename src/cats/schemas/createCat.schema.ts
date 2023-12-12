import { z } from 'zod';

export const createCatSchema = z
  .object({
    catName: z.string(),
    catAge: z.number(),
    catBreed: z.string(),
  })
  .required();
export type CreateCatDto = z.infer<typeof createCatSchema>;
