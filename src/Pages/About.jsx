import React from 'react'
import {Component} from 'react'
import about from "../Assets/aboutdlcfrot.jpg"
import "./about.css"
import AboutSlide from "../Components/Slide/AboutSlide"
import Footer from "../Components/Footer/footer"
import Header from "../Components/Header/Header";

import Aos from 'aos';
import "aos/dist/aos.css"
class About extends Component{
   
    render(){
        return(<>   
          <div class="navbar">
                <Header/>
          </div>
          <div className="Gallery">
            <img style={{"width":"2500px"}} className="Gallery1" src={about} alt=""></img>
          </div>
          <div data-aos="zoom-in" className="p" style={{ "textAlign": "center", "fontSize": "35px", "fontStyle": "oblique", padding: "210px" }}>
            <div>Founded in 1994 by Mike Meldman, Discovery Land Company is a </div>
            <div>US-based real estate developer and operator of private residential <br></br>club communities and resorts with a world-renowned portfolio of </div>
            <div>domestic and international properties </div>
          </div>

          <div className="father-main">
            <div className="inner-content">
              <div className="ourmission">
                <div className="ourmission-text">
                <h1 class="o-h3 c-img-txt__title">Our Mission</h1>
                  <div data-aos="zoom-up" className="o-txt" data-scroll="staggerLinesP">
                    <p>We don’t build buildings, but rather we build settings where families can create intergenerational memories and enrich their lives in exquisite and untouched sanctuaries. Everything we do is driven by the fundamental desire to create spaces where families can be together.</p>
                    <p>These settings offer a relaxed and comfortable sense of community featuring outstanding clubhouses, incredible residential offerings, premier golf courses, welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits program; all offering the highest of service standards to enrich your experience. </p>
                  </div>
                </div>
              </div>
              <div className="space"></div>
                <div className="father-image">
                  <img data-aos="zoom-in" src="https://dxaurk9yhilm4.cloudfront.net/images/163/What_we_do_intro_5ae402c9837860cd6e4f65e304b3a5fa.jpg"  alt=""/>      
                </div>
              </div> 
            </div>
            <div className="ship-container">
              <div className="ships">
               <img data-aos="zoom-in" data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg" alt="" src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg" style={{"opacity": "1", "width":"1700px","height":"900px"}}/>
              </div>
            </div>
            <div className="father-main">
              <div className="inner-content">
                <div className="ourmission"> 
                  <h1>The Discovery Difference</h1>
                  <div>
                  </div>
                </div>
              </div> 
          </div>  
          <div> <AboutSlide/></div>     
        
          <div className="ship-container">
            <div className="ships">
            <img data-aos="zoom-in" data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/159/What_we_do_design_hero_62018727b9e8103a3d5d6c0701991eca.jpg" alt="" data-parallax="{&quot;scale&quot;: &quot;[1, 1.25]&quot;}" data-parallax-mobile="" style={{"opacity": "1", "width":"3000px","height":"1200px","will-change": "transform"}} src="https://dxaurk9yhilm4.cloudfront.net/images/159/What_we_do_design_hero_62018727b9e8103a3d5d6c0701991eca.jpg"/>
          </div>
          </div><br></br><br></br>
          <div className="ship-container">
            <div className="ships">
            <img data-aos="zoom-in" src="https://dxaurk9yhilm4.cloudfront.net/images/160/What_we_do_footer_2_5dabbd1a34149dcaed83515ff1526a0f.jpg"style={{ "width":"3000px","height":"660px","will-change": "transform", "opacity": "1"}} alt=""/>
            </div>
          </div>


        <Footer/>
       </>
        )
    }
}

export default About;

