import React from 'react';

const Hero: React.FC = () => {

  const scrollToProducts = () => {
    document.getElementById("featured")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Personalized Gifts That Tell Your Story</h2>
        <p className="hero-subtitle">Handcrafted with love, customized just for you</p>
        <button className="cta-btn" onClick={scrollToProducts}>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;