import axios from "axios";
import React, { useState } from "react";
import "./create-post.css";

export default function CreatePostAndReview() {
  // Post states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  
  // Review states
  const [review, setReview] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
    flightNumber: ''
  });
  
  // Common states
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("post"); // 'post' or 'review'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Post functions
  const createPost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:3002/post", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMessage(response.data.message || "Пост сәтті жасалды ✅");
      resetPostForm();
    } catch (e) {
      setError(e.response?.data?.message || "Пост жасау кезінде қате орын алды ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetPostForm = () => {
    setTitle("");
    setContent("");
    setImage(null);
    setImageName("");
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  // Review functions
  const submitReview = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:3002/api/reviews", review);
      setMessage("Пікіріңіз сәтті жіберілді! Рахмет!");
      resetReviewForm();
    } catch (err) {
      setError(err.response?.data?.message || "Қате орын алды. Кейінірек қайталаңыз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetReviewForm = () => {
    setReview({
      name: '',
      email: '',
      rating: 5,
      comment: '',
      flightNumber: ''
    });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'post' ? 'active' : ''}`}
          onClick={() => setActiveTab('post')}
        >
          Пост жасау
        </button>
        <button 
          className={`tab-button ${activeTab === 'review' ? 'active' : ''}`}
          onClick={() => setActiveTab('review')}
        >
          Пікір қалдыру
        </button>
      </div>

      {message && <div className="message success">{message}</div>}
      {error && <div className="message error">{error}</div>}

      {activeTab === 'post' ? (
        <form onSubmit={createPost} className="form">
          <h2>Пост жасау</h2>
          
          <div className="form-group">
            <label>Тақырып</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Пост тақырыбын енгізіңіз"
              required
            />
          </div>

          <div className="form-group">
            <label>Мазмұны</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Пост мазмұнын жазыңыз..."
              required
            />
          </div>

          <div className="form-group">
            <label>Сурет</label>
            <div className="file-input">
              <span>{imageName || "Суретті таңдаңыз"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Жіберілуде...' : 'Пост жариялау'}
          </button>
        </form>
      ) : (
        <form onSubmit={submitReview} className="form">
          <h2>Пікір қалдыру</h2>
          
          <div className="form-group">
            <label>Аты-жөніңіз</label>
            <input
              type="text"
              name="name"
              value={review.name}
              onChange={handleReviewChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Электрондық пошта</label>
            <input
              type="email"
              name="email"
              value={review.email}
              onChange={handleReviewChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Рейс нөмірі</label>
            <input
              type="text"
              name="flightNumber"
              value={review.flightNumber}
              onChange={handleReviewChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Баға</label>
            <div className="rating">
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    id={`star${star}`}
                    name="rating"
                    value={star}
                    checked={review.rating == star}
                    onChange={handleReviewChange}
                  />
                  <label htmlFor={`star${star}`}>★</label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Пікіріңіз</label>
            <textarea
              name="comment"
              value={review.comment}
              onChange={handleReviewChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Жіберілуде...' : 'Пікірді жіберу'}
          </button>
        </form>
      )}
    </div>
  );
}