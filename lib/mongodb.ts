import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

// Create a cached connection variable globally to reuse the connection
declare global {
  var mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
}

// Initialize cached connection if it doesn't exist
global.mongoose = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase(): Promise<Mongoose> {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGO_URI, {});
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}