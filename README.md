# ResellBD Server

## Overview

ResellBD is a full-featured second-hand marketplace backend application designed for buying and selling pre-owned goods securely and reliably. The backend is built using Node.js, Express.js, TypeScript, and MongoDB, adhering to a modular monolithic architecture for high maintainability, testability, and scalability.

This system provides comprehensive features including JWT-based role authentication, product listing lifecycle management, dynamic search and filtering, SSLCommerz payment integration, transactional order processing, real-time analytics, content management (blogs, newsletter subscriptions, contact inquiries), and centralized error handling with Zod schema validation.

---

## Tech Stack

- **Runtime**: Node.js (v18+ or v22+)
- **Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: MongoDB
- **Object Data Modeling (ODM)**: Mongoose
- **Authentication & Security**: JSON Web Token (JWT), bcrypt
- **Request Validation**: Zod
- **Payment Gateway**: SSLCommerz (`sslcommerz-lts`)
- **Code Formatting & Linting**: ESLint, Prettier
- **Development Tooling**: ts-node-dev, nodemon

---

## Core Features

- **Modular Monolithic Structure**: Codebase organized by feature domains (Auth, Users, Listings, Transactions, Payments, Analytics, Blogs, Contacts, Newsletters).
- **Authentication and Role-Based Access Control (RBAC)**: Secure user registration and login with bcrypt password hashing and role-based route guards (`user`, `admin`).
- **Dynamic Query Builder**: Reusable database query utility supporting full-text search, exact filtering, dynamic sorting, pagination, and field limiting across collections.
- **Product Listing Management**: Users can publish, edit, categorize, track status (`available`, `sold`), and remove second-hand items. Admins have moderation controls to delete inappropriate listings.
- **Order & Transaction Workflow**: Dedicated transactional workflow linking buyers, sellers, and listings with status updates and history tracking.
- **SSLCommerz Payment Integration**: Secure digital checkout with transaction verification, handling success, failure, and cancellation callbacks.
- **Dashboard Analytics**: Statistical aggregations covering total products, total purchases, total sales, and month-by-month sales performance.
- **Content & Support Management**: Blog publishing system, customer inquiry/contact message collection, and newsletter subscription management.
- **Centralized Error Handling**: Standardized error responses handling Zod validation errors, Mongoose cast errors, duplicate key errors, and runtime HTTP exceptions.

---

## Folder Structure

```
resellbd-server/
|-- dist/                               # Compiled JavaScript code (generated on build)
|-- src/                                # Source TypeScript code
|   |-- app.ts                          # Express application entry point, middleware & route definitions
|   |-- server.ts                       # Server bootstrap, database connection & process event handlers
|   |-- app/
|       |-- builder/                    # Reusable query builder for search, filter, sort & pagination
|       |   `-- QueryBuilder.ts
|       |-- config/                     # Environment configuration loader
|       |   `-- index.ts
|       |-- errors/                     # Centralized custom error classes and error formatters
|       |   |-- HttpError.ts
|       |   |-- handleCastError.ts
|       |   |-- handleDuplicateError.ts
|       |   |-- handleValidationError.ts
|       |   `-- handleZodValidationError.ts
|       |-- interface/                  # Global TypeScript interfaces and ambient declarations
|       |   |-- error.ts
|       |   `-- index.d.ts
|       |-- middleware/                 # Application middlewares
|       |   |-- auth.ts                 # JWT verification and RBAC middleware
|       |   |-- globalErrorHandler.ts   # Unified error response handler
|       |   |-- notFound.ts             # 404 Not Found route handler
|       |   `-- validateRequestSchema.ts# Zod request validation middleware
|       |-- modules/                    # Domain-driven feature modules
|       |   |-- Analytics/              # Analytics aggregation module (controller, route, service)
|       |   |-- Auth/                   # Authentication module (register, login, validation)
|       |   |-- Blog/                   # Blog content management module
|       |   |-- Contact/                # Contact inquiry submission and moderation module
|       |   |-- Listing/                # Product listing and catalogue management module
|       |   |-- NewsLetter/             # Newsletter subscription module
|       |   |-- Payment/                # SSLCommerz callback routes and controller
|       |   |-- SSLCommerez/            # SSLCommerz payment gateway initialization service
|       |   |-- Transaction/            # Purchase/sales order transaction module
|       |   `-- User/                   # User profile and account administration module
|       |-- routes/                     # Central API route index combining all module routes
|       |   `-- index.ts
|       |-- types/                      # Custom type declarations for third-party libraries
|       |   `-- sslcommerz-lts.d.ts
|       `-- utils/                      # Helper utilities
|           |-- global/                 # Global helpers (asyncHandler, sendResponse)
|           `-- moduleSpecific/         # Module-focused helpers (queryFilters)
|-- .env.example                        # Template for required environment variables
|-- .gitignore                          # Files and directories ignored by Git
|-- .prettierignore                     # Files excluded from Prettier formatting
|-- .prettierrc                         # Prettier formatting rules
|-- eslint.config.mjs                   # ESLint configuration
|-- package.json                        # Project metadata, dependencies, and npm scripts
|-- tsconfig.json                       # TypeScript compiler configuration
`-- vercel.json                         # Vercel deployment and routing configuration
```

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher (v22.x recommended)
- **npm**: v9.0.0 or higher
- **MongoDB**: A running local MongoDB instance or a MongoDB Atlas cloud cluster

### Step 1: Clone the Repository

```sh
git clone https://github.com/Emam-Bokhari/ReSellBD-Server.git
cd ReSellBD-Server
```

### Step 2: Install Dependencies

```sh
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory. You can copy the provided `.env.example` file:

