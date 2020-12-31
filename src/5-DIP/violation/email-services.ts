import nodemailer from "nodemailer";

export class EmailServices {
  constructor() {}

  static isValid(email: string): boolean {
    return email.includes("@");
  }

  static async sendEmail(
    originEmail: string,
    email: string,
    subject: string,
    text: string
  ): Promise<void> {
    try {
      const testAccount = await nodemailer.createTestAccount();

      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      const info = await transporter.sendMail({
        from: originEmail,
        to: email,
        subject: subject,
        text: text,
        html: `<b> ${text} </b>`,
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
      throw error;
    }
  }
}
