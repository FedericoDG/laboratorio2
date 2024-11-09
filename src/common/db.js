import { PrismaClient } from '@prisma/client';

let db;

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient();
} else {
  if (!global._prisma) {
    global._prisma = new PrismaClient();
  }
  db = global._prisma;
}

export default db;
