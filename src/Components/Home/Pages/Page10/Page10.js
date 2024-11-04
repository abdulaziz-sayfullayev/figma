import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import Card1 from "../../Assets/Image (16).png";
import Card2 from "../../Assets/Image (17).png";
import Card3 from "../../Assets/Image (18).png";
import "./Page10.css";
function Page10() {
  return (
    <div>
      <section>
        <div className="BlogSectionSSS">
          <div className="BGFDFDDD">
            <div className="ContentPage10Home1">
              <div className="Title1111">
                <div className="Text00112SSS">
                  <div className="HeadingSSS">
                    <div className="TitleSSSS">
                      <span>OUR  LATEST BLOG</span>
                    </div>
                    <span>Our latest experience</span>
                  </div>
                  <p>Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.</p>
                </div>
                <div className="ActionSSSSSS">
                  <p>
                    <GoArrowUpRight className='GoArrowUpRight' />
                  </p>
                  <span>VIEW ALL</span>
                </div>
              </div>
              <div className="BlogCarts0SSS">
                <div className="BlogCartPage10HomeSSS1">
                  <img src={Card1} alt="" />
                  <div className="TExtssss">
                    <span>November 21, 2022- Tom Black</span>
                    <div className="FrameSSSS001">
                      <span>Plan Your Project with Your Software</span>
                      <p>It is a time tracking solution that helps employees track hours across multiple tasks and projects  software.</p>
                    </div>
                  </div>
                </div>
                <div className="BlogCartPage10HomeSSS1">
                  <img src={Card2} alt="" />
                  <div className="TExtssss">
                    <span>November 21, 2022- Tom Black</span>
                    <div className="FrameSSSS001">
                      <span>You have a Great Business Idea?</span>
                      <p>It is a time tracking solution that helps employees track hours across multiple tasks and projects  software.</p>
                    </div>
                  </div>
                </div>
                <div className="BlogCartPage10HomeSSS1">
                  <img src={Card3} alt="" />
                  <div className="TExtssss">
                    <span>Building Data Analytics Software</span>
                    <div className="FrameSSSS001">
                      <span>Plan Your Project with Your Software</span>
                      <p>It is a time tracking solution that helps employees track hours across multiple tasks and projects  software.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page10
