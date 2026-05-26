import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function loginUser(userData) {
    setCurrentUser(userData);
  }

  function logoutUser() {
    setCurrentUser(null);
  }

  return (
    <div className="app">
      <Navbar currentUser={currentUser} onLogout={logoutUser} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage onLogin={loginUser} />} />
        <Route path="/signup" element={<SignupPage onSignup={loginUser} />} />
        <Route
          path="/dashboard"
          element={
            currentUser ? (
              <DashboardPage currentUser={currentUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
