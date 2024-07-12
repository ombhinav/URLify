# URLify

URLify is a full-stack MERN (MongoDB, Express, React, Node.js) application that shortens URLs, providing a convenient way to create and manage shortened links.

## Features

- URL shortening
- Custom short URL creation
- Click tracking for shortened URLs
- User-friendly web interface
- RESTful API for URL management

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation

To run this project locally, follow these steps:

1. Clone the repository
- `git clone https://github.com/ombhinav/URLify.git`
- `cd URLify`

2. Install dependencies for both backend and frontend
- `cd backend`
- `npm install`
- `cd ../frontend`
- `npm install`

3. Set up environment variables
- Create a `.env` file in the backend directory
- Add necessary environment variables (e.g., MongoDB URI, JWT secret)

4. Start the backend server
- `cd backend`
- `npm start`

5. Start the frontend development server
- `cd frontend`
- `npm start`
  
6. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter a long URL in the input field
2. Click "Shorten" to generate a short URL
3. Copy and share the shortened URL
4. View analytics for your shortened URLs in the dashboard

## API Endpoints

- `POST /api/shorten`: Create a new shortened URL
- `GET /api/:shortCode`: Redirect to the original URL
- `GET /api/urls`: Get all URLs for the authenticated user
- `DELETE /api/urls/:id`: Delete a specific URL

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

Project Link: [https://github.com/ombhinav/URLify](https://github.com/ombhinav/URLify)

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
