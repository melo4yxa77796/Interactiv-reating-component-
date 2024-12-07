import React from "react";
import "./ThankYouCard.css";
import image from "../images/illustration-thank-you.svg";

const ThankYouCard = ({ rating }) => {
  return (
    <div className="thank-you-card">
      <img src={image} alt="Thank You" className="thank-you-image" />
      <p className="selected-rating">You selected {rating} out of 5</p>
      <h2 className="thank-you-title">Thank you!</h2>
      <p className="thank-you-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouCard;
