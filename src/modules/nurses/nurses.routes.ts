import type { FastifyPluginAsync } from "fastify";
import data from "../../data/nursesList.json" with { type: 'json'};

export const nursesRoutes: FastifyPluginAsync = async (app) => {
    app.get("/nurses", async () => {
        return data
    })
}