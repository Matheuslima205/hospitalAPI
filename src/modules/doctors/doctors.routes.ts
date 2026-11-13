import type { FastifyPluginAsync } from "fastify";
import data from "../../data/doctorsList.json" with { type: 'json'};

export const doctorsRoutes: FastifyPluginAsync = async (app) => {
    app.get("/doctors", async () => {
        return data
    })
};