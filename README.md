# Journey Genie

Welcome to Journey Genie! This README file provides an overview of the project, its features, dependencies, and instructions for getting started with development or maintenance.

## Overview

Journey Genie is a web application designed to help users discover their perfect travel destinations based on various preferences such as temperature, flight duration, and journey type. The project consists of a client-side application and a server-side API.

- **Client**: The frontend application built with Next.js and React.
- **Server**: The backend API built with Node.js, Express, and MongoDB.

## Project Links

- **Client**: [Journey Genie Client](https://journeygenie.vercel.app/)
- **Server**: [Journey Genie API](https://api-journey-genie.vercel.app/)

## Features

- **Explore Destinations**: Users can browse a curated list of travel destinations.
- **Filter Destinations**: Users can filter destinations based on temperature, flight duration, and journey type.
- **Admin Dashboard**: Admins can manage destinations, add new destinations, and edit destination details.
- **User Authentication**: User authentication is handled using NextAuth.js.
- **Responsive Design**: The application is responsive and works seamlessly on various devices.
- **Data Storage**: Destination data is stored using MongoDB.

## Dependencies

**Client Dependencies (package.json):**

- Next.js
- React
- Redux Toolkit
- NextAuth.js
- Tailwind CSS
- ... and more. (See [client's package.json](client/package.json) for a complete list of dependencies and versions.)

**Server Dependencies (package.json):**

- Express
- Mongoose
- bcrypt
- jsonwebtoken
- ... and more. (See [server's package.json](server/package.json) for a complete list of dependencies and versions.)

## File Upload with Cloudinary

Journey Genie utilizes [Cloudinary](https://cloudinary.com/) for handling file uploads. This feature allows users to upload and manage destination images seamlessly. When an admin adds a new destination or updates an existing one, images are securely stored and optimized on Cloudinary.

## Screenshots

Here are some screenshots of the Journey Genie application:

![Screenshot 1](/screenshots//landing_page.png)
_Landing Page_

![Screenshot 2](/screenshots/add_destination.png)
_Add New Destination_

![Screenshot 3](/screenshots/manage_destination.png)
_Manage Destinations_

<!-- Add more screenshots and captions as needed -->

## Getting Started

To get started with the development or maintenance of this project, follow these steps:

1. Clone the repository: `git clone https://github.com/ShrideepP/journey_genie.git`

2. Install client dependencies: `cd client && npm install`

3. Install server dependencies: `cd ../server && npm install`

4. Set up environment variables: Create a `.env` file in the server directory and add necessary environment variables.

5. Start the client and server locally:

   - Client: `cd ../client && npm run dev`
   - Server: `cd ../server && npm run dev`

6. Open the client application in your browser: `http://localhost:3000`

7. Open the server API in your browser: `http://localhost:3001`

## Contributing

We welcome contributions! If you'd like to contribute to this project, please read our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is not licensed and is provided for demonstration and educational purposes only. You do not have permission to use, modify, or distribute this code for any other purposes.

Happy coding!
