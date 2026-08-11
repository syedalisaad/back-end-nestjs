# Employee Management API

A simple REST API for managing employees, built with [NestJS](https://nestjs.com/), [TypeORM](https://typeorm.io/), and MySQL.

## Features

- CRUD operations for employees.
- Built with TypeScript for type safety.
- Database migrations handled by TypeORM.
- API documentation with Swagger.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- [npm](https://www.npmjs.com/)
- A running [MySQL](https://www.mysql.com/) database instance

### Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd back-end-nestjs
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Copy the example environment file and update it with your database credentials.
    ```bash
    cp .env.example .env
    ```
    Open the `.env` file and fill in your `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, and `DB_NAME`.

4.  **Create the database:**
    Make sure you have created the database in MySQL that you specified in the `.env` file. For example:
    ```sql
    CREATE DATABASE employee_db;
    ```

5.  **Run database migrations:**
    The project uses TypeORM to manage the database schema.

    First, you may need to generate a migration file based on your entities.
    ```bash
    # Replace 'MyMigrationName' with a descriptive name
    npm run typeorm -- migration:generate src/migrations/MyMigrationName
    ```

    Then, run the migrations to create the tables.
    ```bash
    npm run migration:run
    ```

6.  **Start the development server:**
    ```bash
    npm run start:dev
    ```
    The application will be running on `http://localhost:4000` (or the port you specified in your `.env` file).

## Available Scripts

- `npm run start`: Starts the application in production mode.
- `npm run start:dev`: Starts the application in development mode with file watching.
- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm run format`: Formats the code with Prettier.
- `npm run lint`: Lints the code with ESLint.
- `npm run test`: Runs unit tests.
- `npm run migration:run`: Runs all pending database migrations.
- `npm run migration:generate`: Generates a new migration file. (You need to provide a path and name).

## API Endpoints

Once the application is running, you can access the interactive API documentation (Swagger UI) at:

**http://localhost:4000/api/docs**

### Employee Routes

- **`POST /api/employees`**: Create a new employee.
- **`GET /api/employees`**: Retrieve a list of all employees.
- **`GET /api/employees/:id`**: Retrieve a single employee by their ID.
- **`PUT /api/employees/:id`**: Update an existing employee's details.
- **`DELETE /api/employees/:id`**: Delete an employee.
