export interface IEmailServices {
  isValid(email: string): boolean;

  sendEmail(
    originEmail: string,
    email: string,
    subject: string,
    text: string
  ): Promise<void>;
}
