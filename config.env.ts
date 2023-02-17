import { load } from 'ts-dotenv';

const envSchema = {
  PORT: Number,
  NODE_ENV: String,
};

const env = load(envSchema);

export default env;
