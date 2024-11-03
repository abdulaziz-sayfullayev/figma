import React, { useState } from 'react';
import IMAGE from "../../Assets/image 80.png";
import CardImg001 from "../../Assets/Image (7).png";
import CardImg002 from "../../Assets/Image (8).png";
import CardImg003 from "../../Assets/Image (9).png";
import CardImg004 from "../../Assets/Image (10).png";
import './Page5.css';

function Page5() {
  const accordionData = [
    {
      title: 'An Award Winning Company',
      content: 'Brief description for an award-winning company goes here.'
    },
    {
      title: 'Quick Research And Solutions',
      content: 'Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end sound benefits.'
    },
    {
      title: 'Dedicated Support 24/7',
      content: 'Get support anytime you need, available 24/7 for all users.'
    },
    {
      title: 'Quick Support & Tech Solution',
      content: 'Fast and efficient tech solutions available at your convenience.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <section>
        <div className="WhyChoose">
          <div className="Contentpage5">
            <div className="Contentpage5div1">
              <div className="imagesdivss1">
                <img src={IMAGE} alt="" />
                <div className="BGBLACK"></div>
              </div>
              <div className="textdivss1">
                <div className="textdivss1divss">
                  <div className="TitlePage5">
                    <div className="TxtTitlePage5">
                      <div className="TxtTxtTitlePage5divssss">
                        <span>Why choose us</span>
                      </div>
                      <h3>Proven Expertise in Complex IT Solutions</h3>
                    </div>
                    <p>
                      Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces after value-added infrastructure.
                    </p>
                  </div>
                  <div className="TxtTxtTxtTitlePage5divssss">
                    {accordionData.map((item, index) => (
                      <div key={index} className="accordion-item">
                        <div
                          className="accordion-title"
                          onClick={() => toggleAccordion(index)}
                        >
                          <h3>{item.title}</h3>
                          <span>{activeIndex === index ? '▲' : '▼'}</span>
                        </div>
                        {activeIndex === index && (
                          <div className="accordion-content">
                            <p>{item.content}</p>
                          </div>
                        )}
                        <div className="divider">
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="Contentpage5div2">
              <span>Ready To Transform Your Business?</span>
              <div className="Contentpage5div201">
                <div className="Contentpage5div201ServiceFeatures1">
                  <img src={CardImg001} alt="" />
                  <div className="TExtSSS">
                    <h6>Tech Solution</h6>
                    <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver
                      end sound benefits. </p>
                  </div>
                </div>
                <div className="Contentpage5div201ServiceFeatures2">
                  <img src={CardImg002} alt="" />
                  <div className="TExtSSS">
                    <h6>IT Project Solution</h6>
                    <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver
                      end sound benefits. </p>
                  </div>
                </div>
                <div className="Contentpage5div201ServiceFeatures3">
                  <img src={CardImg003} alt="" />
                  <div className="TExtSSS">
                    <h6>Quick Support</h6>
                    <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver
                      end sound benefits. </p>
                  </div>
                </div>
                <div className="Contentpage5div201ServiceFeatures4">
                  <img src={CardImg004} alt="" />
                  <div className="TExtSSS">
                    <h6>Solving IT Challenges</h6>
                    <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver
                      end sound benefits. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page5;
