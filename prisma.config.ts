<<<<<<< HEAD
﻿import 'dotenv/config';
import { defineConfig, env } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
});
=======
﻿import { defineConfig } from 'prisma/config';

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
>>>>>>> 43da933ded60a213ad6ad93ef83fe759e65d049a
