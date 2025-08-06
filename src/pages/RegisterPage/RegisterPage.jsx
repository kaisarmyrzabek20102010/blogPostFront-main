  import axios from "axios";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "./register.css";

  export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const sendData = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3002/auth/register", {
          username,
          password,
        });

        console.log(response.data);
        setUsername("");
        setPassword("");
        setMessage("Сен сәтті тіркелдің!");
        navigate("/login");
      } catch (e) {
        setMessage(`Қате шықты ${e.message}`);
      }
    };

    return (
      <div className="register-container">
        <div className="register-box">
          <h1>Тіркелу</h1>
          <p className="register-subtitle">
            Жаңа аккаунт құру үшін деректеріңізді енгізіңіз
          </p>

          {message && (
            <div
              className={`register-message ${
                message.includes("Қате") ? "" : "register-success"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={sendData}>
            <div className="register-form-group">
              <label htmlFor="username">Пайдаланушы аты</label>
              <input
                type="text"
                id="username"
                className="register-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Пайдаланушы атыңызды енгізіңіз"
              />
            </div>

            <div className="register-form-group">
              <label htmlFor="password">Құпия сөз</label>
              <input
                type="password"
                id="password"
                className="register-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Құпия сөзіңізді енгізіңіз"
              />
            </div>

            <button type="submit" className="register-button">
              Тіркелу
            </button>
          </form>

          <div className="register-footer">
            Аккаунтыңыз бар ма? <a href="/login">Кіру</a>
          </div>
        </div>
      </div>
    );
  }
