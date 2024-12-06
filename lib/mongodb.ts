import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

// Use globalThis to define the global mongoose connection cache
(globalThis as any).mongoose = (globalThis as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase(): Promise<Mongoose> {
  if ((globalThis as any).mongoose.conn) {
    return (globalThis as any).mongoose.conn;
  }

  if (!(globalThis as any).mongoose.promise) {
    (globalThis as any).mongoose.promise = mongoose.connect(MONGO_URI).then((mongooseInstance) => mongooseInstance);
  }

  (globalThis as any).mongoose.conn = await (globalThis as any).mongoose.promise;
  return (globalThis as any).mongoose.conn;
}
