import { z } from 'zod';
import { HasID } from '@entities/base.entity';

const User = HasID.merge(
  z.object({
    name: z.string(),
    email: z.string(),
    profilePicture: z.string(),
  })
);
type User = z.infer<typeof User>;

export { User };
