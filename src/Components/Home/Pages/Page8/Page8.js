import React, { useState, useEffect, useRef } from 'react';
import './Page8.css';

const reviews = [
  // 20 ta foydalanuvchi ma'lumotlari (faqat 4 ta misol uchun ko'rsatildi)
  { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 5, img: "user1.jpg" },
  { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 4, img: "user2.jpg" },
  { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 3, img: "user3.jpg" },
  { id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 5, img: "user4.jpg" },
  // Shu kabi 16 ta qo'shimcha ma'lumot qo'shishingiz mumkin

  { id: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 3, img: "user3.jpg" },
  { id: 6, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 5, img: "user4.jpg" },

  { id: 7, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 3, img: "user3.jpg" },
  { id: 8, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 5, img: "user4.jpg" },


  { id: 9, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 3, img: "user3.jpg" },
  { id: 10, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor", name: "Paula Brooks", role: "Business Analyst", rating: 5, img: "user4.jpg" },
];

function Page8() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideRef = useRef();

  // Keyingi slayderga o'tish funksiyasi
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Dots yoki tugmalar orqali slayderga o'tish funksiyasi
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Avtomatik o'tishni boshqarish
  useEffect(() => {
    if (!isHovered) {
      autoSlideRef.current = setInterval(goToNextSlide, 2000);
    }
    return () => clearInterval(autoSlideRef.current);
  }, [isHovered]);

  // Mishka harakatlanishida animatsiyani to'xtatish va davom ettirish
  const handleMouseMove = () => {
    setIsHovered(true);
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <section className="TestimonialSection">
        <div className="BGDDD">
          <div className="contentsssSSS">
            <div className="Text001SS55">
              <div className="HeadingSS555ss">
                <div className="TitleSS555ss">
                  <span>Testimonial</span>
                </div>
                <p>Trusted by more than 1000+ company’s around the world</p>
              </div>
            </div>
            <div className="Review001SS55">
              <div className="testimonial-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {reviews.map((review, index) => (
                  <div className="testimonial-card" key={index}>
                    <div className="stars">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
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
            </div>
            <div className="SliderControl001SS55">
            <div className="carousel-dots">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
            </div>
          </div>



          {/* <h2 className="slider-title">Trusted By More Than 1000+ Company’s Around The World</h2> */}
          {/* <div className="testimonial-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((review, index) => (
              <div className="testimonial-card" key={index}>
                <div className="stars">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
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
          </div> */}
          {/* <div className="carousel-controls">
            <button onClick={() => goToSlide((currentIndex - 1 + reviews.length) % reviews.length)}>&#8592;</button>
            <button onClick={() => goToSlide((currentIndex + 1) % reviews.length)}>&#8594;</button>
          </div>

          <div className="carousel-dots">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Page8;
