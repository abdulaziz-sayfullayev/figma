import React, { useEffect, useState } from 'react';
import "./Page2.css";

function Counter({ endValue, duration }) {
  const [value, setValue] = useState(0);

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

  return <span>{value}{endValue >= 100 ? "+" : "%"}</span>;
}

function Statistics() {
  return (
    <div>
      <section className="statistics-section">
        <div className="statistics-container">
          <div className="statistic-item statistic-item fade-in">
            <div className="counter">
              <Counter endValue={98} duration={1} />
              <p>Automatic payment</p>
            </div>
            <span className='line-separator'></span>
            <div className="counter">
              <Counter endValue={100} duration={1} />
              <p>New users per week</p>
            </div>
            <span className='line-separator'></span>
            <div className="counter">
              <Counter endValue={110} duration={1} />
              <p>Monthly active users</p>
            </div>
            <span className='line-separator'></span>
            <div className="counter">
              <Counter endValue={33} duration={1} />
              <p>Growth-over-year</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
