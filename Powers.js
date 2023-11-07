import React, { useEffect, useState } from 'react';
import './Powers.css';

const powersData = [
  'Interoperability and Ecosystem Growth',
  'Reduced Vendor Lock-In',
  'Energy Efficiency',
  'Network Resilience and Disaster Recovery',
  'Service Chaining',
  'Global Network Reach and Edge Computing',
];

const Powers = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start the animation after 2 seconds
    setTimeout(() => {
      setAnimationStarted(true);
    }, 2000);
  }, []);

  return (
    <div className="powers-container">
      <div className={`powers-grid ${animationStarted ? 'fadeInLeft' : ''}`}>
        {powersData.map((power, index) => (
          <div key={index} className="power-card">
            <img
              src="https://www.bing.com/th/id/OGC.26b4c077f376d9bc13bb9779dca97bce?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f26b4c077f376d9bc13bb9779dca97bce%2ftenor.gif%3fitemid%3d13178720&ehk=OQwtL24%2b9iThmngzKlKWGTeCCwaNpvbQ%2fFTgZX85E6s%3d" alt={power}
            />
            <p className="power-text">{power}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Powers;