```sh
cp .env.example .env
```

Open `.env` and fill in your actual credentials. Ensure you replace all placeholders with your valid configuration values:

```env
# Server Configuration
PORT=5000
NODE=development

# Database Configuration
# Replace with your actual MongoDB connection string
DATABASE_URL=enter_your_mongodb_connection_uri_here

# Security & Authentication
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET=enter_your_jwt_access_secret_key_here

# SSLCommerz Payment Gateway Configuration
STORE_NAME=enter_your_store_name_here
STORE_ID=enter_your_sslcommerz_store_id_here
STORE_PASSWORD=enter_your_sslcommerz_store_password_here
PAYMENT_API=https://sandbox.sslcommerz.com/gwprocess/v3/api.php
VALIDATION_API=https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php
VALIDATION_URL=enter_your_backend_validation_url_here
SUCCESS_URL=enter_your_frontend_success_redirect_url_here
FAILED_URL=enter_your_frontend_failure_redirect_url_here
CANCEL_URL=enter_your_frontend_cancel_redirect_url_here
```

#### Environment Variables Reference

| Variable | Description | Example / Default |
| --- | --- | --- |
| `PORT` | Port number on which the server listens | `5000` |
| `NODE` | Environment mode (`development` or `production`) | `development` |
| `DATABASE_URL` | MongoDB connection URI string | `enter_your_mongodb_connection_uri_here` |
| `BCRYPT_SALT_ROUNDS` | Number of salt rounds for bcrypt password hashing | `12` |
| `JWT_ACCESS_SECRET` | Secret key used to sign and verify JWT access tokens | `enter_your_jwt_access_secret_key_here` |
| `STORE_NAME` | SSLCommerz merchant store name | `enter_your_store_name_here` |
| `STORE_ID` | SSLCommerz merchant store ID | `enter_your_sslcommerz_store_id_here` |
| `STORE_PASSWORD` | SSLCommerz merchant store password | `enter_your_sslcommerz_store_password_here` |
| `PAYMENT_API` | SSLCommerz gateway initiation API URL | `https://sandbox.sslcommerz.com/gwprocess/v3/api.php` |
| `VALIDATION_API` | SSLCommerz validation API URL | `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php` |
| `VALIDATION_URL` | Callback URL for SSLCommerz payment validation | `enter_your_backend_validation_url_here` |
| `SUCCESS_URL` | Client redirect URL upon successful payment | `enter_your_frontend_success_redirect_url_here` |
| `FAILED_URL` | Client redirect URL upon failed payment | `enter_your_frontend_failure_redirect_url_here` |
| `CANCEL_URL` | Client redirect URL upon cancelled payment | `enter_your_frontend_cancel_redirect_url_here` |

---

## Running the Application

### Development Mode

Run the server with automatic reload on file changes:

```sh
npm run start:dev
```

### Production Build

Compile TypeScript to JavaScript in the `dist` directory and start the production server:

```sh
npm run build
npm run start:prod
```

### Code Formatting & Linting

```sh
# Check code style with ESLint
npm run lint

# Automatically fix linting issues
npm run lint:fix

# Format codebase with Prettier
npm run format
```

---

## NPM Scripts Summary

| Script | Command | Description |
| --- | --- | --- |
| `start:dev` | `npx ts-node-dev --transpile-only src/server.ts` | Runs the server in development mode with live reload |
| `build` | `tsc` | Compiles TypeScript files into the `dist/` directory |
| `start:prod` | `node ./dist/server.js` | Executes the built production bundle |
| `start` | `nodemon ./dist/server.js` | Monitors and runs the compiled bundle |
| `lint` | `eslint src/**/*.ts` | Analyzes code for syntax and style issues |
| `lint:fix` | `eslint src/**/*.ts --fix` | Automatically fixes repairable lint errors |
| `format` | `prettier . --write` | Formats the entire codebase according to Prettier rules |

---

## API Endpoints

All application routes are prefixed with `/api/v1`.

### 1. Authentication (`/api/v1/auth`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/auth/register` | Public | Register a new user account |
| `POST` | `/api/v1/auth/login` | Public | Authenticate user and issue JWT access token |

