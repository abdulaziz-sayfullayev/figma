import React, { useState, useEffect } from 'react';
import './Page8.css';
import Slideimg1 from '../../Assets/#Avatar.png';
import Slideimg2 from '../../Assets/#Avatar(1).png';
import Slideimg3 from '../../Assets/#Avatar(2).png';
import Slideimg4 from '../../Assets/#Avatar(3).png';
import Slideimg5 from '../../Assets/#Avatar(4).png';

const reviews = [
  { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Alice Johnson", role: "Project Manager", rating: 5, img: Slideimg1 },
  { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Bob Smith", role: "Software Engineer", rating: 4, img: Slideimg2 },
  { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Catherine Lee", role: "UI/UX Designer", rating: 3, img: Slideimg3 },
  { id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Daniel Green", role: "Data Scientist", rating: 5, img: Slideimg4 },
  { id: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 5, img: Slideimg5 },
];

function Page8() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerRow = () => {
    if (window.innerWidth >= 1920) return 4;
    if (window.innerWidth >= 1860) return 4;
    if (window.innerWidth >= 1440) return 3;
    if (window.innerWidth >= 1000) return 2;
    if (window.innerWidth >= 800) return 1;
    return 1;
  };

  const totalSlides = Math.ceil(reviews.length / cardsPerRow());

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="TestimonialSection">
      <div className="BGDDD">
        <div className="Contentss222">
          <div className="Text">
            <div className="Heading">
              <div className="Title">
                <span>Testimonial</span>
              </div>
              <span>Trusted by more than 1000+ company’s around the world</span>
            </div>
          </div>
          <div className="Review">
            {reviews.slice(currentIndex * cardsPerRow(), (currentIndex + 1) * cardsPerRow()).map((review) => (
              <div key={review.id} className="testimonial-card">
                <div className="stars">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p>{review.text}</p>
                <div className="user-info">
                  <img src={review.img} alt={review.name} />
                  <div>
                    <div className="user-name">{review.name}</div>
                    <div className="user-role">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {Array(totalSlides).fill(null).map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page8;
