#  Active Plate - AI Fitness & Nutrition Tracker

Welcome to **Active Plate**, a modern React-based fitness and meal planner dashboard engineered with fully Serverless architectures, providing diagnostic tracking directly on the client side.

---

##  Key Features

-   **Seamless Authentication**: Instant Google Sign-In and Traditional Email/Password Auth with direct Redux state preserves (no backend server dependencies required).
-   **Dynamic Setup Dashboards**: 3 independent questionnaires (Meal Plan, Exercise Only, The Combined) connected securely to Firestore collections.
-   **Custom Warning System**: Smooth validations using Redux dispatcher alerts guarding blank inputs upon saves.
-   **Personal Medical Report View**: Detailed diagnostics output setup featuring mock profiles for assessing body conditions synchronously upon submissions.

---

##  Human Factors & Behavioral Insights

This application is designed as a study on **Human Factors in Digital Health**. It captures several user data points not typical of standard trackers to understand lifestyle triggers:
- **Stress & Motivation Tracking**: Analysing how mental state affects diet planning layout frequencies.
- **Sleep & Recovery metrics**: Correlating injury history triggers with body fatigue cycles statically modeled.
- **Forms Interaction Design**: Testing responsive overlay questionnaires mapping synchronous diagnostic views cleanly on the node views.

---

##  Tech Stack

-   **Frontend**: React.js, Redux (`react-redux`, `redux`), Framer Motion (Animations), React-Icons.
-   **Backend (Serverless)**: Cloud Firestore (Data storage), Firebase Auth (Secure logins).
-   **Styling**: Vanilla CSS with Flexbox grids for fully responsive layouts.

---

## 📐 Current System Architecture

The setup currently operates fully **Serverless on the Client side**, reading/writing directly to Firebase endpoints synchronously.

<p align="center"> <img src="DOC/Active%20plate%20now%20SYS%20architecture.png" width="850"> </p>

---

## 🏁 Getting Started

### 1. Pre-requisites
Make sure you have `Node.js` installed on your workstation.

### 2. Installation
```bash
# Navigate to the clients directory
cd clients

# Install packages
npm install
```

### 3. Environment Variables
Create a `.env` file in your `clients/` folder with your Firebase app configuration keys:
```env
REACT_APP_FIREBASE_API_KEY= "your-api-key"
REACT_APP_FIREBASE_AUTH_DOMAIN= "your-domain"
REACT_APP_FIREBASE_PROJECT_ID= "your-id"
```

### 4. Running the App
```bash
npm start
```
The app will initialize at `http://localhost:3000`.

---

##  Future Expansion & AI Pipelines

We plan to transition our current visual prototype into a fully automated AI generation loop that calculates real medical and physical diagnostic triggers.

<p align="center"> <img src="DOC/Active%20plate%20future%20fully%20SYS%20architecture.png" width="850"> </p>
---

*© 2026 Sangeeth. All rights reserved.*
