import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3002/auth/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", response.data.token);
      setMessage("Сен сәтті кірдің!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Қате шықты: Пайдаланушы аты немесе құпия сөз дұрыс емес"
      );
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Қош келдіңіз</h1>
          <p>Жүйеге кіру үшін деректеріңізді енгізіңіз</p>
        </div>

        <form onSubmit={sendData} className="login-form">
          {message && (
            <div className="login-alert success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              {message}
            </div>
          )}

          {error && (
            <div className="login-alert error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {error}
            </div>
          )}

          <div className="input-group">
            <label htmlFor="username">Пайдаланушы аты</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Пайдаланушы атыңызды енгізіңіз"
              required
              disabled={isLoading}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Құпия сөз</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Құпия сөзіңізді енгізіңіз"
              required
              disabled={isLoading}
            />
          </div>

          

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Кіруде..." : "Кіру"}
          </button>
        </form>

        <div className="login-footer">
          <div className="password-forgot-link">
            <Link to="/password">Құпия сөзіңізді ұмыттыңыз ба?</Link>
          </div>
          <p>
            Аккаунтыңыз жоқ па? <Link to="/register">Тіркелу</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
