export interface UserState {
  token: {
    accessToken?: string;
    refreshToken?: string;
  };
}

interface Payload {
  method: string;
  url: string;
  headers?: Record<string, string>;
  data?: any;
}

export interface HttpClientParams {
  payload: Payload;
  isLoader?: boolean;
  authorization?: boolean;
  headers?: Record<string, string>;
}

export type SagaGenerator = Generator<any, any, any>;
