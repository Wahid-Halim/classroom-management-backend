# Classroom Backend

## Executive Summary

This project is the backend service for a classroom management application. It provides the API and data layer for managing classroom-related information, such as departments and subjects. The primary goal of this project is to offer a robust, scalable, and easy-to-maintain backend system. It is built with Node.js, Express, and Drizzle ORM, using a PostgreSQL database.

## Architecture Overview

The application follows a simple, layered architecture.

```
+-------------------+      +-------------------+      +-------------------+
|      Client       |----->|   Express Server  |----->|    PostgreSQL     |
| (Web/Mobile App)  |      |  (Node.js, HTTP)  |      |     Database      |
+-------------------+      +-------------------+      +-------------------+
                                   |
                                   |
                         +-------------------+
                         |    Drizzle ORM    |
                         | (TypeScript-based)|
                         +-------------------+
```

-   **Express Server (`src/index.ts`):** The entry point of the application. It handles incoming HTTP requests, and sends responses.
-   **Drizzle ORM (`src/db/`):** The Object-Relational Mapper that provides a programmatic interface to interact with the database. It is used for all database operations (CRUD).
-   **PostgreSQL Database:** The database for storing all application data. The schema is defined in `src/db/schema/app.ts`.

## Setup Guide

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)
-   A running PostgreSQL database instance.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/classroom-backend.git
    cd classroom-backend
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

### Configuration

1.  Create a `.env` file in the root of the project.
2.  Add the following environment variable to the `.env` file:

    ```
    DATABASE_URL="your-postgresql-connection-string"
    ```

### Running the Application

To run the application in development mode (with hot-reloading):

```bash
npm run dev
```

The server will start at `http://localhost:5000`.

### Database Migrations

To generate and apply database migrations, you can use the following commands:

-   Generate migration files:

    ```bash
    npm run db:generate
    ```

-   Apply migrations:

    ```bash
    npm run db:migrate
    ```

## Usage Guide

The backend exposes a RESTful API. The base URL is `http://localhost:5000`.

### API Endpoints

-   `GET /`: Returns a welcome message.

    -   **Response:**

        ```json
        {
          "message": "Hello from classroom-backend"
        }
        ```

*(More endpoints will be added as the project grows.)*

## Configuration

The following environment variables are used for configuration:

| Variable       | Description                  | Required |
| -------------- | ---------------------------- | -------- |
| `DATABASE_URL` | PostgreSQL connection string | Yes      |
| `PORT`         | Port for the Express server  | No       |

Secrets and other sensitive information should be stored in a `.env` file for local development.

## Testing

Currently, there are no tests configured for this project.

## Deployment

To deploy the application, you can build the TypeScript code into JavaScript and then run the compiled code.

1.  Build the project:

    ```bash
    npm run build
    ```

2.  Start the server:

    ```bash
    npm run start
    ```

For production deployments, it is recommended to use a process manager like PM2 or to deploy to a cloud platform like Heroku, AWS, or Vercel.

## Contributing

We welcome contributions from everyone. Please follow these guidelines:

1.  **Branching:** Create a new branch for each feature or bug fix.
2.  **Pull Requests (PRs):** Submit a PR with a clear description of the changes.
3.  **Linting:** Ensure your code follows the existing style and conventions.

## FAQ & Troubleshooting

**Q: I'm getting a `DATABASE_URL is not defined` error.**

**A:** Make sure you have created a `.env` file in the root of the project and added the `DATABASE_URL` environment variable.

## License

This project is licensed under the ISC License.
