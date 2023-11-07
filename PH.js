import React from 'react';
import './PH.css'; // You can create a CSS file for this component

const PH = () => {
  // Define the image URL
  const imageUrl = 'https://github.com/SrivasthaviMannepula/NFV/blob/main/IMG-20231105-WA0005.jpg?raw=true';

  return (
    <div className="ph-container">
      <div className="image-container">
        <img src={imageUrl} alt="My Powers" className="rounded-image" />
      </div>
      <div className="box">
        <p className="text">MY POWERS</p>
      </div>
    </div>
  );
};

export default PH;
