import React, { useState, useEffect } from 'react';
import "./Page9.css";
import IMGSS from "../../Assets/image 81.png";

function Page9() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetProgress = 75; // Target progress percentage
    const duration = 2000; // Duration in milliseconds for the animation
    const interval = 20; // Interval in milliseconds for the update
    const increment = targetProgress / (duration / interval); // Increment value

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress + increment >= targetProgress) {
          clearInterval(timer);
          return targetProgress;
        }
        return prevProgress + increment;
      });
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const strokeWidth = 8;
  const radius = 45;
  const normalizedRadius = radius - strokeWidth * 0.5; // Adjust for stroke width
  const circumference = normalizedRadius * 2 * Math.PI; // Calculate circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference; // Calculate offset for stroke

  return (
    <div>
      <section>
        <div className="GetInTouch">
          <div className="Image">
            <div className="BacgroudBlack">
              <div className="Imgwww">
                <img src={IMGSS} alt="" />
                <div className='BG'>
                  <div className="ProgressSSS1">
                    <div className="GroupSSS">
                      <span>Weekly Progress</span>
                    </div>
                    <svg className='progress-circle' height={radius * 2} width={radius * 2}>
                      <circle
                        stroke="#E6E6E6"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                      />
                      <circle
                        stroke="#FF7F00"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={strokeDashoffset}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                      />
                      <text
                        x="50%"
                        y="50%"
                        alignmentBaseline="middle"
                        textAnchor="middle"
                        className="percentage-text"
                      >
                        {Math.round(progress)}%
                      </text>
                    </svg>
                    <div>
                    </div>
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
                <input type="text" placeholder='Your name' className="textname" />
                <input type="email" placeholder='Email address' className="textname" />
                <input type="text" placeholder='Web address' className="textname"/>
                <textarea placeholder="Type message..." className='textarea'></textarea>
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
