import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { TfiTwitterAlt } from "react-icons/tfi";
import Card1 from "../../Assets/Img (1).png";
import Card2 from "../../Assets/Img (2).png";
import Card3 from "../../Assets/Img (3).png";
import Card4 from "../../Assets/Img (4).png";
import "./Page7.css";

function Page7() {
  return (
    <div>
      <section>
        <div className="TeamSection">
          <div className="TitleTeamSection">
            <div className="TxtTeamSection">
              <div className="Title">
                <span>OUR TEAM</span>
              </div>
              <span>Our Professional Team Member</span>
            </div>
            <div className="Action">
              <button>VIEW ALL</button>
            </div>
          </div>
          <div className="TeamMemberSection">
            {/* Har bir jamoa a'zosi uchun div (yo'nalishlar takrorlangan) */}
            <div className="Member">
              <div className="imgDiv">
                <img src={Card1} alt="" />
                <div className="SocialIcons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <BsInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TfiTwitterAlt />
                  </a>
                </div>
              </div>
              <div className="Txt">
                <h6>Eleanor Pena</h6>
                <p>Senior Developer</p>
              </div>
            </div>

            {/* Ikkinchi jamoa a'zosi */}
            <div className="Member">
              <div className="imgDiv">
                <img src={Card2} alt="" />
                <div className="SocialIcons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <BsInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TfiTwitterAlt />
                  </a>
                </div>
              </div>
              <div className="Txt">
                <h6>John Doe</h6>
                <p>Lead Designer</p>
              </div>
            </div>

            {/* Uchunchi jamoa a'zosi */}
            <div className="Member">
              <div className="imgDiv">
                <img src={Card3} alt="" />
                <div className="SocialIcons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <BsInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TfiTwitterAlt />
                  </a>
                </div>
              </div>
              <div className="Txt">
                <h6>Sarah Brown</h6>
                <p>Project Manager</p>
              </div>
            </div>

            {/* To'rtinchi jamoa a'zosi */}
            <div className="Member">
              <div className="imgDiv">
                <img src={Card4} alt="" />
                <div className="SocialIcons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <BsInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TfiTwitterAlt />
                  </a>
                </div>
              </div>
              <div className="Txt">
                <h6>Michael Lee</h6>
                <p>Marketing Head</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Page7;
