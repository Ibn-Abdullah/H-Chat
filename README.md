# Hazem Chat App 💬

A real-time chat application built with **React, Node.js, Express, MongoDB, and Socket.IO**.  
Users can sign up, log in, update their profiles, and chat with friends instantly.  

---

## 🚀 Features
- 🔐 Authentication (Sign up, Login, Logout)
- 👤 User profiles with avatars
- 💬 Real-time messaging (Socket.IO)
- 🌙 Light/Dark mode toggle
- 📸 Profile picture upload (Cloudinary)
- ✅ Toast notifications
- 📱 Responsive UI with TailwindCSS + DaisyUI

---

## 🛠️ Tech Stack
**Frontend:** React, Zustand, TailwindCSS, DaisyUI, React Router  
**Backend:** Node.js, Express, MongoDB (Mongoose), Socket.IO  
**Image Hosting:** Cloudinary  
**State Management:** Zustand  
**Notifications:** React Hot Toast  

---

## 📦 Installation

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Ibn-Abdullah/H-Chat.git
cd H-Chat
### 2️⃣ Install dependencies

Frontend:

cd frontend
npm install


Backend:

cd backend
npm install

### 3️⃣ Setup environment variables

Create a .env file inside backend/ with:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### 4️⃣ Run the project

Backend:

npm run dev


Frontend:

npm run dev

