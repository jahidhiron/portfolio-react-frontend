import { AppError } from './app.error';

export class ForbiddenError extends AppError {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'ForbiddenError';
    if (stack) {
      this.stack = stack;
    }
  }
}

export const forbiddenError = (message: string, stack?: string): never => {
  throw new ForbiddenError(message, stack);
};
