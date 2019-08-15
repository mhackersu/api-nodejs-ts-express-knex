import { Configuration } from './types';

export const config = (environment?: string): Configuration => {
  const env = environment || process.env.NODE_ENV;
  if (env === 'production') {
    return prod;
  }
  return dev;
};