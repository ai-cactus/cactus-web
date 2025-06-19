import { Mongoose } from 'mongoose';
import { toast } from 'react-hot-toast';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
      toast: typeof toast;
    }
  }
  
  // Make toast available in the browser's window object
  interface Window {
    toast: typeof toast;
  }
}

export {}