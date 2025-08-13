import request from "supertest";
import app from "../app/server.js";

describe('GET /health', () => {
    it('GET /health', async() => {
        const response = await request.get("/health");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status', 'ok');
    });
});

describe('GET /', () => {
    it('GET /', async() => {
        const response = await request.get("/");
        expect(response.status).toBe(201);
        expect(responde.body).toHaveProperty('route', 'ok');
    })
})