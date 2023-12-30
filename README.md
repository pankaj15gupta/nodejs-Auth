# Express Auth Starter Template

This is a complete authentication system that can be used as a starter code for creating any new express application. It includes sign up, sign in, sign out, reset password, and social authentication using Google. Additionally, it also includes a bonus feature of forgot password functionality.
The code is well-commented for easy understanding and scalability. The folder structure is separate for models, controllers, and routes, making it easy to scale the project.
This code can serve as a boilerplate for any Express application that requires a basic authentication module.

## Table of Contents

-   [Features](#features)
-   [Functionality](#functionality)
-   [Getting Started](#getting-started)
-   [Dependencies](#dependencies)
-   [Contributing](#contributing)
-   [License](#license)
-   [Conclusion](#conclusion)

## Features

-   Sign up with email
-   Sign in with email
-   Sign out
-   Reset password after sign in
-   Password stored in the db is encrypted
-   Google login/signup (Social authentication)
-   Forgot password (send a reset password link which expires in some time.)
-   Display notifications for unmatching passwords during sign up and incorrect password during sign in


## Functionality

-   Sign Up
    Users can sign up using their email. The password is encrypted and stored in the database. If the passwords do not match, an error message is displayed. Re-captcha is enabled on the sign-up page.
-   Sign In
    Users can sign in using their email and password. If the email and password are incorrect, an error message is displayed. After sign-in, the user is redirected to a blank home page with sign-out and reset password buttons. Re-captcha is enabled on the sign-in page.
-   Sign Out
    Users can sign out of their account using the sign-out button on the home page.
-   Reset Password
    Users can reset their password after signing in. If the user forgets their password, they can reset it using the forgot password feature. A random password can be generated and sent via email, or a reset password link can be sent, which expires after some time.
-   Social Authentication
    Users can sign up and sign in using their Google account.

## Getting Started

To get started with this authentication system, follow the instructions below:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in the root directory of the project, and add your environment variables as necessary.
4. Run `npm run start` to start the application.

## Dependencies

This authentication system uses the following dependencies:

    "axios": "^1.6.3",
    "bcrypt": "^5.1.1",
    "body-parse": "^0.1.0",
    "connect-flash": "^0.1.1",
    "connect-mongo": "^5.1.0",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "express-ejs-layouts": "^2.5.1",
    "express-session": "^1.17.3",
    "mongoose": "^8.0.3",
    "nodemailer": "^6.9.7",
    "nodemon": "^3.0.2",
    "passport": "^0.7.0",
    "passport-google-oauth2": "^0.2.0",
    "passport-local": "^1.0.0",
    "validator": "^13.11.0"



This complete authentication system is a great starting point for any new application that requires user authentication. It includes all the necessary features and functionality, and the code is well-commented and scalable.


## Note 

1. PLease create the googe secret key and client id
2. Enter Your email address and 16 digit passkey by creating on your google account 