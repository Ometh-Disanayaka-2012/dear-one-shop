import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './review-section.css';

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "Dec 2024",
      text: "Absolutely love the custom photo book! The quality is amazing and my husband cried when he opened it. Perfect anniversary gift!",
      product: "Custom Photo Book",
      verified: true
    },
    {
      id: 2,
      name: "James T.",
      rating: 5,
      date: "Nov 2024",
      text: "Ordered a personalized wooden calendar for my parents' 40th anniversary. They display it in their living room and everyone who visits asks about it!",
      product: "Wooden Calendar",
      verified: true
    },
    {
      id: 3,
      name: "Emily R.",
      rating: 5,
      date: "Jan 2025",
      text: "The engraved pillow with our Roman numerals is gorgeous! Shipping was fast and customer service was super helpful. Highly recommend!",
      product: "Roman Numeral Pillow",
      verified: true
    },
    {
      id: 4,
      name: "Michael K.",
      rating: 5,
      date: "Dec 2024",
      text: "Got the gift box set for my girlfriend and she absolutely loved every item! The personalization made it extra special. Will definitely order again!",
      product: "Deluxe Gift Box",
      verified: true
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center' }}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`star ${i < rating ? 'filled' : 'empty'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="review-section">
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="review-heading">
            What Our Customers Say
          </h2>
          <p className="review-subheading">
            Handcrafted memories, treasured forever
          </p>
        </div>

        {/* Main Review Carousel */}
        <div className="review-card">
          <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <StarRating rating={reviews[currentReview].rating} />
            </div>
            
            <p className="review-text">
              "{reviews[currentReview].text}"
            </p>
            
            <div style={{ textAlign: 'center' }}>
              <p className="reviewer-name">
                {reviews[currentReview].name}
              </p>
              <p className="review-details">
                {reviews[currentReview].product} • {reviews[currentReview].date}
              </p>
              {reviews[currentReview].verified && (
                <span className="verified-badge">
                  ✓ Verified Purchase
                </span>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="nav-btn prev"
            aria-label="Previous review"
          >
            <ChevronLeft style={{ width: '1.5rem', height: '1.5rem', color: '#44403c' }} />
          </button>
          
          <button
            onClick={nextReview}
            className="nav-btn next"
            aria-label="Next review"
          >
            <ChevronRight style={{ width: '1.5rem', height: '1.5rem', color: '#44403c' }} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="dots-container">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`dot ${index === currentReview ? 'active' : ''}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4.9★</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">Would Recommend</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;