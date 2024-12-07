import React, { useState } from "react";
import image from "../images/icon-star.svg";

const RatingForm = ({ onSubmit }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRating) {
      onSubmit(selectedRating);
    } else {
      alert("Please select a rating");
    }
  };
  return (
    <div className="rating-form">
      <button className="thank-you-image">
        {" "}
        <img src={image} alt="Thank You" />
      </button>

      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => setSelectedRating(rating)}
            className={selectedRating === rating ? "selected" : ""}
          >
            {rating}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};
export default RatingForm;
