import { healthRoutes } from "./modules/health/health.routes.js";
import { doctorsRoutes } from "./modules/doctors/doctors.routes.js";
import { nursesRoutes } from "./modules/nurses/nurses.routes.js";

import Fastify from "fastify";

export function buildApp(){
    const app = Fastify({ logger: true });

    app.register(healthRoutes, { prefix: "/api" });
    app.register(doctorsRoutes, { prefix: "/api" });
    app.register(nursesRoutes, { prefix: "/api" });

    return app;
}
