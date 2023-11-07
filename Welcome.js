import React from 'react';
import './Welcome.css'; // Import the CSS for background and box styles

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h2>Welcome to the NFV Revolution</h2>
        <div className="welcome-image">
          <img src="https://cliply.co/wp-content/uploads/2020/08/432008032_FOLDED_HANDS_3D_MONOCHROMATIC_400px.gif" alt="Welcome Gesture" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
// https://cliply.co/wp-content/uploads/2020/08/432008032_FOLDED_HANDS_3D_MONOCHROMATIC_400px.gif