import { describe, it, expect } from "vitest";
import { buildApp } from "../src/app.js";
import data from "../src/data/doctorsList.json" with {type: 'json'};

describe("doctors", () => {
    it("response 200 and a list of doctors", async () => {
        const app = buildApp();
        const response = await app.inject({method: "GET", url: "/api/doctors"});
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual(data)
    })
})