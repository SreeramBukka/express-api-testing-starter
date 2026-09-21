# Express API Backend Testing with Jest & Supertest

A production-ready Express.js REST API template demonstrating automated integration testing using **Jest** and **Supertest**, paired with robust request validation using **express-validator**.

---

## 🚀 Features

- **Decoupled Architecture**: Separates the HTTP server (`server.js`) from Express app configuration (`src/app.js`) to enable fast, isolated in-memory testing without port collisions.
- **Automated Integration Testing**: Comprehensive test coverage using **Jest** and **Supertest** for testing HTTP endpoints, status codes, headers, and JSON responses.
- **Request Validation Middleware**: Declarative schema validation and error-handling middlewares using **express-validator**.
- **Ready for CI/CD**: Clean npm test scripts ready for automated pipelines and GitHub Actions.

---

## 📁 Project Structure

```text
.
├── .editorconfig                # Editor formatting consistency
├── .env.example                 # Example environment variables
├── .gitattributes               # Line ending normalization
├── .gitignore                   # Ignored files (node_modules, logs, env)
├── package.json                 # Project dependencies & scripts
├── server.js                    # Server entrypoint (listens on PORT)
└── src/
    ├── app.js                   # Express application setup & route definitions
    ├── middlewares/
    │   └── validation.middleware.js # express-validator validation rules & handler
    └── test/
        └── _app.test.js         # Integration tests with Jest & Supertest
```

---

## 🛠️ Prerequisites

- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <REPO_URL>
   cd backend-testing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   ```

---

## 🚦 Running the Application

### Development Mode (with hot-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```
By default, the server runs on `http://localhost:3000`.

---

## 🧪 Running Tests

Run the test suite using Jest and Supertest:

```bash
# Run all tests once
npm test

# Run tests in watch mode (reruns on file change)
npm run test:watch

# Run tests and generate coverage report
npm run test:coverage
```

### Example Test Output:
```text
PASS src/test/_app.test.js
  GET /
    ✓ should return 200 OK with welcome message (35 ms)
  POST /register
    ✓ should register a user with valid credentials (287 ms)
    ✓ should return 400 Bad Request when validation fails (8 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
```

---

## 📡 API Endpoints

### 1. Health Check
- **Method:** `GET`
- **URL:** `/`
- **Response (200 OK):**
  ```json
  {
    "message": "Hello World!"
  }
  ```

---

### 2. User Registration
- **Method:** `POST`
- **URL:** `/register`
- **Headers:** `Content-Type: application/json`
- **Validation Rules:**
  - `username`: String, 3 to 20 characters.
  - `email`: Valid email format.
  - `password`: String, minimum 8 characters.

#### Request Body Example:
```json
{
  "username": "alexdoe",
  "email": "alex@example.com",
  "password": "SecurePassword123"
}
```

#### Success Response (201 Created):
```json
{
  "message": "User registered successfully",
  "user": {
    "username": "alexdoe",
    "email": "alex@example.com"
  }
}
```

#### Validation Error Response (400 Bad Request):
```json
{
  "errors": [
    {
      "type": "field",
      "value": "al",
      "msg": "Username must be between 3 and 20 characters long",
      "path": "username",
      "location": "body"
    }
  ]
}
```

---

## 📄 License

This project is licensed under the ISC License.
