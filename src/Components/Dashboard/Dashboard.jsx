import React from 'react'
import {Component} from 'react'
import wellness from "../../Assets/wellness.jpg";
import Footer from "../Footer/footer";
import Slideshow from '../Slide/slide';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Dashboard.css'
import Header from '../Header/Header';
import Aos from 'aos';
import "aos/dist/aos.css"

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            height : null
        }
    }
 
    componentDidMount(){
        window.addEventListener("scroll",this.updateHeight)
    }
 
    componentWillUnmount(){
        window.removeEventListener("scroll",this.updateHeight)
    }
    
    updateHeight = () => {
        this.setState({
            height: window.pageYOffset
        })
        console.log("Updateheight method", window.pageYOffset)
    }

    leftbtn = () => {
        console.log("Left button");
        
    }
    
    render(){
        console.log("value of scroll",window.pageYOffset);
        return(<>   
             <div class="navbar">
                <Header/>
            </div>
          
            <div id="header-video">
                <video autoPlay loop className="video-background" style={{"width":"2300px"}}  muted plays-inline >
                    <source src="https://player.vimeo.com/external/504987430.hd.mp4?s=5887082673ab2d83fe3c560bb10ba8b39d36d865&amp;profile_id=175" type="video/mp4" />
                </video>
                <div class="c-site-head__logo | js-logo-link" aria-label="Home" >
                    <div class="logocontainer">
                    </div>
                </div>
            </div>

            <div id="ourworld">
                <div id="text-image-ourworld">
                    <div id="ourworld-heading">
                        <div data-aos="fade-left" id="headingone"><br></br><br></br>
                            <h1 >Welcome to</h1> <br></br>
                            <h1 id ="headingtwo">our world</h1>
                        </div> 
                    </div>
                    <div data-aos="fade-right" className="" id="ourworlds-desc">
                        <p>Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgotten. This is classic, comfortable, modern living in nature’s most spectacular settings worldwide. Reassuringly exclusive. Generously welcoming. Find your unique world – a place where families love to be; creating unforgettable moments, together.
                                    </p>
                    </div> 
                    <div data-aos="zoom-in"  id="ourworld-image-container">
                        <img style={{"width":"800px","height":"500px"}} src="http://staging.discoverylandco.com/imager/images/27/DriftwoodDevelopment_JessicaJohnson_March2019_52_df8586bb4c14d18f77324f7452f392cd.jpg" alt="" id = "imageourworld"/>
                    </div>               
                </div>
                <div data-aos="zoom-in"  id="onlyimage-ourworld">
                    <img src="http://staging.discoverylandco.com/imager/images/275/Home_76fe09b415dcada4f46ba4114338562c.jpg" alt="" id ="onlyimgcontainerimg"/>  
                </div>    
            </div>
       

            <div id="expolreworlds">
                <div id="text-image-ourworld">
                    <div id="ourworld-heading">
                        <div id="headingone">
                            <h1>Explore</h1><br></br>
                            <h1 id ="headingtwo">our worlds</h1>
                        </div>
                    </div>
        {/* <div id="descexplore">
            <p>From majestic mountainscapes to beautiful coastlines... breathtaking 
                worlds to uncover and experience.</p>
        </div> */}
        {/* <div className="buttonsExplore">
            <button onClick="slickPrev"> 
            <div className="leftbutton" >
                <svg  className = "leftarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
            </div>
            </button>
            <span></span>
            <button onClick="slickNext">
            <div className="rightbutton">
                <svg  className = "rightarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
            </div>
            </button>
        </div> */}
        
    </div>
    
    </div>  
    <div><Slideshow/>   <br></br><br></br></div>     
            <div id="expolreworlds">
                <div id="text-image-ourworld">
                    <div id="ourworld-heading">
                        <div id="headingone">
                        <h1>Lands of</h1><br></br>
                        <h1 id ="headingtwo">Discovery</h1>
                        <p id="ourworlds-desc">A world away from the day-to-day. Your escape. Your haven. Your world. Explore the map below and take a journey to our communities </p>
                 
                    </div>
                    
                </div>
                      
                </div>   
            </div>
    <div>
         <ul className="landsofdiscovery">
          <li><a href className="landsofdiscovery1"><u>North America & Caribbean</u></a></li>
          <li><a href="#" className="landsofdiscovery1" >Hawaii</a></li>
          <li><a href="#" className="landsofdiscovery1">Europe</a></li>
        </ul>
    </div><br></br><br></br><br></br><br></br><br></br>
    <div><img className="c-map-world__bg c-map-world__bg img" src="https://discoverylandco.com/static/globe-usa.jpg" alt="World map"/>
    </div>
    <div>
        <div>
            <img className="Gallery1" src="https://dxaurk9yhilm4.cloudfront.net/images/728/Expereinces_slider_190716_095517_e36797c82dbcb9dea0800f713424f022.jpg" alt="track" />        
            <img className="Gallery2" src="https://dxaurk9yhilm4.cloudfront.net/images/729/lifestyle_slider_190716_095537_fc98236fcd7afd38ca0fd181cf61bcb6.jpg" alt="water" />     
            <img className="Gallery3" src={wellness} alt="wellness" />
        </div>
    </div>
    <Footer/>
    </>
    )
    }
}

export default Dashboard;


