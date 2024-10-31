import React from "react";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import "./Page1.css";
import Page1Team from "../../Assets/Page1Card1.png";
import Page1Card from "../../Assets/Page1Card.svg";
function Page1() {
    return (
        <div>
            <div class="hero-section">
                <div class="background">
                    <div class="content">
                        <div class="text-content">
                            <div class="intro-text">
                                <div class="frame">
                                    <div class="title">
                                        <span class="title-bar"></span>
                                        <span>WELCOME TO Ztech!</span>
                                    </div>
                                    <div class="main-text">
                                        <p>
                                            We are ready <span>to provide</span>
                                            <br />
                                            IT solutions
                                        </p>
                                    </div>
                                </div>
                                <p class="description">
                                    Assertively streamline interactive interfaces after value infrastructures. untorn datively fabricate fully tested methodologies before Assertively streamline interactive
                                    interfaces after  infrastructures. We are 100+ professional software .
                                </p>
                            </div>
                            <div class="button-container">
                                <button class="explore-btn">Explore services</button>
                                <button class="video-btn">
                                    <IoCaretForwardCircleOutline className="imgiii" />
                                    Watch A Video
                                </button>
                            </div>
                        </div>
                        <div class="image-container">
                            <div class="card">
                                <img src={Page1Team} class="card-image-main" />
                                <img src={Page1Card} class="card-image-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Page1;
