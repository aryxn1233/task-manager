# 📝 Task Manager App

A full-stack Task Manager application built with **React, Node.js, Express, MongoDB, and JWT Authentication**.  
Users can sign up, log in, and manage their tasks (add, edit, delete, toggle status).  

## ✨ Features
- 🔐 User Authentication (JWT-based signup & login)
- ➕ Add new tasks
- ✏️ Edit tasks
- ✅ Toggle task status (Pending/Completed)
- 🗑️ Delete tasks
- 📋 Task list view
- ☁️ Deployed backend (Render) & frontend (Vercel)

---

## 🛠 Tech Stack
**Frontend:** React (CRA), CSS/Tailwind (if used)  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas  
**Auth:** JWT (JSON Web Tokens)  
**Deployment:** Render (backend), Vercel (frontend)  
## Setup Instructions

### Backend

1. Clone the repository.
2. Navigate to backend folder.
3. Create a `.env` file with:
4. MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4. Add your Firebase service account JSON key to the backend config folder.
5. Install dependencies:
npm install

text
6. Run the backend server:
npm run dev




---

## Usage Guide

- Register or log into the app.
- Add new tasks with title and description.
- Toggle task status as pending or completed.
- Edit or delete tasks as needed.

---


---

## API Endpoints

- `POST /api/auth/register` – Register new user.
- `POST /api/auth/login` – Log in user and get JWT.
- `GET /api/tasks` – List user tasks.
- `POST /api/tasks` – Create a new task.
- `PUT /api/tasks/:id` – Update a task.
- `DELETE /api/tasks/:id` – Delete a task.
- `POST /api/notifications/save-token` – Save FCM token for user.

---

## Folder Structure

- `/backend` – Backend source code (Express API, controllers, models)
- `/config` – Configuration files including Firebase keys/mongo URI
- `/routes` – Express routes
- `/controllers` – API business logic
- `/models` – Database schemas with Mongoose
- `/services` – External services such as Firebase helpers

---

## Future Improvements

- Create cross-platform mobile version (React Native/Flutter).
- Enhanced notification options and user preferences.
- Additional UI/UX enhancements and accessibility.
- Add comprehensive automated tests.

---

## Contact

For questions or more information, reach out:  
Aryan Thakur
aryxnrajpoot786@gmail.com   


---

*Thank you for exploring this project!*