### 2. User Management (`/api/v1/users`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `GET` | `/api/v1/users` | Admin | Retrieve all registered users |
| `GET` | `/api/v1/users/me` | User, Admin | Retrieve logged-in user profile details |
| `GET` | `/api/v1/users/:id` | Admin | Retrieve user details by ID |
| `PATCH` | `/api/v1/users/update-profile` | User, Admin | Update authenticated user profile |
| `PATCH` | `/api/v1/users/:id/status` | Admin | Update account status (e.g., active, blocked) |
| `PATCH` | `/api/v1/users/:id/role` | Admin | Update user role (e.g., user, admin) |
| `DELETE` | `/api/v1/users/:id` | Admin | Delete a user account |

### 3. Product Listings (`/api/v1/listings`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/listings` | User, Admin | Create a new second-hand product listing |
| `GET` | `/api/v1/listings` | Public | Get all product listings (supports search, filter, pagination) |
| `GET` | `/api/v1/listings/category/:category` | Public | Get listings filtered by specific category |
| `GET` | `/api/v1/listings/byUser` | User, Admin | Get listings created by the authenticated user |
| `GET` | `/api/v1/listings/:id` | Public | Retrieve a specific listing by ID |
| `PATCH` | `/api/v1/listings/:id` | User, Admin | Update own product listing details |
| `PATCH` | `/api/v1/listings/:id/status` | User, Admin | Update listing status (e.g., available, sold) |
| `DELETE` | `/api/v1/listings/:id` | User, Admin | Delete own product listing |
| `DELETE` | `/api/v1/listings/admin/:id` | Admin | Moderate and remove inappropriate listing |

### 4. Transactions (`/api/v1/transactions`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/transactions` | User, Admin | Create a transaction order and initiate payment |
| `PATCH` | `/api/v1/transactions/:id/status` | User, Admin | Update transaction status |
| `GET` | `/api/v1/transactions/purchases-history`| User, Admin | Get purchase history of the authenticated user |
| `GET` | `/api/v1/transactions/sales-history` | User, Admin | Get sales history of the authenticated user |

### 5. Payments (`/api/v1/payments`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/payments/payment-success/:transactionId` | Public | SSLCommerz success callback / IPN handler |
| `POST` | `/api/v1/payments/payment-fail/:transactionId` | Public | SSLCommerz payment failure callback handler |
| `POST` | `/api/v1/payments/payment-cancel/:transactionId` | Public | SSLCommerz payment cancellation callback handler |

### 6. Analytics (`/api/v1/analytics`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `GET` | `/api/v1/analytics/total-products` | User, Admin | Retrieve total products count |
| `GET` | `/api/v1/analytics/total-purchases` | User, Admin | Retrieve total purchase volume |
| `GET` | `/api/v1/analytics/total-sales` | User, Admin | Retrieve total sales volume |
| `GET` | `/api/v1/analytics/monthly-sales` | User, Admin | Retrieve monthly sales metrics and chart data |

### 7. Blog Management (`/api/v1/blogs`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/blogs` | Admin | Create and publish a blog article |
| `GET` | `/api/v1/blogs` | Public | Retrieve all published blog posts |
| `GET` | `/api/v1/blogs/:id` | Public | Retrieve a specific blog post by ID |
| `PATCH` | `/api/v1/blogs/:id` | Admin | Update blog article content |
| `DELETE` | `/api/v1/blogs/:id` | Admin | Delete a blog article |

### 8. Contact Inquiries (`/api/v1/contacts`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/contacts` | Public | Submit a customer contact / feedback inquiry |
| `GET` | `/api/v1/contacts` | Admin | Retrieve all contact inquiry messages |
| `GET` | `/api/v1/contacts/:id` | Admin | Retrieve a specific inquiry by ID |
| `DELETE` | `/api/v1/contacts/:id` | Admin | Delete a contact inquiry |

### 9. Newsletter Subscriptions (`/api/v1/newsLetters`)

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/newsLetters` | Public | Subscribe an email address to the newsletter |
| `GET` | `/api/v1/newsLetters` | Admin | Retrieve all newsletter subscribers |

---

## Response & Error Handling Standards

### Successful Response Format

All successful responses follow a standard envelope pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Resource retrieved successfully",
  "data": {}
}
```

### Error Response Format

Errors return structured messages with appropriate HTTP status codes:

```json
{
  "success": false,
  "message": "Validation Error",
  "errorSources": [
    {
      "path": "email",
      "message": "Invalid email address format"
    }
  ],
  "stack": "Error stack trace (development mode only)"
}
```

---

## Deployment

The application is configured for serverless deployment on Vercel via `vercel.json` with a dedicated MongoDB connection cache handler in `src/app.ts` to avoid connection buffering timeouts during serverless cold starts.

---

## Author & Contact

- **Developer**: Moshfiqur Rahman
- **Email**: moshfiqurrahman37@gmail.com
- **GitHub**: https://github.com/Emam-Bokhari
- **LinkedIn**: www.linkedin.com/in/moshfiqurrahman37
