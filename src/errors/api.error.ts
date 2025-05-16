import { AppError } from './app.error';

export class APIError extends AppError {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'APIError';
    if (stack) {
      this.stack = stack;
    }
  }
}

export const apiError = (message: string, stack?: string): never => {
  throw new APIError(message, stack);
};
