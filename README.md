# NoteApp

## Description
NoteApp is a web application that allows users to create, edit, highlight, and delete sticky notes. The app securely stores user data and notes using MongoDB. It provides authentication and authorization features using JSON Web Token (JWT) and bcrypt for password hashing.

## Features
- Create, edit, and delete sticky notes
- Highlight important notes
- User authentication and authorization
- Secure password storage using bcrypt
- File uploads with Multer
- Uses MongoDB for data storage

## Technologies Used
- **Frontend:** EJS (Embedded JavaScript)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT), bcrypt
- **File Handling:** Multer

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Sandipan-seth/NoteApp.git
   cd NoteApp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npm start
   ```

## Usage
- Visit `http://localhost:3000` to use the app.
- Sign up or log in to manage notes.
- Create, edit, highlight, or delete notes as needed.

## License
This project is licensed under the MIT License.

## Contribution
Pull requests are welcome! Feel free to contribute to this project by submitting issues or feature requests.

## Contact
For any questions, contact me at [GitHub](https://github.com/Sandipan-seth).
