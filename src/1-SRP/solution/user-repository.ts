import { User } from "./user";

import { Pool } from "pg";

export class UserRepository {
  constructor() {}

  async save(user: User): Promise<bigint | null> {
    const connectionString =
      process.env.DATABASE_URL ||
      "postgresql://postgres:postgres@localhost:5432/solid";
    const pool = new Pool({ connectionString });
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const queryText =
        "INSERT INTO users(name, email, cpf, date_creation) VALUES($1, $2, $3, $4) RETURNING id";
      const queryValues = [user.name, user.email, user.cpf, user.dateCreation];
      const result = await client.query(queryText, queryValues);
      await client.query("COMMIT");
      if (result.rows[0]) return BigInt(result.rows[0].id);
      else return null;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }
}
