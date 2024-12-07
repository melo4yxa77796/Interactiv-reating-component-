import React from "react";


const ThankYouCard = ({ rating }) => {
    return (
        <div className="thank-you-card">
            <h2>Thank you!</h2>
            <p>You selected {rating} out of 5</p>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    );
};

export default ThankYouCard;