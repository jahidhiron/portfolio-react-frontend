import { AppError } from './app.error';

export class CustomError extends AppError {
  constructor(message: string, stack?: string, name: string = 'CustomError') {
    super(message);
    this.name = name;
    if (stack) {
      this.stack = stack;
    }
  }
}

export const customError = (
  message: string,
  stack?: string,
  name: string = 'CustomError'
): never => {
  throw new CustomError(message, stack, name);
};
