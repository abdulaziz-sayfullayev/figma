import React, { useState, useEffect } from 'react';
import "./Page9.css";
import IMGSS from "../../Assets/image 81.png";
function Page9() {
  const [progress, setProgress] = useState(0); // Start from 0%

  useEffect(() => {
    // Target progress value
    const targetProgress = 75;
    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 20; // Update interval in milliseconds
    const increment = targetProgress / (duration / interval); // Calculate increment per interval

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress + increment >= targetProgress) {
          clearInterval(timer);
          return targetProgress;
        }
        return prevProgress + increment;
      });
    }, interval);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const strokeWidth = 8;
  const radius = 45;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div>
      <section>
        <div className="GetInTouch">
          <div className="Image">
            <div className="BacgroudBlack">
              <div className="Imgwww">
                <img src={IMGSS} alt="" />
                <div className="ProgressSSS" style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="GroupSSS" style={{ position: 'absolute', top: '-20px', textAlign: 'center', fontSize: '14px', color: 'black' }}>
                    <span>Weekly Progress</span>
                  </div>
                  <svg height={radius * 2} width={radius * 2} style={{ position: 'absolute' }}>
                    <circle
                      stroke="#E6E6E6"
                      fill="transparent"
                      strokeWidth={strokeWidth}
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                    />
                    <circle
                      stroke="#000000"
                      fill="transparent"
                      strokeWidth={strokeWidth}
                      strokeDasharray={`${circumference} ${circumference}`}
                      strokeDashoffset={strokeDashoffset}
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                      style={{ transition: 'stroke-dashoffset 0.5s ease', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                    />
                  </svg>
                  <div style={{ position: 'absolute', fontSize: '20px', fontWeight: 'bold', color: 'black' }}>
                    {Math.round(progress)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="TxtASS">
            <div className="TxtASS01">
              <div className="TxtASS01Sivsss"><span>GET IN TOUCH</span></div>
              <h3>It’s very easy to contact!</h3>
            </div>
            <div className="FormSSS">
              <div className="InputSSS">
                <input type="text" placeholder='Enter your name' className="" />
                <input type="text" placeholder='Enter your email' className="" />
                <input type="text" placeholder='Enter your nickname' className="" />
                {/* <input type="text" className="" /> */}
                <textarea name="" id="">
                </textarea>
              </div>
              <div className="buttonsss">
                <button>Send message now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page9;
