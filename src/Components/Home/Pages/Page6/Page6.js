import React from 'react';
import "./Page6.css";
function Page6() {
  const services = [
    { img: "", titlepass: "TECH", title: "Tech Cover Industry", describtion: "There are many variations of passages" },
    { img: "", titlepass: "TECH", title: "Application Integration", describtion: "There are many variations of passages" },
    { img: "", titlepass: "TECH", title: "Database Design", describtion: "There are many variations of passages" },
    { img: "", titlepass: "TECH", title: "Application Integration", describtion: "There are many variations of passages" },
    { img: "", titlepass: "TECH", title: "Database Design", describtion: "There are many variations of passages" },
    { img: "", titlepass: "TECH", title: "Tech Cover Industry", describtion: "There are many variations of passages" },
  ];

  function ServiceCard({ img, titlepass, title, describtion }) {
    return (
      <div className="divCarrddSSS">
        <div className="ProjectCartSSS">
          <img src={img} alt="" />
          <div className="FrameSSS555">
            <span>{titlepass}</span>
            <div className="Frame55SSS">
              <span>{title}</span>
              <p>{describtion}</p>
            </div>
          </div>
        </div>
        <div className="AzizCardSSS">
          <p>View all services</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section>
        <div className="ProjectsSetion">
          <div className="BG">
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
                <div className="CarddSsS02">
                  {services.slice(6, 7).map((service, index) => (
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
