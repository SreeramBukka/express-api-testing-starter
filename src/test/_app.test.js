const request = require('supertest');
const app = require('../app')

describe('GET /', () => {
    it("should return 200 OK with welcome message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({message: "Hello World!"});
    });
});

describe('POST /register', () => {
    it("should register a user with valid credentials", async () => {
        const res = await request(app)
            .post("/register")
            .send({
                username: "testuser",
                email: "test@example.com",
                password: "password123"
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            message: "User registered successfully",
            user: {
                username: "testuser",
                email: "test@example.com"
            }
        });
    });

    it("should return 400 Bad Request when validation fails", async () => {
        const res = await request(app)
            .post("/register")
            .send({
                username: "ab", // too short (min: 3)
                email: "not-an-email",
                password: "123" // too short (min: 8)
            });

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("errors");
        expect(Array.isArray(res.body.errors)).toBe(true);
        expect(res.body.errors.length).toBeGreaterThanOrEqual(3);
    });
});