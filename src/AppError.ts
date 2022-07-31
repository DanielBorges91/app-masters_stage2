export class AppError {
  public readonly error: boolean;

  public readonly requiredFields: string[];

  public readonly statusCode: number;

  public readonly errorMessage: string

  constructor(errorMessage: string, statusCode = 400, requiredFields: string[] = []) {
    this.error = true;

    this.requiredFields = requiredFields;

    this.statusCode = statusCode;

    this.errorMessage = errorMessage;
  }
}