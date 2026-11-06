import { describe, it, expect } from "vitest";
import { buildApp } from "../src/app.js";
import data from "../src/data/nursesList.json" with { type: 'json'};

describe("nurses", async () => {
    it("response 200 and a list of nurses", async () => {
        const app = buildApp();
        const response = await app.inject({method: "GET", url: "/api/nurses"});
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual(data);
    });
})