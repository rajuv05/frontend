import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "https://backend-2-vq6j.onrender.com/api/auth/login", // ✅ deployed backend
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ usernameOrEmail, password }),
        }
      );

      if (res.ok) {
        setIsSuccess(true);
        setMessage("✅ Login successful! Redirecting...");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        const errMsg = await res.text();
        setIsSuccess(false);
        setMessage(errMsg || "❌ Invalid username or password!");
      }
    } catch (err) {
      console.error("Login error:", err);
      setIsSuccess(false);
      setMessage("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <input
          className="auth-input"
          type="text"
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleLogin}>
          Login
        </button>

        {message && (
          <div
            className={`login-message ${isSuccess ? "success" : "error"}`}
          >
            {message}
          </div>
        )}

        <div className="auth-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
