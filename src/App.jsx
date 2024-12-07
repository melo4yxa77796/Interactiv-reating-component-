import React, { useState } from "react";
import RatingForm from "./components/RatingForm";
import ThankYouCard from "./components/ThankYouCard";
import "./App.css";

const App = () => {
  // Состояния
  const [rating, setRating] = useState(null); // Хранит выбранный рейтинг
  const [isSubmitted, setIsSubmitted] = useState(false); // Отвечает за показ карточки "Thank you"

  // Обработчик отправки рейтинга
  const handleRatingSubmit = (selectedRating) => {
    setRating(selectedRating); // Установить выбранный рейтинг
    setIsSubmitted(true); // Отобразить карточку благодарности
  };

  return (
    <div className="app-container">
      {!isSubmitted ? (
        <RatingForm onSubmit={handleRatingSubmit} />
      ) : (
        <ThankYouCard rating={rating} />
      )}
    </div>
  );
};

export default App;
