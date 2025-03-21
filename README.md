# 🛒 E-Comm Dashboard

## 📌 Overview
The **E-Comm Dashboard** is a full-stack e-commerce management system that enables users to manage products efficiently. It features authentication, product management, and secure API access using JWT.

## 🚀 Features
### **🖥️ Backend (Express.js & MongoDB)**
- 🔐 **User Authentication** (Signup/Login with JWT authentication)
- 📦 **Product Management** (Add, update, delete, and fetch products)
- 🔍 **Search Functionality** (Search products by name, category, company, or price)
- 🔑 **Token-based Authorization** (Ensures secure API access)
- 🗄️ **MongoDB Database** (Stores users and product details)
- 🌍 **CORS Handling** (Allows cross-origin requests)

### **💻 Frontend (React.js)**
- 🏠 **Navigation (`Nav.js`)** - Displays menu options
- 🔑 **Authentication Pages (`SignUp.js`, `Login.js`)** - Handles user signup and login
- 🔒 **Private Routes (`PrivateComponent.js`)** - Restricts access to logged-in users
- 📋 **Product Management (`AddProduct.js`, `ProductList.js`, `UpdateProduct.js`)** - Allows product CRUD operations
- 📢 **Footer (`Footer.js`)** - Displays footer information
- 🛠️ **Routing:**
  - 🏠 `/` - Shows the product list
  - ➕ `/add` - Adds a new product
  - ✏️ `/update/:id` - Updates a product
  - 🔑 `/signup` - Signup page
  - 🔓 `/login` - Login page
  - 🚪 `/logout` & 👤 `/profile` - Placeholder components

## 🌐 MERN Stack
This project is built using the **MERN stack**, which includes:
- 🟢 **MongoDB** - NoSQL database for storing users and products
- 🟡 **Express.js** - Backend framework for handling API requests
- 🔵 **React.js** - Frontend library for building an interactive user interface
- ⚫ **Node.js** - Runtime environment for executing JavaScript on the server

## ⚙️ Installation Guide
### **📌 Prerequisites**
- 📌 Node.js and npm installed
- 🗄️ MongoDB installed and running
- 🌍 Git installed

### **🔧 Setup Steps**
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/E-Comm-Dashboard.git
   cd E-Comm-Dashboard
   ```
2. **Backend Setup:**
   ```sh
   cd backend
   npm install
   node index.js
   ```
3. **Frontend Setup:**
   ```sh
   cd frontend
   npm install
   npm start
   ```

## 🔗 API Endpoints
### **🔐 User Authentication**
- `POST /register` - Register a new user
- `POST /login` - Login user

### **🛒 Product Management**
- `POST /add-product` - Add a new product
- `GET /products` - Get all products
- `GET /product/:id` - Get a specific product
- `PUT /product/:id` - Update a product
- `DELETE /product/:id` - Delete a product
- `GET /search/:key` - Search for products

## 📈 Future Enhancements
- 🎨 Improve UI/UX design for better user experience
- 🏷️ Add product categories for better organization
- 👤 Implement user profile editing functionality
- 📑 Add pagination to product lists for better navigation
- 🏷️ Add product sorting and filtering options
- 🌙 Implement a dark mode for better user experience



---
**E-Comm Dashboard** is a secure and interactive e-commerce management system built using the MERN stack, providing users with a seamless experience. 🚀


