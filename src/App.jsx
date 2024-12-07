import React, { useState } from "react";
import RatingForm from "./components/RatingForm";
import ThankYouCard from "./components/ThankYouCard";
import "./App.css";

const App = () => {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSubmit = (selectedRating) => {
    setRating(selectedRating);
    setIsSubmitted(true);
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
