import React, { useEffect, useState, useRef } from 'react';
import "./Page2.css";

function Counter({ endValue, duration }) {
  const [value, setValue] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration * 60);
    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(counter);
        setValue(endValue);
      } else {
        setValue(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [endValue, duration]);

  return <span className="counter">{value}{endValue >= 100 ? "+" : "%"}</span>;
}

function Page2() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.querySelector('.funfacts-section');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={`funfacts-section ${isVisible ? 'visible' : ''}`}>
        <div className="Funfacts">
          <div className="FunFact">
            <div className="Fact">
              <Counter endValue={98} duration={1} />
              <p>Automatic payment</p>
            </div>
            <span className='divider'></span>
            <div className="Fact">
              <Counter endValue={100} duration={1} />
              <p>New users per week</p>
            </div>
            <span className='divider'></span>
            <div className="Fact">
              <Counter endValue={110} duration={1} />
              <p>Monthly active users</p>
            </div>
            <span className='divider'></span>
            <div className="Fact">
              <Counter endValue={33} duration={1} />
              <p>Growth-over-year</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page2;
