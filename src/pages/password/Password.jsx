import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./password.css";

export default function PasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendResetLink = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3002/auth/forgot-password",
        { email }
      );
      
      setMessage(response.data.message || "Reset link sent to your email!");
      setEmail("");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset link");
      console.error("Password reset error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="password-container">
      <div className="password-box">
        <h1>Құпия сөзді ұмыттыңыз ба?</h1>
        <p className="password-subtitle">
          Құпия сөзіңізді қалпына келтіру үшін электрондық поштаңызды енгізіңіз
        </p>

        {message && (
          <div className="password-message password-success">
            {message}
          </div>
        )}

        {error && (
          <div className="password-message">
            {error}
          </div>
        )}

        <form onSubmit={sendResetLink}>
          <div className="password-form-group">
            <label htmlFor="email">Электрондық пошта</label>
            <input
              type="email"
              id="email"
              className="password-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Электрондық поштаңызды енгізіңіз"
              required
            />
          </div>

          <button 
            type="submit" 
            className="password-button"
            disabled={isLoading}
          >
            {isLoading ? "Жіберілуде..." : "Сілтемені жіберу"}
          </button>
        </form>

        <div className="password-footer">
          Еске түсірдіңіз бе? <Link to="/login">Кіру</Link>
        </div>
      </div>
    </div>
  );
}