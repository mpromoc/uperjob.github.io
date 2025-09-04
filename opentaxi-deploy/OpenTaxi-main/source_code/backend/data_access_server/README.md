# OpenTaxi Data Access Server

This README file provides an overview of the Data Access Server for the OpenTaxi project.

## Overview

The Data Access Server is responsible for handling all interactions with the database related to booking operations. It provides a set of APIs to create, read, update, and delete booking information, as well as manage addresses associated with bookings.

## Directory Structure

- `src/`: Contains the source code for the server.
  - `controllers/`: Contains the controller files that handle incoming requests and responses.
  - `db/`: Contains database-related files and configurations.
  - `utils/`: Contains utility functions used throughout the application.
  - `app.ts`: The entry point for the backend application, setting up the Express server and middleware.
  
- `package.json`: Configuration file for npm, listing dependencies and scripts for the project.

- `tsconfig.json`: TypeScript configuration file specifying compiler options and files to include in the compilation.

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Running the Server

To start the server, use the following command:

```
npm start
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

The following API endpoints are available:

- `POST /bookings`: Create a new booking.
- `GET /bookings/:id`: Retrieve a booking by ID.
- `PUT /bookings/:id`: Update an existing booking.
- `DELETE /bookings/:id`: Delete a booking by ID.
- `GET /bookings/:id/addresses`: Retrieve addresses associated with a booking.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.