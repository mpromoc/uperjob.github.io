# OpenTaxi Project

OpenTaxi is a comprehensive application designed to facilitate taxi booking services. This project includes a backend data access server that manages bookings, addresses, and related operations.

## Project Structure

The project is organized as follows:

```
OpenTaxi-main
├── .github
│   └── workflows
│       └── ci.yml                # Continuous integration configuration
├── source_code
│   └── backend
│       └── data_access_server
│           ├── src
│           │   ├── controllers
│           │   │   └── booking_controller.ts  # Handles booking-related operations
│           │   ├── db                # Database-related files
│           │   ├── utils             # Utility functions
│           │   └── app.ts            # Entry point for the backend application
│           ├── package.json          # npm configuration file
│           ├── tsconfig.json         # TypeScript configuration file
│           └── README.md             # Documentation for the backend data access server
└── README.md                         # Overall project documentation
```

## Features

- **Booking Management**: Create, update, delete, and retrieve bookings.
- **Address Management**: Manage pickup and dropoff addresses associated with bookings.
- **Stop Addresses**: Handle multiple stop addresses for a booking.

## Getting Started

To get started with the OpenTaxi project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/OpenTaxi.git
   ```

2. Navigate to the backend directory:
   ```
   cd OpenTaxi/source_code/backend/data_access_server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.