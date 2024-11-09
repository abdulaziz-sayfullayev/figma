import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";
function Footer() {
    return (
        <div>
            <section>
                <div className="Footer">
                    <div className="BGFooter">
                        <div className="FooterContent">
                            <div className="Content">
                                <div className="FooterContent011">
                                    <h5>Itrechos</h5>
                                    <div>
                                        <p className="about1">About</p>
                                        <p className="about1">Features</p>
                                        <p className="about1">Works</p>
                                        <p className="about1">Career</p>
                                    </div>
                                </div>
                                <div className="FooterContent011">
                                    <h5>Help</h5>
                                    <div>
                                        <p className="about1">Customer Support</p>
                                        <p className="about1">Delivery Details</p>
                                        <p className="about1">Terms & Conditions</p>
                                        <p className="about1">Privacy Policy</p>
                                    </div>
                                </div>
                                <div className="FooterContent011">
                                    <h5>Resources</h5>
                                    <div>
                                        <p className="about1">Free eBooks</p>
                                        <p className="about1">Development Tutorial</p>
                                        <p className="about1">How to - Blog</p>
                                        <p className="about1">YouTube Playlist</p>
                                    </div>
                                </div>
                                <div className="FooterContent011">
                                    <h5>Extra Links</h5>
                                    <div>
                                        <p className="about1">Customer Support</p>
                                        <p className="about1">Delivery Details</p>
                                        <p className="about1">Terms & Conditions</p>
                                        <p className="about1">Privacy Policy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="FooterSSSS">
                                <div className="Socialfooter">
                                    <div className="SocialsIcons">
                                        <FaFacebook  className='Icomsss'/>
                                        <FaInstagram className='Icomsss'/>
                                        <FaTwitter   className='Icomsss'/>
                                        <FaYoutube   className='Icomsss'/>
                                    </div>
                                    <div className="Text_Footer">
                                        <span>Privacy Policy</span>
                                        <span>Terms & Conditions</span>
                                        <span>Support</span>
                                    </div>
                                </div>
                                <span className='thisabout'>© Copyright 2024, All Rights Reserved by Abdulaziz</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer;