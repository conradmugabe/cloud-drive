import { z } from 'zod';

const Token = z.string();
type Token = z.infer<typeof Token>;

export { Token };
