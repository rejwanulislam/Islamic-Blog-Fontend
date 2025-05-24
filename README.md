# 🕌 Islamic Blog (Frontend)

An Islamic-themed blog application frontend built using **React**, **Vite**, **Tailwind CSS**, and **Firebase Authentication**.

🔗 **Live Website:** [https://islamic-blog.netlify.app](https://islamic-blog.netlify.app)  
🔗 **Backend Repository:** https://github.com/RejwanulIslam/Islamic-Blog-Backend

---

## 🧰 Features

- View all blog posts
- Search and filter blogs by title or category
- Wishlist functionality to save favorite blogs
- Comment system
- User authentication via Firebase
- Responsive design for mobile and desktop
- Backend API integration with secured JWT auth

---

## 🛠 Tech Stack

- **React** – Frontend library
- **Vite** – Fast build tool
- **Tailwind CSS** – Utility-first styling
- **DaisyUI** – Prebuilt components
- **Firebase Authentication** – User login/signup
- **Axios** – API requests
- **React Router DOM** – Routing
- **React Hot Toast** – Notifications

---

## ⚙️ Getting Started

### 1. Clone the Repository

``` bash
git clone https://github.com/RejwanulIslam/Islamic-Blog-Fontend.git
cd islamick-blog-frontend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm run dev
🔐 Authentication
Firebase is used for user login and registration.

On login, the frontend requests a JWT from the backend and stores it in an httpOnly cookie.

Protected routes are restricted based on login status.

🌐 Backend API Integration
The frontend communicates with a secure Express + MongoDB backend.

Example API Calls:
Endpoint	Method	Description
/allblog	GET	Get all blog posts
/wishlist	POST	Add a blog to wishlist
/comment/:id	GET	Get comments for a blog

🔗 Backend Repository: https://github.com/RejwanulIslam/Islamic-Blog-Backend

🎨 UI Design
Built with Tailwind CSS and styled using DaisyUI components

Fully responsive design

Uses react-hot-toast for elegant notification popups

🤝 Contributions
Contributions are welcome!
If you have ideas or issues, feel free to open an issue or submit a pull request.