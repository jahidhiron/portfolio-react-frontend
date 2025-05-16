import { AppError } from './app.error';

export class AuthenticationError extends AppError {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'AuthenticationError';
    if (stack) {
      this.stack = stack;
    }
  }
}

export const authenticationError = (message: string, stack?: string): never => {
  throw new AuthenticationError(message, stack);
};
