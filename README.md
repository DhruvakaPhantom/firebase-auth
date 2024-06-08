# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Sure, here are the steps without code for your README file:

### Steps to Connect Firebase to React App

1. **Create Firebase Project:**
   - Go to the Firebase Console.
   - Click "Add Project" and follow the setup instructions.

2. **Register Web App:**
   - In the Firebase console, select your project.
   - Click the `</>` icon to add a web app.
   - Register your app and copy the Firebase config object.

3. **Set Up React App:**
   - Create a React app if you don't have one:
     - Run `npx create-react-app my-firebase-app`
     - Navigate to your app directory: `cd my-firebase-app`
   - Install Firebase SDK: `npm install firebase`

4. **Initialize Firebase:**
   - Create a file named `firebase.js` in the `src` directory.
   - Import the Firebase SDK and initialize Firebase with your config object.

5. **Use Firebase in Components:**
   - Import Firebase into your React components as needed (e.g., Authentication, Firestore).

6. **Environment Variables (Optional):**
   - Create a `.env` file in the project root and add your Firebase configuration.
   - Update `firebase.js` to use these environment variables.

7. **Start the App:**
   - Run `npm start` to start the development server.

Your React app is now connected to Firebase!
