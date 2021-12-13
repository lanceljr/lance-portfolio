import React, { Component } from "react";
import Lottie from 'react-lottie';
import animationData from "./Message.json";
import ContactForm from "./ContactForm";

const Message = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

class ContactTwo extends Component{
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">Let's Connect</span>
                                <h2 className="title">Contact Me</h2>
                                <div className="im_address">
                                    <span>Mobile Number:</span>
                                    <a className="link im-hover">+65 9820 6082</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>Email:</span>
                                    <a className="link im-hover">lanceljr98@gmail.com</a>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <Lottie options={Message}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;