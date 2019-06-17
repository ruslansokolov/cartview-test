export enum ValidationType {
  PromoCode
}

export class ValidationError extends Error {
  type: ValidationType

  constructor(message: string, type: ValidationType) {
    super(message)
    this.type = type
  }
}