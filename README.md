
# Shopito

Shopito is a full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It supports user authentication, product management, cart functionality, and a responsive UI.

## 🌐 Live Demo

_Coming soon_ or _Host it locally using the instructions below._

---

## 📁 Project Structure

```
cc/
├── backend/          # Node.js + Express server
├── frontend/         # React.js client app
└── README.md         # Project documentation
```

---

## ⚙️ Backend (Express.js + MongoDB)

### Features

- RESTful API for user and product management
- JWT-based user authentication
- Middleware for error handling and route protection
- MongoDB models for users and products

### Setup

```bash
cd backend
npm install
npm run start
```

Environment variables to create in a `.env` file:

```
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key
```

---

## 💻 Frontend (React.js)

### Features

- Responsive UI using components
- Redux for global state management
- Pages for login, signup, cart, home, and user profile
- Integrated product display with routing

### Setup

```bash
cd frontend
npm install
npm start
```

---

## 🚀 Technologies Used

- **Frontend**: React.js, Redux
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Other**: React Router, Middleware, REST APIs

---

## 🛠️ Project Commands

### Backend

| Command       | Description               |
|---------------|---------------------------|
| `npm run start` | Start backend server       |

### Frontend

| Command       | Description               |
|---------------|---------------------------|
| `npm start`     | Start React development server |

---

## 🤝 Contributions

Feel free to fork the repo and submit pull requests.

---

## 🧑‍💻 Author

- GitHub: [jayashreem27](https://github.com/jayashreem27)

---

## 📄 License

This project is licensed under the MIT License.
