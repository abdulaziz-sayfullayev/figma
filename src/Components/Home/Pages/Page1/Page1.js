import React from "react";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import "./Page1.css";
import Page1Team from "../../Assets/Page1Card1.png";
import Page1Card from "../../Assets/Page1Card.svg";

function Page1() {
    const handleClick = (e) => {
        const button = e.currentTarget;
        button.classList.add('button-clicked');
        setTimeout(() => {
            button.classList.remove('button-clicked');
        }, 300);
    };

    return (
        <div className="hero-container">
            <div className="hero-background">
                <div className="hero-content">
                    <div className="text-wrapper">
                        <div className="intro-wrapper">
                            <div className="text-frame">
                                <div className="heading">
                                    <span className="heading-bar"></span>
                                    <span>WELCOME TO Ztech!</span>
                                </div>
                                <div className="main-text">
                                    <p>
                                        We are ready <span>to provide</span>
                                        <br />
                                        IT solutions
                                    </p>
                                </div>
                            </div>
                            <p className="description-text">
                                Assertively streamline interactive interfaces after value infrastructures. We are 100+ professional software engineers ready to assist you.
                            </p>
                        </div>
                        <div className="button-wrapper">
                            <button className="service-button" onClick={handleClick}>Explore Services</button>
                            <button className="video-button" onClick={handleClick}>
                                <IoCaretForwardCircleOutline className="icon-forward" />
                                Watch A Video
                            </button>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <div className="card-container">
                            <img src={Page1Team} alt="Team" className="team-image" />
                            <img src={Page1Card} alt="Card" className="card-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page1;
