import type { FastifyReply, FastifyRequest } from "fastify";
import type { RegisterRequest } from "../types/http";
import repository from "../repository";

/*
Vad är ansvarsområdeet för controllers?

Svar: Controllers är en del av vår HTTP-del, och har som ansvar att validera och plocka ut
indata från HTTP-requesten. Samt även ansvar att returnera en HTTP-respons.
*/
export async function register(
  request: FastifyRequest<{ Body: RegisterRequest }>,
  reply: FastifyReply,
) {
  await repository.users.insertOne(request.body);
}

export async function login(request: FastifyRequest, reply: FastifyReply) {}
