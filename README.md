# Gmail Clone

A full-stack Gmail clone application built with React.js and Node.js, featuring user authentication, email management, and a responsive UI that mimics Gmail's interface.

## 🚀 Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Email Management**: Create, read, and delete emails
- **Search Functionality**: Search emails by subject, recipient, or message content
- **Responsive Design**: Gmail-like interface with modern UI components
- **Real-time Updates**: Dynamic email list updates
- **Persistent State**: User session and data persistence using Redux Persist

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Redux Persist** - State persistence
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **React Icons** - Icon library
- **React Avatar** - User profile avatars

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcrypt.js** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Clone the Repository
```bash
git clone https://github.com/abhii08/gmail_clone-react-redux-nodejs-mongodb.git
cd gmail-clone
```

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/gmailclone
SECRET_KEY=your_jwt_secret_key
```

Start the backend server:
```bash
npm run dev
```
The backend server will run on `http://localhost:8080`

### Frontend Setup
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

## 🏗️ Project Structure

```
gmail-clone/
├── backend/
│   ├── controllers/
│   │   ├── email.controller.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── email.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── email.route.js
│   │   └── user.route.js
│   ├── middleware/
│   │   └── isAuthenticated.js
│   ├── db/
│   │   └── connectDB.js
│   ├── index.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Body.jsx
    │   │   ├── Email.jsx
    │   │   ├── Emails.jsx
    │   │   ├── Inbox.jsx
    │   │   ├── Login.jsx
    │   │   ├── Mail.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── SendEmail.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Signup.jsx
    │   ├── hooks/
    │   │   └── useGetAllEmails.js
    │   ├── redux/
    │   │   ├── appSlice.js
    │   │   └── store.js
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## 🔑 API Endpoints

### Authentication
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/logout` - User logout

### Email Management
- `POST /api/v1/email/create` - Create new email
- `GET /api/v1/email/getallemails` - Get all user emails
- `DELETE /api/v1/email/:id` - Delete specific email

## 🎯 Usage

1. **Registration**: Create a new account with full name, email, and password
2. **Login**: Sign in with your credentials
3. **Compose Email**: Click the "Compose" button to write a new email
4. **View Emails**: Browse your inbox and click on any email to read it
5. **Search**: Use the search bar to find specific emails
6. **Delete**: Remove emails by clicking the delete button in email view

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:
- Tokens are stored as HTTP-only cookies
- Protected routes require valid authentication
- Automatic logout on token expiration

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Install dependencies: `npm install`
3. Start the production server: `npm start`

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist` folder to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ by [Abhinav Sharma]

## 🐛 Known Issues

- Email sending functionality is simulated (not connected to actual email service)
- File attachments not yet supported
- Email threading not implemented

## 🔮 Future Enhancements

- [ ] Email attachments support
- [ ] Email threading and conversations
- [ ] Rich text editor for email composition
- [ ] Email categories and labels
- [ ] Real-time notifications
- [ ] Email scheduling
- [ ] Spam filtering
- [ ] Integration with actual email services

---

**Note**: This is a clone application for educational purposes and is not affiliated with Google or Gmail.
