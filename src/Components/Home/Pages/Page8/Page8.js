import React, { useState, useEffect, useRef } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideRef = useRef();

  const totalSlides = Math.ceil(reviews.length / 4); // Har bir slayderda 4 ta foydalanuvchi ko'rinadi.

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!isHovered) {
      autoSlideRef.current = setInterval(goToNextSlide, 3000);
    }
    return () => clearInterval(autoSlideRef.current);
  }, [isHovered]);

  const handleMouseMove = () => {
    setIsHovered(true);
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 3);
  };

  // Har bir slayderda 4 ta foydalanuvchini ko'rsatadi.
  const visibleReviews = reviews.slice(currentIndex * 4, currentIndex * 4 + 4);

  return (
    <div onMouseMove={handleMouseMove} className="TestimonialSection">
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
            {visibleReviews.map((review) => (
              <div className="testimonial-card" key={review.id}>
                <div className="stars">
                  {'★'.repeat(review.rating)}{''.repeat(5 - review.rating)}
                </div>
                <p>{review.text}</p>
                <div className="user-info">
                  <img src={review.img} alt={review.name} />
                  <div>
                    <p className="user-name">{review.name}</p>
                    <p className="user-role">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
            <div className="carousel-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page8;
