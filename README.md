# User Management System

## Description

This is a User Management System built using Angular with role-based access control. The system supports user registration, login, and protected routes for admin and regular users. The project uses an AuthGuard to manage access to different routes based on user roles.

## Features

- User Registration
- User Login
- Role-based Access Control (Admin vs UserSimple)
- Protected Admin Dashboard
- User Profile
- Responsive Design
- JSON Server for Simulated Backend

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS
- AuthGuard for Role-Based Access Control
- JSON Server for Simulated Backend (User Authentication)

## Installation

1. Clone the repository:
   
git clone https://github.com/Nada-bkh/user-management.git

2. Navigate to the project directory:

cd user-management

3. Install dependencies:

npm install

4. Run the JSON server (for simulating the backend):

npm run json-server

5. Start the Angular development server:

ng serve

6. Usage:

Register: Navigate to /register to create a new user.

Login: Navigate to /login to log in with existing credentials.

Admin Dashboard: Accessible at /admin (protected with AuthGuard for admin role).

User Profile: Accessible at /profile (protected with AuthGuard for userSimple role).

### Contributing
Contributions are welcome! Please feel free to fork the repository and submit a pull request with your changes. Ensure to follow the coding guidelines and maintain existing project structure.

### License
This project is licensed under the MIT License.

### Author
Nada Ben Khalifa
