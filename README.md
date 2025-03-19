Co-Working Space Seat Booking Application

Description

This is a responsive and feature-rich co-working space seat booking application built using React and TypeScript. The application is designed based on the provided Figma design and utilizes state management for maintaining the application state. The center's data is treated as an API response, fetched from GitHub, and displayed accordingly.

Live Demo

The application is deployed and accessible at:https://wonderful-croissant-deedae.netlify.app/

Features

Developed using React + TypeScript for robust and scalable code.

Responsive design ensuring seamless experience across phones, tablets, and desktops.

State management implemented using Redux-Saga for efficient data handling.

UI built with Tailwind CSS for a polished and modern look.

Fetches center data from GitHub API and displays it dynamically.

Hosted on Netlify for fast and reliable access.

Tech Stack

React 19

TypeScript

Redux-Saga (State Management)

Tailwind CSS (Styling)

React Router (For navigation)

Webpack (For bundling and development server)

Netlify (For deployment)

Project Structure:

|-- src
    |-- assets/            # Images and icons
    |-- components/        # Reusable UI components
    |-- pages/             # Page components
    |-- store/             # Redux store, actions, reducers, sagas
    |-- services/          # API service files
    |-- libs/              # TypeScript type definitions
    |-- App.tsx            # Main application file
    |-- index.tsx          # Entry point
    |-- index.css          # Global styles

Installation & Setup

To run the project locally, follow these steps:

1. Clone the Repository

git clone https://github.com/your-repo-url.git
cd coworking-seat-booking

2. Install Dependencies

npm install  # or yarn install

3. Start Development Server

npm start  # or yarn start

The application will be available at http://localhost:3000.

Deployment

The application is deployed on Netlify. To deploy updates:

Build the project:

npm run build

Deploy using Netlify CLI:

netlify deploy --prod

Contributing

