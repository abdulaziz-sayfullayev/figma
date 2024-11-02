import React from 'react';
import ICON from "../../Assets/Icon(1).png";
import ICON11 from "../../Assets/fi_957980 (2).png";
import "./Page4.css";

const services = [
    { title: 'Network Solution', description: 'Streamline interactive interfaces...' },
    { title: 'Cyber Security', description: 'Assertively streamline...' },
    { title: 'Data Analytics', description: 'Holistic delivery with sound benefits...' },
    { title: 'Network Solution', description: 'Streamline interactive interfaces...' }
];

function ServiceCard({ title, description }) {
    return (
        <div className="Cardds">
            <div className="Service01">
                <div className="FrameService">
                    <div className="Icon01">
                        <span className="Icon001">
                            <img src={ICON11} alt="" />
                        </span>
                    </div>
                    <div className="Txt9">
                        <div className="Txt10">
                            <span>{title}</span>
                            <p>{description}</p>
                        </div>
                        <div className="Action1">
                            <button>
                                <i className="fa-solid fa-arrow-up-right"> </i>LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="AzzHover">
                <h6>View all services</h6>
            </div>
        </div>
    );
}

function Page4() {
    return (
        <div>
            <section>
                <div className="ServiceSection">
                    <div className="BGPage4Home1">
                        <div className="Content001Page4Home1">
                            <div className="Textss">
                                <div className="Textsss">
                                    <div className="Heading">
                                        <div className="Title001ss">
                                            <span>SERVICE</span>
                                        </div>
                                        <p>We provide complete professional IT services.</p>
                                    </div>
                                    <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before holistic delivery with sound benefits.</p>
                                </div>
                                <div className="ServiceFeature">
                                    <div className="Feature001">
                                        <div className="Iconsss">
                                            <img src={ICON} alt="" />
                                        </div>
                                        <div className="Text909sss">
                                            <span>Analytical research problem findings</span>
                                            <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before.</p>
                                        </div>
                                    </div>
                                    <div className="Feature001">
                                        <div className="Iconsss">
                                            <img src={ICON} alt="" />
                                        </div>
                                        <div className="Text909sss">
                                            <span>Ensure Quality Services</span>
                                            <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before.</p>
                                        </div>
                                    </div>
                                    <div className="Feature001">
                                        <div className="Iconsss">
                                            <img src={ICON} alt="" />
                                        </div>
                                        <div className="Text909sss">
                                            <span>Provide Timely Delivery</span>
                                            <p>Assertively streamline interactive interfaces after value-added infrastructures. Holistically deliver end-to-end sound benefits.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aaazzz">
                                <div className="divv">
                                    {services.slice(0, 2).map((service, index) => (
                                        <ServiceCard key={index} {...service} />
                                    ))}
                                </div>
                                <div className="divv2">
                                    {services.slice(2, 4).map((service, index) => (
                                        <ServiceCard key={index + 2} {...service} />
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

export default Page4;
