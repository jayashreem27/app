
# BellaModa

BellaModa is a full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It supports user authentication, product management, cart functionality, and a responsive UI.
<img width="675" height="336" alt="image" src="https://github.com/user-attachments/assets/16b858cc-4302-4119-b28d-bf10fdf52442" />
<img width="673" height="313" alt="image" src="https://github.com/user-attachments/assets/364a3332-abc2-4834-9485-8e693acafb73" />
<img width="674" height="314" alt="image" src="https://github.com/user-attachments/assets/4a4c720b-786c-4447-9ecd-1ae19d10801c" />

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

## 🧑‍💻 Author

- GitHub: [jayashreem27](https://github.com/jayashreem27)

---
