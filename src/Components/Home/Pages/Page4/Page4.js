// import React from 'react';
// import BGImg from "../../Assets/BG(3).png";
// import ICON from "../../Assets/Icon(1).png";
// import "./Page4.css";

// function Page4() {
//     return (
//         <div>
//             <section>
//                 <div className="ServiceSection">
//                     <div className="BGPage4Home1">
//                         <img src={BGImg} alt="Background" />
//                     </div>
//                     <div className="Content001Page4Home1">
//                         <div className="Textss">
//                             <div className="Textsss">
//                                 <div className="Heading">
//                                     <div className="Title001ss">
//                                         <span>SERVICE</span>
//                                     </div>
//                                     <p>We Provide Complete Professional IT Services.</p>
//                                 </div>
//                                 <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before delivering end-to-end solutions.</p>
//                             </div>
//                             <div className="ServiceFeature">
//                                 {[{
//                                     title: 'Analytical research problem findings',
//                                     description: 'Streamline interactive interfaces after value-added infrastructures.'
//                                 }, {
//                                     title: 'Ensure Quality services',
//                                     description: 'Authoritatively fabricate fully tested methodologies.'
//                                 }, {
//                                     title: 'Provide in time Delivery',
//                                     description: 'Holistic deliver end-to-end architectures with sound benefits.'
//                                 }].map((feature, index) => (
//                                     <div key={index} className="Feature001">
//                                         <div className="Iconsss">
//                                             <img src={ICON} alt="Icon" />
//                                         </div>
//                                         <div className="Text909sss">
//                                             <span>{feature.title}</span>
//                                             <p>{feature.description}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="Service Carts">
//                             <div className="card">
//                                 <div className="card-content">
//                                     <div className="IconCardAziz"></div>
//                                     <div className="TxtIconCardAziz">
//                                         <div className="TxtDivSSS">
//                                             <span>Network Solution</span>
//                                             <p>Streamline interactive interfaces after value-added infrastructures.</p>
//                                         </div>
//                                         <div className="ActionDivSSS">
//                                             <a href="#">
//                                                 <button>LEARN MORE</button>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="card-hover-content">
//                                     <p>View all services</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Page4;


import React from 'react';
import ICON from "../../Assets/Icon(1).png";
import ICON11 from "../../Assets/fi_957980 (2).png";
import "./Page4.css";
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
                                        <p>we Providing Complete Professional IT Services.</p>
                                    </div>
                                    <p>Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.</p>
                                </div>
                                <div className="ServiceFeature">
                                    <div className="Feature001">
                                        <div className="Iconsss">
                                            <img src={ICON} alt="" />
                                        </div>
                                        <div className="Text909sss">
                                            <span>Analytical research problem findings</span>
                                            <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. </p>
                                        </div>
                                    </div>
                                    <div className="Feature001">
                                        <div className="Iconsss">
                                            <img src={ICON} alt="" />
                                        </div>
                                        <div className="Text909sss">
                                            <span>Ensure Quality services</span>
                                            <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before.  </p>
                                        </div>
                                    </div>
                                    <div className="Feature001">
                                        <div className="Iconsss">
                                            <img src={ICON} alt="" />
                                        </div>
                                        <div className="Text909sss">
                                            <span>Provide in time Delivery</span>
                                            <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver
                                                end sound benefits. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='aaazzz'>
                                <div className="divv">
                                    <div className='Cardds'>
                                        <div class="Service01">
                                            <div class="FrameService">
                                                <div class="Icon01">
                                                    <span class="Icon001">
                                                        <img src={ICON11} alt="" />
                                                    </span>
                                                </div>
                                                <div class="Txt9">
                                                    <div class="Txt10">
                                                        <span>Network solution</span>
                                                        <p>
                                                            Assertively streamline interactive interfaces after
                                                            value-added infrastructures.
                                                        </p>
                                                    </div>
                                                    <div class="Action1">
                                                        <button>
                                                            <i class="fa-solid fa-arrow-up-right"> </i>LEARN MORE
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='AzzHover'>
                                            <h6>View all services</h6>
                                        </div>
                                    </div>
                                    <div className='Cardds'>
                                        <div class="Service01">
                                            <div class="FrameService">
                                                <div class="Icon01">
                                                    <span class="Icon001">
                                                        <img src={ICON11} alt="" />
                                                    </span>
                                                </div>
                                                <div class="Txt9">
                                                    <div class="Txt10">
                                                        <span>Cyber security</span>
                                                        <p>
                                                            Assertively streamline interactive interfaces after
                                                            value-added infrastructures.
                                                        </p>
                                                    </div>
                                                    <div class="Action1">
                                                        <button>
                                                            <i class="fa-solid fa-arrow-up-right"> </i>LEARN MORE
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='AzzHover'>
                                            <h6>View all services</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='divv2'>
                                    <div className='Cardds'>
                                        <div class="Service01">
                                            <div class="FrameService">
                                                <div class="Icon01">
                                                    <span class="Icon001">
                                                        <img src={ICON11} alt="" />
                                                    </span>
                                                </div>
                                                <div class="Txt9">
                                                    <div class="Txt10">
                                                        <span>Data Analytics</span>
                                                        <p>
                                                            Assertively streamline interactive interfaces after
                                                            value-added infrastructures.
                                                        </p>
                                                    </div>
                                                    <div class="Action1">
                                                        <button>
                                                            <i class="fa-solid fa-arrow-up-right"> </i>LEARN MORE
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='AzzHover'>
                                            <h6>View all services</h6>
                                        </div>
                                    </div>
                                    <div className='Cardds'>
                                        <div class="Service01">
                                            <div class="FrameService">
                                                <div class="Icon01">
                                                    <span class="Icon001">
                                                        <img src={ICON11} alt="" />
                                                    </span>
                                                </div>
                                                <div class="Txt9">
                                                    <div class="Txt10">
                                                        <span>Network solution</span>
                                                        <p>
                                                            Assertively streamline interactive interfaces after
                                                            value-added infrastructures.
                                                        </p>
                                                    </div>
                                                    <div class="Action1">
                                                        <button>
                                                            <i class="fa-solid fa-arrow-up-right"> </i>LEARN MORE
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='AzzHover'>
                                            <h6>View all services</h6>
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
export default Page4;