import { Pool } from "pg";
import nodemailer from "nodemailer";

export class User {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly cpf: string,
    private readonly dateCreation: Date
  ) {}

  async save(): Promise<bigint | null> {
    let eitherIdOrNull: bigint | null = null;

    /* Validate user data */
    if (!this.email.includes("@")) return null;

    if (this.cpf.length !== 14) return null;

    /* Adding user to repository */
    const connectionString =
      process.env.DATABASE_URL ||
      "postgresql://postgres:postgres@localhost:5432/solid";
    const pool = new Pool({ connectionString });
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const queryText =
        "INSERT INTO users(name, email, cpf, date_creation) VALUES($1, $2, $3, $4) RETURNING id";
      const queryValues = [this.name, this.email, this.cpf, this.dateCreation];
      const result = await client.query(queryText, queryValues);
      await client.query("COMMIT");
      if (result.rows[0]) eitherIdOrNull = BigInt(result.rows[0].id);
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }

     /* Sending welcome email to the user  */
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
        from: "any_origin@mail.com",
        to: "any_destination@mail.com",
        subject: "Bem vindo",
        text: "Parabéns você está cadastrado!",
        html: "<b>Parabéns você está cadastrado!</b>",
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } catch (error) {
      throw error;
    }

    return eitherIdOrNull;
  }
}
