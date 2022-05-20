import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
    return (
        <>
            <div className="contact">
                <h1 className="contact-title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                </h1>
                <div className="contact-title-underline"></div>
                <div className="contact-form-block">
                    <div className="contact-form-block-text">
                        <div className="contact-form-block-text-title">
                            Send us a message
                        </div>
                        <div className="contact-form-block-text-sub-title">
                            Imperdiet, vel egestas augue pharetra. Vivamus
                            viverra varius porttitor. Aliquam nec purus.
                        </div>
                        <div className="contact-form-block-text-information">
                            In sed libero convallis, finibus turpis ac, mollis
                            quam. Class aptent taciti sociosqu ad litora
                            torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                    </div>
                    <div className="contact-form-block-form">
                        <form className="contact-form-block-form-container">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="your-name-input inputs"
                            />
                            <input
                                type="text"
                                placeholder="Your email"
                                className="your-email-input inputs"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="subject-input inputs"
                            />
                            <textarea
                                placeholder="Message"
                                className="message-input inputs"
                                rows={7}
                            />
                            <button className="contact-form-block-form-container-send-message-btn">
                                Send a message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
