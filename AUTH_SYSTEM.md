# HobbyHub Authentication System

## Overview
A complete user authentication system with signup, login, and session management has been implemented for HobbyHub.

## Features Implemented

### 1. **User Registration (Signup)**
- Form validation (username, email, password confirmation)
- Password strength validation (minimum 6 characters)
- Duplicate account prevention (email and username)
- Secure password hashing with bcrypt (10 salt rounds)
- User data stored in `data/users.json`

### 2. **User Login**
- Email and password authentication
- Secure password comparison using bcrypt
- Session-based authentication using express-session
- Automatic session creation upon successful login
- 24-hour session expiration

### 3. **Session Management**
- Secure HTTP-only cookies
- Session data stored in memory (can be upgraded to persistent storage)
- User info accessible via `/api/user` endpoint
- Logout functionality with session destruction

### 4. **Protected Routes**
- Login/Signup pages redirect authenticated users to home page
- Ready for implementing route protection (use `isLoggedIn` middleware)

## Technology Stack

### Dependencies Added:
- **bcrypt** (^5.1.1) - Password hashing and verification
- **express-session** (^1.17.3) - Session management

## API Endpoints

### POST `/api/signup`
Create a new user account
```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```

### POST `/api/login`
Authenticate user and create session
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### GET `/api/user`
Get current logged-in user info (requires active session)
```json
{
  "id": "1234567890",
  "username": "testuser",
  "email": "test@example.com"
}
```

### POST `/api/logout`
Destroy session and logout user

## File Structure

```
hobbyhub/
├── server.js              # Updated with auth endpoints
├── package.json           # Updated with dependencies
├── data/
│   └── users.json         # User data storage
├── views/
│   ├── signup.html        # Updated with form and JS
│   ├── login.html         # Updated with form and JS
│   └── ...
└── public/
    └── css/
        └── style.css
```

## User Data Structure
```json
{
  "id": "1234567890",
  "username": "testuser",
  "email": "test@example.com",
  "password": "$2b$10$...",  // bcrypt hashed password
  "createdAt": "2026-05-26T04:41:47.696Z"
}
```

## Testing

### Test Credentials (Created During Demo):
- Username: `testuser`
- Email: `test@example.com`
- Password: `password123`

### Test Steps:
1. ✅ Navigate to `/signup`
2. ✅ Create account with username, email, and password
3. ✅ Account validation and password hashing works
4. ✅ Redirected to `/login` after successful signup
5. ✅ Login with email and password
6. ✅ Session created and user redirected to home page

## Security Considerations

✅ **Implemented:**
- Bcrypt password hashing (10 rounds)
- HTTP-only cookies for session
- Session expiration (24 hours)
- Input validation on signup

📝 **Recommendations for Production:**
- Use HTTPS (set `secure: true` in session config)
- Implement database (MongoDB, PostgreSQL, SQLite) instead of JSON file
- Add CSRF token protection
- Implement rate limiting on login attempts
- Add email verification for new accounts
- Add password reset functionality
- Use environment variables for session secret
- Implement refresh tokens for better security
- Add 2FA (Two-Factor Authentication)

## Future Enhancements

1. **User Profile Management**
   - Update username/email
   - Change password
   - Profile picture
   - User preferences

2. **Database Integration**
   - Replace JSON file with proper database
   - Add user statistics tracking
   - Historical data persistence

3. **Additional Features**
   - Email verification
   - Password reset flow
   - Social login (Google, GitHub)
   - User roles and permissions
   - Activity logging

4. **Security Upgrades**
   - Email-based password recovery
   - Two-factor authentication
   - Rate limiting
   - Account lockout after failed attempts
