// src/Navbar.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // safe parse user from localStorage
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    console.warn("Invalid user in localStorage:", e);
    user = null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <header className="navbar">
      <h1 className="navbar-logo" onClick={() => navigate("/")}>Employee MS</h1>
      <div className="navbar-right">
        {user ? (
          <>
            <span className="navbar-center">Welcome, {user.fullname}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn-login" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
