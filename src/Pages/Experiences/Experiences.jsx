import React from 'react'
import {Component} from 'react'
import water from "../../Assets/water.jpg";
import Footer from "../../Components/Footer/footer";
import '../../Components/Dashboard/Dashboard.css'
import '../Experiences/Experiences.css';
class Experiences extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>   
            <div className="navbar" id="header-navbar">
                {/* <Header/> */}
            </div>
            <div id="header-video">
                <video autoPlay loop className="video-background" muted plays-inline style={{"width":"1900px"}}>
                    <source src="https://dxaurk9yhilm4.cloudfront.net/experiences_hero.mp4?mtime=20190609072805" />
                </video>
               
                <div className="c-site-head__logo | js-logo-link" aria-label="Home" >
                    <div className="logocontainer">
                    </div>
                </div>
            </div>

            <div  style={{ "color":"black","textAlign": "center", "font-family":"gt-sectra","font-weight":"200","font-size": "50px", padding: "210px" }}>
                <div> Memorable days. Exceptional nights. We believe it’s our mission <br></br> to</div>
                    <div>make every minute matter. So you can live your life to the fullest, 
                                    <div> with the people closest to you.</div>
            </div>
            </div>
            
            <div className="father-main">
            <div className="inner-content">
              <div className="exclusive">
                <div className="exclusive-text">
                <h1>Exclusive to<br/>your world</h1>
                  <div className="o-txt" data-scroll="staggerLinesP">
                    <p></p>
                    <p style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "start", "position": "relative"," opacity":"1"}}><div >
                    Our worlds are designed to offer you endless </div>
                    <div>
                    opportunities to share incredible once-in-a-lifetime </div>
                    <div>
                    experiences and adventures every single minute of the </div><div>
                    day. Each of our settings offers a relaxed sense of </div>
                    <div>
                    community through exceptional clubhouses, <br></br>world-class golf courses, welcoming staff and an 
                    <br></br>extensive Outdoor Pursuits program. Create moments 
                    <br/>of joy and wonder, unforgettable memories and <br/>
                    cherished times, together with those who matter most.</div></p>


                </div>
                </div>
              </div>

              <div className="space"></div>
                <div className="father-image">
                  <img src={water} style={{"width":"700px"}}  alt=""/>      
                </div>
              </div> 
            </div>

            <div className="golf">
                <div >
                    <div className="golf-img">
                        <img style={{"width":"1710.362px","height":"1050.7px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/533/Golf3_4d32d1f061062da257f8ac1083a047ac.jpg"/>                           
                        </div><br></br>
                        <div className="golf-container1" style={{"backgroud-color":"gray"," display":" flex","flex-direction":" column"
                            ,"align-items":"center"}}>
                        </div>
                    <div className="golf-text" style={{"backgroud-color":"white"," display":" flex","flex-direction":" column"
                                            ,"align-items":"center"}}>
                    <div className="inner-content">
                    
                        <p  className="golf-content" style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "left" }}>
                        <h1 >Golf</h1>
                            We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.
                        </p>
                    </div>
                    <a href="https://discoverylandco.com/experiences/golf" >
                        <div className="explorebtn">
                        <button  aria-hidden="true">Explore</button>
                    </div>
                    {/* <div className="c-btn__text c-btn__text--top | js-btn__text--top">Explore</div>
                    <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                    </a>

                    <div className="golf-container2">
                        </div>
                </div>

                <div className="golf-img2">
                        <img style={{"width":"1710.362px","height":"1050.7px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/144/OD_image_4d32d1f061062da257f8ac1083a047ac.jpg" alt="" />
                                       
                        </div><br></br>
                        <div className="golf-container3" style={{"backgroud-color":"gray"," display":" flex","flex-direction":" column"
                            ,"align-items":"center"}}>
                        </div>
                    <div className="golf-text2" style={{"backgroud-color":"white"," display":" flex","flex-direction":" column"
                                            ,"align-items":"center"}}>
                    <div className="inner-content">
                    
                        <p  className="golf-content" style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "left" }}>
                        <h1 >Golf</h1>
                            We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.
                        </p>
                    </div>
                    <a href="https://discoverylandco.com/experiences/golf" >
                        <div className="explorebtn">
                        <button  aria-hidden="true">Explore</button>
                    </div>
                    {/* <div className="c-btn__text c-btn__text--top | js-btn__text--top">Explore</div>
                    <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                    </a>

                    <div className="golf-container4">
                        </div>
                </div>

                </div>


                   
                </div>
           
    <Footer/>
    </>
    )
    }
}

export default Experiences;


