import React from 'react';
import OnePerson from "../../Assets/Home1Page3Imageoneperson.png";
import TeamTwoPeople from "../../Assets/Home1Page3Image2people.png";
import "./Page3.css";

function Page3() {
    return (
        <div>
            <section>
                <div className="AboutSection">
                    <div className="TitleSection">
                        <div className="TitleText">
                            <div className="SubtitleText">
                                <span>ABOUT US</span>
                            </div>
                            <h3>Our Company Specializes In IT Solutions & Technology with Passion</h3>
                        </div>
                        <p>
                            Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms.
                        </p>
                    </div>
                    <div className="ImageTextSection">
                        <div className="ImageContainer">
                            <div className="ExperienceContainer">
                                <img src={OnePerson} alt="Experience" className="SinglePersonImage" />
                                <div className='ExperienceCard'>
                                    <div className="ExperienceText">
                                        <h1>12+</h1>
                                        <p>Years Experience</p>
                                    </div>
                                </div>
                            </div>
                            <img src={TeamTwoPeople} alt="Team" className='TeamImage' />
                        </div>
                        <div className="DescriptionContainer">
                            <div className="DescriptionText">
                                <div className="FrameOne">
                                    <span>We provide all kinds of technology solutions as per your requirements, and we are the best in the field.</span>
                                    <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before.</p>
                                </div>
                                <p className='SeparatorLine'></p>
                                <div className="FrameTwo">
                                    <span>Providing IT services to hundreds of SME customers across diverse sectors.</span>
                                    <p>Assertively streamline interactive interfaces after value-added infrastructures.</p>
                                </div>
                            </div>
                            <div className="ActionSection">
                                <button className="MoreAboutButton">More About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Page3;
