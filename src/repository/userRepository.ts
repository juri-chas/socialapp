import { password } from "bun";
import { db } from "../db/client";
import type { RegisterRequest } from "../types/http";
import type { UserRow } from "../types/db";

export async function insertOne(input: RegisterRequest) {
  const createdAt = new Date().toISOString();

  const [created] = await db<
    UserRow[]
  >`INSERT INTO users (username, visibility, profile_image, bio, display_name, email, phone, birthdate, password, created_at) VALUES (${input.username}, ${input.visibility}, ${input.profile_image}, ${input.bio}, ${input.display_name}, ${input.email}, ${input.phone}, ${input.birthdate}, ${input.password}, ${createdAt}) RETURNING *`;

  if (!created) throw new Error("Failed to create user!");

  return created;
}

export async function getByUsername(username: string) {
  const [user] = await db<UserRow[]>`
    SELECT * FROM users where username = ${username}
    `;

  return user || null;
}
