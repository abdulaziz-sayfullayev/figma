import React from 'react';
import "./Page6.css";
import Card1 from "../../Assets/Image (12).png";
import Card2 from "../../Assets/Image (11).png";
import Card3 from "../../Assets/Image (13).png";
import Card4 from "../../Assets/Image (14).png";
import Card5 from "../../Assets/Image (15).png";
function Page6() {
  const services = [
    { img: Card1, titlepass: "TECH", title: "Tech Cover Industry", describtion: "There are many variations of passages" },
    { img: Card2, titlepass: "TECH", title: "Application Integration", describtion: "There are many variations of passages" },
    { img: Card3, titlepass: "TECH", title: "Database Design", describtion: "There are many variations of passages" },
    { img: Card4, titlepass: "TECH", title: "Application Integration", describtion: "There are many variations of passages" },
    { img: Card5, titlepass: "TECH", title: "Database Design", describtion: "There are many variations of passages" },
    { img: Card2, titlepass: "TECH", title: "Tech Cover Industry", describtion: "There are many variations of passages" },
  ];

  function ServiceCard({ img, titlepass, title, describtion }) {
    return (
      <div className="divCarrddSSS">
        <div className="ProjectCartSSS">
          <img src={img} alt="" />
          <div className="FrameSSS555">
            <span>{titlepass}</span>
            <div className="Frame55SSS">
              <h6>{title}</h6>
              <p>{describtion}</p>
            </div>
          </div>
        </div>
        <div className="AzizCardSSS">
          <h6>View all services</h6>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section>
        <div className="ProjectsSetion111">
          <div className="BGDDDD">
            <div className="Content001001">
              <div className="Text00101">
                <div className="Heading00221">
                  <div className="TitleSSS555">
                    <span>PROJECTS</span>
                  </div>
                  <span>Awesome works for our Clients</span>
                </div>
                <p>Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.</p>
              </div>
              <div className="Carts00102">
                <div className="CarddSsS01">
                  {services.slice(0, 6).map((service, index) => (
                    <ServiceCard key={index} {...service} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page6;
