import { AppError } from './app.error';

export class ValidationError extends AppError {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'ValidationError';
    if (stack) {
      this.stack = stack;
    }
  }
}

export const validationError = (message: string, stack?: string): never => {
  throw new ValidationError(message, stack);
};
