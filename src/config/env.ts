const { VITE_APP_NEV, VITE_APP_API_BASE_URL, VITE_APP_BUCKET_URL } = import.meta.env;

interface Config {
  env: string;
  isProd: boolean;
  isStage: boolean;
  isDev: boolean;
  apiBaseURL: string;
  bucketURL: string;
}

const config: Config = {
  env: VITE_APP_NEV,
  isProd: VITE_APP_NEV === 'production',
  isStage: VITE_APP_NEV === 'staging',
  isDev: VITE_APP_NEV === 'development',
  apiBaseURL: VITE_APP_API_BASE_URL,
  bucketURL: VITE_APP_BUCKET_URL,
};

export default config;
export const { env, isProd, isStage, isDev, apiBaseURL, bucketURL } = config;
