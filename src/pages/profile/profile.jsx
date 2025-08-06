import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get("http://localhost:3002/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (e) {
        setMessage("Қол жеткізу мүмкін емес. Қайта кіріңіз.");
        setTimeout(() => navigate("/login"), 2000);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h1>Профиль</h1>
        {message && <div className="profile-message">{message}</div>}

        {user ? (
          <div className="profile-info">
            <p><strong>Пайдаланушы аты:</strong> {user.username}</p>
            {user.email && <p><strong>Email:</strong> {user.email}</p>}
            <p><strong>Тіркелген күні:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        ) : (
          <p>Жүктелуде...</p>
        )}

        <button onClick={handleLogout} className="profile-logout-button">
          Шығу
        </button>
      </div>
    </div>
  );
}
