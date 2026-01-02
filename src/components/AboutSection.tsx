import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Gifts Made With Love</h2>
            <p>
              At Dear One, we believe every gift should be as unique as the person 
              receiving it. Our handcrafted, personalized products are designed to 
              celebrate your special moments and relationships.
            </p>
            <button className="secondary-btn">Learn More</button>
          </div>
          <div className="about-image">
            <div className="image-placeholder">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;