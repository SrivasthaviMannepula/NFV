import React from 'react';
import './Sections.css';

const Sections = () => {
  const sections = [
    'Join the NFV Revolution',
    'Success Stories',
    'Blueprint',
    'My Powers',
    'Breaking Free From Hardware Shackles',
    
    'Welcome to the NFV Revolution',
  ];

  return (
    <div className="sections-container">
      <div className="flow-chart">
        {sections.map((section, index) => (
          <div className="section-card" key={index}>
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
