import { buildApp } from "./app.js";
import { env } from "./config.js"

const app = buildApp();

app.listen({ port: env.PORT, host: env.HOST });