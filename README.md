# 🏢 Society Management System (SMS)

A full-featured Society Management System built using the **MEAN Stack** (MongoDB, Express.js, Angular 12, Node.js).  
This application manages society operations including admin controls, resident interaction, visitor registration, parking, maintenance, events, notices, and more.

---

## 👨‍💻 Developed by

**Nirmal Barot**

---
## 🚀 Tech Stack

- **Frontend**: Angular 12  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT and face-matching for visitors  
- **Deployment**: Compatible with GitHub, Vercel, Netlify (frontend), or any Node-compatible server

---

## 🔐 User Types and Features

### 🛠️ Admin Features

- ✅ Admin Login (via Email & Password)
- ✅ Admin Dashboard & About Page
- ✅ Resident Management (CRUD)
- ✅ Visitor Management (CRUD)
- ✅ Parking Request Management (Approve/Reject)
- ✅ View and Export Reports
- ✅ Notice Management (CRUD)
- ✅ Event Management (CRUD)
- ✅ Maintenance Tracking (View who paid)
- ✅ View All Feedbacks
- ✅ View All Visitors & Their Purpose
- ✅ 🤖 **Advanced Chatbot**:
  - Responds to greetings
  - Answers queries using stored data
  - Chat with database-integrated answers (not hardcoded)

---

### 🧍 Resident Features

- ✅ Resident Login (Email & Password)
- ✅ Resident Home & About Page (Same design across all)
- ✅ Book Parking Slot (Send request)
- ✅ Pay Maintenance
- ✅ File Complaints
- ✅ View Events & Notices
- ✅ View Own Profile

---

### 🚶 Visitor Features

- ✅ Visitor Login via Face Matching
  - (Name, Email, Live Picture vs Database Photo Comparison)
- ✅ Visitor Home & About Page (Same design)
- ✅ Submit Feedback
- ✅ Add Visit Purpose
- ✅ View Own Profile

---

### 🔒 Logout Functionality

- Logout is available for:
  - Admin
  - Resident
  - Visitor

---

## 📁 Project Structure

📦 Society Management System/

├── frontend/ # Angular 12 Application

├── backend/ # Node.js Express Backend

└── README.md # You're here!


---

## 🛠️ Setup Instructions

### 📌 Prerequisites

- Node.js (v14 or higher)
- Angular CLI
- MongoDB installed or access to MongoDB Atlas

---

### 🔧 Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/nirmal0306/SMS.git
   cd SMS

---
# Start Backend

cd backend

npm install

node server.js

---

# Start Frontend

cd frontend

npm install

npm start

---


# ✅ Login Credentials for Testing (if seeded)
| Role     | Email                                         | Password     |
| -------- | --------------------------------------------- | ------------ |
| Admin    | [admin@example.com](mailto:admin@example.com) | admin123     |
| Resident | [user@example.com](mailto:user@example.com)   | user123      |
| Visitor  | Any name, email, image                        | (Face match) |

---

# 📸 Visitor Face Login Feature
Visitor uploads a live photo during login.

Photo is compared with one stored in the DB.

If matched, visitor is allowed to log in.

---

# 📩 Contact
If you have any questions, suggestions, or feedback, feel free to reach out.

📛 Developed & Maintained by:

- 📧 [nirmalbarot067@gmail.com](mailto:nirmalbarot067@gmail.com)  
- 🌐 [GitHub](https://github.com/nirmal0306)  
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nirmal-barot/)

---