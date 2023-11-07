import React from 'react';
import './SuccessStories.css'; // Import the CSS for styling

const SuccessStories = () => {
  return (
    <div className="success-stories-container">
      <div className="flashcards">
        
        <div className="flashcard">
          <img
            src="https://media.giphy.com/media/UBgnfgfneg72E/source.gif" // Replace with the actual image URL
            alt="Security"
            className="flashcard-image"
          />
          <div className="caption">Security</div>
        </div>
        <div className="flashcard">
          <img
            src="https://miro.medium.com/max/3840/0*EBXqB5wJTWFeaT04.gif" // Replace with the actual image URL
            alt="Virtualization"
            className="flashcard-image"
          />
          <div className="caption">Virtualization</div>
        </div>
        <div className="flashcard">
          <img
            src="https://www.thedigitaltransformationpeople.com/wp-content/uploads/2017/11/1RTGHo8x278rzhj2cZSjwtA-640x400-c-default.gif" // Replace with the actual image URL
            alt="mobile edge computing"
            className="flashcard-image"
          />
          <div className="caption">Mobile Edge Computing</div>
        </div>
        <div className="flashcard">
          <img
            src="https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif" // Replace with the actual image URL
            alt="video analytics"
            className="flashcard-image"
          />
          <div className="caption">Video Analytics</div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
