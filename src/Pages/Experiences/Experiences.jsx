import React from 'react'
import {Component} from 'react'
import water from "../../Assets/water.jpg";
import Footer from "../../Components/Footer/footer";
import '../Experiences/Experiences.css';
import Header from "../../Components/Header/Header";
import Aos from 'aos';
import "aos/dist/aos.css"
class Experiences extends Component{
    constructor(props){
        super(props)
    }
    render(){ 
        return(<>   
              <div className="navbar">
                <Header/>
                </div>
            <div className="header-video">
                <video autoPlay loop className="video-background" muted plays-inline style={{"width":"2290px"}}>
                    <source src="https://dxaurk9yhilm4.cloudfront.net/experiences_hero.mp4?mtime=20190609072805" />
                </video>
               
                <div className="c-site-head__logo | js-logo-link" aria-label="Home" >
                    <div className="logocontainer">
                    </div>
                </div>
            </div>

            <div data-aos="flip-up"  style={{ "color":"black","textAlign": "center", "font-family":"gt-sectra","font-weight":"200","font-size": "50px", padding: "210px" }}>
                <div  data-aos="flip-up" > Memorable days. Exceptional nights. We believe it’s our mission <br></br> to</div>
                    <div  data-aos="flip-up">make every minute matter. So you can live your life to the fullest, 
                        <div  data-aos="flip-up"> with the people closest to you.</div>
                    </div>
            </div>
            
            {/* <div className="father-main"> */}
            <div className="inner-content">
              <div className="ourmission">
                <div className="ourmission-text">
                <h1 class="o-h3 c-img-txt__title">Exclusive to<br/>your world</h1>
                  <div data-aos="zoom-up" className="o-txt" data-scroll="staggerLinesP">
                    <p>We don’t build buildings, but rather we build settings where families can create intergenerational memories and enrich their lives in exquisite and untouched sanctuaries. Everything we do is driven by the fundamental desire to create spaces where families can be together.</p>
                    <p>These settings offer a relaxed and comfortable sense of community featuring outstanding clubhouses, incredible residential offerings, premier golf courses, welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits program; all offering the highest of service standards to enrich your experience. </p>
                  </div>
                </div>
              </div>
              <div className="space"></div>
                <div className="father-image">
                  <img data-aos="zoom-in" src={water}  alt=""/>      
                </div>
            </div> 
          {/* </div> */}

            <div className="golf">
                <div >
                    <div className="golf-img">
                        <img data-aos="zoom-in" style={{"width":"1710.362px","height":"1050.7px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/533/Golf3_4d32d1f061062da257f8ac1083a047ac.jpg"/>                           
                    </div><br></br>
                    <div className="golf-container1" style={{"backgroud-color":"gray"," display":" flex","flex-direction":" column"
                            ,"align-items":"center"}}>
                    </div>
                    <div className="golf-text" style={{"backgroud-color":"white"," display":" flex","flex-direction":" column"
                                            ,"align-items":"center"}}>
                        <div  className="golf-inner-content">    
                        <p  className="golf-content" style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "left" }}>
                        <h1   >Golf</h1>
                            We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.
                        </p>
                        </div>
                        <a href="https://discoverylandco.com/experiences/golf" >
                            <div className="explorebtn3">
                                <button className="btn3-text" aria-hidden="true">Explore</button>
                            </div>
                            {/* <div className="c-btn__text c-btn__text--top | js-btn__text--top">Explore</div>
                            <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                        </a>

                        <div className="golf-container2">
                        </div>
                    </div>

                    <div className="golf-img2">
                        <img data-aos="zoom-in" style={{"width":"1710.362px","height":"1050.7px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/144/OD_image_4d32d1f061062da257f8ac1083a047ac.jpg" alt="" />
                                       
                    </div><br></br>
                    <div className="golf-container3" style={{"backgroud-color":"gray"," display":" flex","flex-direction":" column"
                            ,"align-items":"center"}}>
                    </div>
                    <div className="golf-text2" style={{"backgroud-color":"white"," display":" flex","flex-direction":" column"
                                        ,"align-items":"center"}}>
                        <div  className="golf-inner-content">
                        
                        <p  className="golf-content" style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"35px","display": "block","text-align": "left" }}>
                        <h1 >Outdoor Pursuits</h1><br></br> 
                            Our signature Outdoor Pursuits program is designed for families to create memories together. Our trademark comfort stations also set new standards in on-course amenities.
                        </p>
                        </div>
                        <a href="https://discoverylandco.com/experiences/golf" >
                            <div className="explorebtn3">
                                <button className="btn3-text"  aria-hidden="true">Explore</button>
                            </div>
                                {/* <div className="c-btn__textc-btn__text--top | js-btn__text--top">Explore</div>
                                <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                        </a>

                        <div className="golf-container4">
                            </div>
                            <br></br>
                            <div className="golf-img3">
                            </div><br></br>
                            
                    </div>
            
                    <div className="golf-img3">
                            <img data-aos="zoom-in" style={{"width":"1710.362px","height":"1050.7px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/145/Wellness_image_4d32d1f061062da257f8ac1083a047ac.jpg"/>                           
                    </div><br></br>
                        <div className="golf-container5" style={{"backgroud-color":"gray"," display":" flex","flex-direction":" column"
                            ,"align-items":"center"}}>
                        </div>
                    <div className="golf-text3" style={{"backgroud-color":"white"," display":" flex","flex-direction":" column"
                        ,"align-items":"center"}}>
                        <div  className="golf-inner-content">        
                            <p  className="golf-content" style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"30px","display": "block","text-align": "left" }}>
                            <h1>Wellness</h1>
                                We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses.<br></br> Our trademark comfort stations also set new standards in on-course amenities.
                            </p>
                            </div>
                            <a href="https://discoverylandco.com/experiences/golf" >
                                {/* <div className="explorebtn3">
                                <button >Explore</button>
                                </div> */}
                                <div class="c-btn__borders">
                                    <span class="c-btn__border c-btn__border--top | js-btn__border--horizontal"></span>
                                    <span class="c-btn__border c-btn__border--bottom | js-btn__border--horizontal"></span>
                                    <span class="c-btn__border c-btn__border--left | js-btn__border--vertical"></span>
                                    <span class="c-btn__border c-btn__border--right | js-btn__border--vertical"></span>
                                </div>
                            {/* <div className="c-btn__text c-btn__text--top | js-btn__text--top">Explore</div> */}
                            {/* <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                            <div className="explorebtn3 ">
                                <button className="btn3-text" aria-hidden="true">Explore</button>
                                </div>
                            </a>

                            <div className="golf-container6">
                            </div>
                    </div>

            </div>
        </div>
        <div>
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/139/img_5dabbd1a34149dcaed83515ff1526a0f.jpg" style={{"width":"2280px","height":"782px"}} alt="" />
        <div className="ourworld">Our World</div>
            <div className="exploreworld">
                <div className="btn3-text">Explore</div>
            </div>
        </div>  
    <Footer/>
    </>
    )
    }
}

export default Experiences;


