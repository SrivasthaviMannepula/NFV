import React, { useState, useEffect } from 'react';
import './Revolution.css';

const Revolution = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Start the animation after a delay
    const animationTimeout = setTimeout(() => {
      setShowImage(true);
    }, 1000); // Adjust the delay as needed

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);


  return (
    <div className="complete">
    <div className="revolution-container">
     <div className={`column after ${showImage ? 'show' : ''}`}>
        <p>1900 s</p>
        <br></br>
        <img src="https://dfdeboer.github.io/BURKS/pcinfo/hardware/ethernet/images/aniswitc.gif" alt="Before" className="animated-image" />
      </div>
      <div className={`column after ${showImage ? 'show' : ''}`}>
        <p> 2012 and Onwards </p>
        <br></br>
        <img src="https://azure.github.io/actions/img/automate_workflows_gif.gif" alt="After" className="animated-image" />
      </div>
    </div>
    </div>
  );
};

export default Revolution;
