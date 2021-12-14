import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import TextLoop from "react-text-loop";
import { FiChevronUp} from "react-icons/fi";
import Header from "../component/header/Header"; 
import PortfolioTab from "../elements/tab/PortfolioTab";
import ServiceList from "../elements/service/ServiceList";
import Contact from "../elements/contact/ContactTwo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin , faFacebook} from '@fortawesome/free-brands-svg-icons'





const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my page!',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

class DesignerPortfolio extends Component {
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render() {
        return (
            <div>
                
                {/* Start Header Area  */}
                <Header headerPosition="header--static" logo="symbol-dark" color="color-black"/>
                {/* End Header Area  */}

                <div className="btn-hire">
                    <a className="btn-default" href="#contact">Hire Me</a>
                </div>

                <div className="slider-wrapper" id="home">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center rn-slider-height" key={index}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="designer-thumbnail">
                                            <img src="/assets/images/about/kevin.jpg" alt="Slider Images"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Lance <br/>
                                            <TextLoop>
                                                <span>Office Fan</span>
                                                <span> Student</span>
                                                <span> Freelance Developer</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            <div className="mt-5">
                                                <a className="mr-3" href="https://github.com/lanceljr" target="_blank"> <FontAwesomeIcon icon={faGithub} size="3x" style={{color:"#6e5494"}}/> </a>
                                                <a className="mr-3" href="https://www.linkedin.com/in/lanceljr/" target="_blank"> <FontAwesomeIcon icon={faLinkedin}  size="3x" style={{color:"#0077B5"}}/></a>
                                                <a className="mr-3" href="https://www.facebook.com/lanceljr" target="_blank"> <FontAwesomeIcon icon={faFacebook}  size="3x" style={{color:"#4267B2"}}/></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>


                {/* Start Skills Area  */}
                <div className="container pt-5 pb-5 skills-container">
                    <div className="row">
                            <div className="col-lg-4 text-center">
                                <h1 id="myskills" className="mt-5"> My <span style={{color:"#0460d9"}}> Skills </span></h1>
                            </div>

                            <div className="col-lg-8">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-4 col-md-2">
                                        <img src="https://img.icons8.com/color/100/000000/javascript--v1.png"/>                       
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <img src="https://img.icons8.com/color/90/000000/react-native.png"/>                          
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <img src="https://img.icons8.com/color/100/000000/mongodb.png"/>                           
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center">
                                <div className="col-4 col-md-2">
                                        <img src="https://img.icons8.com/color/100/000000/mysql-logo.png"/>                       
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <img src="https://img.icons8.com/color/100/000000/vue-js.png"/>                          
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <img src="https://img.icons8.com/dusk/100/000000/php-logo.png"/>                        
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>








                {/* End Skills Area  */}
                


                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">What I can do</span>
                                    <h2 className="title">Services</h2>
                                    <p className="description"> Below are some of the services that I have to offer! </p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service mt--30">
                            <div className="col-lg-12">
                                <ServiceList item="3" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 


                
                {/* Start Designer Portfolio  */}
                <div className="designer-portfolio-area pb--120 bg_color--1" id="projects">
                    <div className="wrapper plr--70 plr_sm--30 plr_md--30">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--60">
                                    <span className="subtitle">My Recent Work.</span>
                                    <h2 className="title">Projects</h2>
                                    <p className="description">Stay tuned to find out more about the exciting projects that I'm working on!</p>
                                </div>
                            </div>
                        </div>
                        <PortfolioTab column="col-lg-4 col-md-6 col-sm-6 col-12" />
                    </div>
                </div>
                {/* End Designer Portfolio  */}


                {/* Start Contact Us */}
                <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
                    <Contact />
                </div>
                {/* End Contact Us */}


                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </div>
        )
    }
}   

export default DesignerPortfolio
