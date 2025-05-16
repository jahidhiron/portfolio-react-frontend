import { AppError } from './app.error';

export class NotFoundError extends AppError {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'NotFoundError';
    if (stack) {
      this.stack = stack;
    }
  }
}

export const notFoundError = (message: string, stack?: string): never => {
  throw new NotFoundError(message, stack);
};
