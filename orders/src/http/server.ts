import {fastify} from "fastify";
import { fastifyCors } from "@fastify/cors";
import { z } from "zod";
import {
  serializerCompiler,
  validatorCompiler,
 type  ZodTypeProvider } from "fastify-type-provider-zod";

 
const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

app.get("/health", () => {
  return "OK"
})

app.post("/orders", {
  schema: {
    body: z.object({
      amount: z.number()
    }),
  },
}, (request, reply) => {
  const { amount } = request.body;
  console.log('New order received', amount);
  return reply.status(201).send()
})


app.listen({host: "0.0.0.0", port: 3333}).then(() => {
  console.log("[Orders] HTTP server running!");
});