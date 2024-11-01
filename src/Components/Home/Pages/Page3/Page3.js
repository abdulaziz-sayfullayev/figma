import React from 'react';
import OnePerson from "../../Assets/Home1Page3Imageoneperson.png";
import TeamTwoPeople from "../../Assets/Home1Page3Image2people.png";
import "./Page3.css";

function Page3() {
    return (
        <div>
            <section>
                <div className="AboutUs">
                    <div className="TitlePage13Div">
                        <div className="Txt1Page3Home1">
                            <div className="Txt2Page3Home1">
                                <span>ABOUT US</span>
                            </div>
                            <h3>Our Company Specializes In IT Solutions & Technology with Passion</h3>
                        </div>
                        <p>
                            Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms.
                        </p>
                    </div>
                    <div className="TextImageHome1page3Div2">
                        <div className="Home1Page3Image01">
                            <div className="ExperienceHome1Page3">
                                <img src={OnePerson} alt="Experience" className="OnePerson" />
                                <div className='AzizCardsheyx'>
                                    <div className="TextPage3Home1Experience">
                                        <h1>12+</h1>
                                        <p>Years Experience</p>
                                    </div>
                                </div>
                            </div>
                            <img src={TeamTwoPeople} alt="Team" className='TeamTwoPeople' />
                        </div>
                        <div className="TextHome1Page013">
                            <div className="TextTextHome1Page3">
                                <div className="Frame1Page3Home1">
                                    <span>We provide all kinds of technology solutions as per your requirements, and we are the best in the field.</span>
                                    <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before.</p>
                                </div>
                                <p className='LinePage3Home1'></p>
                                <div className="Frame2Page3Home1">
                                    <span>Providing IT services to hundreds of SME customers across diverse sectors.</span>
                                    <p>Assertively streamline interactive interfaces after value-added infrastructures.</p>
                                </div>
                            </div>
                            <div className="ActionPage3Home1">
                                <button className="animated-button">More About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Page3;
