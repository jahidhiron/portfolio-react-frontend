/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_APP_NEV: string;
  VITE_APP_SENTRY_DSN: string;
  VITE_APP_API_BASE_URL: string;
  VITE_APP_BUCKET_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
