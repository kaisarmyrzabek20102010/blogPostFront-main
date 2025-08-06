import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./cards.css";

export default function CardsPage() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFlightSelect = async (flightId) => {
    setIsLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3002/flights/select",
        { flightId }
      );

      setMessage(response.data.message || "Flight selected successfully!");
      setSelectedFlight(flightId);
      setTimeout(() => navigate("/booking"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to select flight");
      console.error("Flight selection error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const flights = [
    {
      id: 1,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJCoMyA64tWT5AD-mVTAemwYwzRjl2tZeg&s",
      airline: "Air Astana",
      departure: "06:20",
      arrival: "08:45",
      price: "45,000 ₸",
      duration: "2h 25m",
    },
    {
      id: 2,
      logo: "https://transavia.kz/qazaq%20air%20logo.png",
      airline: "FlyArystan",
      departure: "07:30",
      arrival: "10:15",
      price: "32,000 ₸",
      duration: "2h 45m",
    },
    {
      id: 3,
      logo: "https://transavia.kz/qazaq%20air%20logo.png",
      airline: "Qazaq Air",
      departure: "08:45",
      arrival: "11:30",
      price: "38,500 ₸",
      duration: "2h 45m",
    },
    {
      id: 4,
      logo: "https://drawlogo.org/uploads/logos/fly/bold-fashion-fly-logo.png",
      airline: "Air Astana",
      departure: "10:15",
      arrival: "13:45",
      price: "47,300 ₸",
      duration: "3h 30m",
    },
    {
      id: 5,
      logo: "https://transavia.kz/qazaq%20air%20logo.png",
      airline: "FlyArystan",
      departure: "12:00",
      arrival: "14:30",
      price: "35,500 ₸",
      duration: "2h 30m",
    },
    {
      id: 6,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJCoMyA64tWT5AD-mVTAemwYwzRjl2tZeg&s",
      airline: "Qazaq Air",
      departure: "14:20",
      arrival: "17:05",
      price: "39,800 ₸",
      duration: "2h 45m",
    },
    {
      id: 7,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJCoMyA64tWT5AD-mVTAemwYwzRjl2tZeg&s",
      airline: "Air Astana",
      departure: "16:10",
      arrival: "18:55",
      price: "44,900 ₸",
      duration: "2h 45m",
    },
    {
      id: 8,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJCoMyA64tWT5AD-mVTAemwYwzRjl2tZeg&s",
      airline: "FlyArystan",
      departure: "18:30",
      arrival: "21:15",
      price: "33,700 ₸",
      duration: "2h 45m",
    },
    {
      id: 9,
      logo: "https://transavia.kz/qazaq%20air%20logo.png",
      airline: "Qazaq Air",
      departure: "20:00",
      arrival: "22:45",
      price: "40,100 ₸",
      duration: "2h 45m",
    },
    {
      id: 10,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJCoMyA64tWT5AD-mVTAemwYwzRjl2tZeg&s",
      airline: "Air Astana",
      departure: "21:30",
      arrival: "00:15",
      price: "48,200 ₸",
      duration: "2h 45m",
    },
    {
      id: 11,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJCoMyA64tWT5AD-mVTAemwYwzRjl2tZeg&s",
      airline: "FlyArystan",
      departure: "05:45",
      arrival: "08:10",
      price: "31,900 ₸",
      duration: "2h 25m",
    },
    {
      id: 12,
      logo: "https://transavia.kz/qazaq%20air%20logo.png",
      airline: "Qazaq Air",
      departure: "09:15",
      arrival: "11:50",
      price: "39,500 ₸",
      duration: "2h 35m",
    },
    {
      id: 13,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0g2rHSi0CklCxF-Tg7TC-qpe-Z4Gh8pbSA&s",
      airline: "Air Astana",
      departure: "13:20",
      arrival: "15:55",
      price: "46,800 ₸",
      duration: "2h 35m",
    },
    {
      id: 14,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJCoMyA64tWT5AD-mVTAemwYwzRjl2tZeg&s",
      airline: "FlyArystan",
      departure: "17:40",
      arrival: "20:25",
      price: "34,200 ₸",
      duration: "2h 45m",
    },
    {
      id: 15,
      logo: "https://transavia.kz/qazaq%20air%20logo.png",
      airline: "Qazaq Air",
      departure: "19:10",
      arrival: "21:55",
      price: "41,600 ₸",
      duration: "2h 45m",
    },
    {
      id: 16,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9Wb0wmdZ4KDF1q65Q0z6QyUYMd7RmPJTYA&s",
      airline: "Air Astana",
      departure: "22:30",
      arrival: "01:15",
      price: "49,500 ₸",
      duration: "2h 45m",
    },
    {
      id: 17,
      logo: "https://img.freepik.com/free-vector/airplane-with-circle-flight-path_78370-4778.jpg?semt=ais_hybrid&w=740&q=80",
      airline: "FlyArystan",
      departure: "04:20",
      arrival: "06:45",
      price: "30,800 ₸",
      duration: "2h 25m",
    },
    {
      id: 18,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJCoMyA64tWT5AD-mVTAemwYwzRjl2tZeg&s",
      airline: "Qazaq Air",
      departure: "08:50",
      arrival: "11:25",
      price: "38,900 ₸",
      duration: "2h 35m",
    },
    {
      id: 19,
      logo: "https://img.freepik.com/premium-vector/hand-drawn-travel-logo-design_23-2151666879.jpg?semt=ais_hybrid&w=740&q=80",
      airline: "Air Astana",
      departure: "12:40",
      arrival: "15:15",
      price: "45,700 ₸",
      duration: "2h 35m",
    },
    {
      id: 20,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0g2rHSi0CklCxF-Tg7TC-qpe-Z4Gh8pbSA&s",
      airline: "FlyArystan",
      departure: "16:50",
      arrival: "19:35",
      price: "32,500 ₸",
      duration: "2h 45m",
    },
  ];

  return (
    <div className="cards-container">
      {message && <div className="message success">{message}</div>}
      {error && <div className="message error">{error}</div>}

      <div className="flight-cards">
        {flights.map((flight) => (
          <div className="flight-card" key={flight.id}>
            <img src={flight.logo} className="airline-logo" />

            <h2 className="airline-title">{flight.airline}</h2>
            <div className="flight-times">
              <span>{flight.departure}</span>
              <span>{flight.arrival}</span>
            </div>
            <button
              className={`select-btn ${
                selectedFlight === flight.id ? "selected" : ""
              }`}
              onClick={() => handleFlightSelect(flight.id)}
              disabled={isLoading}
            >
              {isLoading && selectedFlight === flight.id
                ? "Жүктелуде..."
                : "ТАНДАУ"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
