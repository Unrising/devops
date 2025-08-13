import request from "supertest";
import app from "../app/server.js";

describe('GET /health', () => {
    it('GET /health', async() => {
        const response = await request(app).get("/health");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status', 'ok');
    });
});
