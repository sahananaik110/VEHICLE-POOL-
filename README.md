# Vehicle Pool Backend

A backend API for a vehicle pooling system that allows users to register, login, and manage vehicle rentals or shared transportation services. Built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication
- JWT-based authorization
- Role-based access control (User, Driver, Admin)
- KYC document upload and verification
- MongoDB database integration

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing
- **File Upload**: Multer
- **CORS**: Enabled for cross-origin requests
- **Environment**: dotenv for configuration

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahananaik110/VEHICLE-POOL-.git
   cd VEHICLE-POOL-/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGO_URI=mongodb://localhost:27017/vehicle-pool
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   ```

4. Start the MongoDB service (if running locally).

5. Start the development server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000` (or the port specified in `.env`).

## Usage

### API Endpoints

#### Authentication

- **POST /api/auth/register**
  - Register a new user
  - Body: `{ "name": "string", "email": "string", "password": "string" }`

- **POST /api/auth/login**
  - Login user
  - Body: `{ "email": "string", "password": "string" }`
  - Response: `{ "message": "Login successful!", "token": "jwt_token" }`

#### Test Route

- **GET /**
  - Check if server is running
  - Response: "Server is running!"

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   └── authController.js  # Authentication logic
├── middleware/
│   └── authMiddleware.js  # Authentication middleware
├── models/
│   └── User.js            # User model
├── routes/
│   └── authRoutes.js      # Authentication routes
├── server.js              # Main server file
└── package.json           # Dependencies and scripts
```

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run tests (currently not implemented)

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Server port (default: 5000)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Future Enhancements

- Vehicle management endpoints
- Booking system
- Payment integration
- Real-time notifications
- Admin dashboard for KYC verification