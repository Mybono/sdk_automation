import { UserRoleType, Credentials } from '../interfaces';

export const env = {
  BASE_URL: 'https://www.saucedemo.com/',
  STANDARD_USER: 'standard_user',
  LOCKED_OUT_USER: 'locked_out_user',
  PROBLEM_USER: 'problem_user',
  GLITCH_USER: 'performance_glitch_user',
  ERROR_USER: 'error_user',
  VISUAL_USER: 'visual_user',
  PASSWORD: 'secret_sauce',
  MONGO_CONNECTION_STRING: 'mongodb://mongo:27017/qa_portfolio',
  TIMEOUT: 5000,
  TEN_SECONDS: 10000,
} as const;

export const CREDENTIALS_MAP: Record<UserRoleType, Credentials> = {
  standard_user: { username: env.STANDARD_USER, password: env.PASSWORD },
  locked_out_user: { username: env.LOCKED_OUT_USER, password: env.PASSWORD },
  problem_user: { username: env.PROBLEM_USER, password: env.PASSWORD },
  performance_glitch_user: {
    username: env.GLITCH_USER,
    password: env.PASSWORD,
  },
  error_user: { username: env.ERROR_USER, password: env.PASSWORD },
  visual_user: { username: env.VISUAL_USER, password: env.PASSWORD },
};
