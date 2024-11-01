import React from "react";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import "./Page1.css";
import Page1Team from "../../Assets/Page1Card1.png";
import Page1Card from "../../Assets/Page1Card.svg";

function Page1() {
    const handleClick = (e) => {
        const button = e.currentTarget;
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    };

    return (
        <div className="hero-section">
            <div className="background">
                <div className="content">
                    <div className="text-content">
                        <div className="intro-text">
                            <div className="frame">
                                <div className="title">
                                    <span className="title-bar"></span>
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
                            <p className="description">
                                Assertively streamline interactive interfaces after value infrastructures. We are 100+ professional software engineers ready to assist you.
                            </p>
                        </div>
                        <div className="button-container">
                            <button className="explore-btn" onClick={handleClick}>Explore Services</button>
                            <button className="video-btn" onClick={handleClick}>
                                <IoCaretForwardCircleOutline className="imgiii" />
                                Watch A Video
                            </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="card">
                            <img src={Page1Team} alt="Team" className="card-image-main" />
                            <img src={Page1Card} alt="Card" className="card-image-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page1;
