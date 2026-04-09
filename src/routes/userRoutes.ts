import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import * as userControllers from "../controllers/userControllers";
import { registerSchema } from "../schemas/registerUser";

/*

- Skapa konto
- Logga in
- Följa/avfölja en annan användare
- Skapa inlägg
- Hämta feed

*/

export async function userRoutes(
  httpServer: FastifyInstance,
  opts: FastifyPluginOptions,
) {
  httpServer.route({
    method: "POST",
    url: "/register",
    handler: userControllers.register,
    schema: registerSchema,
  });

  httpServer.route({
    method: "POST",
    url: "/login",
    handler: userControllers.login,
  });
}

export default userRoutes;
