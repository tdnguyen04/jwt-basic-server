# JWT Basics Server

This is a simple backend server that demonstrates user authentication using JSON Web Tokens (JWT).

## Functionality

*   User signup and login
*   JWT-based authentication
*   Protected route example

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/jwt-basics-server.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root directory and add the following environment variables:
    ```
    JWT_PRIVATE_KEY=your_secret_key
    ```
4.  Start the server:
    ```bash
    npm start
    ```

## API Endpoints

*   `POST /signup`
    *   Creates a new user.
    *   Request body: `{ "email": "user@example.com", "password": "password123", "firstName": "John", "lastName": "Doe" }`
*   `POST /login`
    *   Authenticates a user and returns a JWT.
    *   Request body: `{ "email": "user@example.com", "password": "password123" }`
*   `GET /dashboard`
    *   A protected route that requires a valid JWT in the `Authorization` header.
    *   Example: `Authorization: Bearer <your_jwt>`
