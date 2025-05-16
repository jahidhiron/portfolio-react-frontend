export interface ErrorPayload {
  message?: string;
  stack?: string;
  name?: string;
  [key: string]: any;
}
