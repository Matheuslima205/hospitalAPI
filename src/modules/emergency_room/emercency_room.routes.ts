import type { FastifyPluginAsync } from "fastify";

export const emergencyRoomRoutes: FastifyPluginAsync =  async (app) => {
    app.get("/emergency_room", async () => {
        return -1
    })
};
