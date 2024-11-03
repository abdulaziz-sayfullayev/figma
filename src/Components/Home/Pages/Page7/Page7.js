import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { TfiTwitterAlt } from "react-icons/tfi";

import "./Page7.css";
function Page7() {
  return (
    <div>
      <section>
        <div className="TeamSetion">
          <div className="TitleTeamSetion">
            <div className="TxtTeamSetionsss">
              <div className="TitleSSSSS">
                <span>OUR TEAM</span>
              </div>
              <span>Our Professional Team member</span>
            </div>
            <div className="ActionSSS">
              <button>VIEW ALL</button>
            </div>
          </div>
          <div className="TeamMember00SSS">
            <div className="Member1">
              <div className="imgDivSSs">
                <img src="" alt="" />
                <div className="SocialIcons">
                <FaFacebookF />
                <BsInstagram />
                <TfiTwitterAlt />
                </div>
              </div>
              <div className="TxtSSS">
                <span>Eleanor Pena</span>
                <p>Senior Developer</p>
              </div>
            </div>
            <div className="Member2">
              <div className="imgDivSSs">
                <img src="" alt="" />
                <div className="SocialIcons">
                <FaFacebookF />
                <BsInstagram />
                <TfiTwitterAlt />
                </div>
              </div>
              <div className="TxtSSS">
                <span>Ralph Edwards</span>
                <p>Senior Developer</p>
              </div>
            </div>
            <div className="Member3">
              <div className="imgDivSSs">
                <img src="" alt="" />
                <div className="SocialIcons">
                <FaFacebookF />
                <BsInstagram />
                <TfiTwitterAlt />
                </div>
              </div>
              <div className="TxtSSS">
                <span>Albert Flores</span>
                <p>Senior Developer</p>
              </div>
            </div>
            <div className="Member4">
              <div className="imgDivSSs">
                <img src="" alt="" />
                <div className="SocialIcons">
                <FaFacebookF />
                <BsInstagram />
                <TfiTwitterAlt />
                </div>
              </div>
              <div className="TxtSSS">
                <span>Jerome Bell</span>
                <p>Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page7;