import React from 'react'
import {Component} from 'react'
import wellness from "../../Assets/wellness.jpg";
import Footer from "../Footer/footer";
import Slideshow from '../Slide/slide';
import './Dashboard.css'

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>   
            <div class="navbar" id="header-navbar">
                {/* <Header/> */}
            </div>
            <div id="header-video">
                <video autoPlay loop className="video-background" muted plays-inline >
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
                        <div id="headingone">
                            <h1>Welcome to</h1> <br></br>
                            <h1 id ="headingtwo">our world</h1>
                        </div> 
                    </div>
                    <div className="" id="ourworlds-desc">
                        <p>Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgotten. This is classic, comfortable, modern living in nature’s most spectacular settings worldwide. Reassuringly exclusive. Generously welcoming. Find your unique world – a place where families love to be; creating unforgettable moments, together.
                                    </p>
                    </div> 
                    <div id="ourworld-image-container">
                        <img src="http://staging.discoverylandco.com/imager/images/27/DriftwoodDevelopment_JessicaJohnson_March2019_52_df8586bb4c14d18f77324f7452f392cd.jpg" alt="" id = "imageourworld"/>
                    </div>               
                </div>
                <div id="onlyimage-ourworld">
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
                    <div id="ourworlds-desc"><p>From majestic mountainscapes to beautiful coastlines... breathtaking 
                            worlds to uncover and experience.</p>
                    </div> 
                </div>
            </div>
            <div><Slideshow/></div>
            <div id="expolreworlds">
                <div id="text-image-ourworld">
                    <div id="ourworld-heading">
                        <div id="headingone">
                        <h1>Lands of</h1><br></br>
                        <h1 id ="headingtwo">Discovery</h1>
                    </div>
                </div>
                <div id="ourworlds-desc"><p>A world away from the day-to-day. Your escape. Your haven. Your world. Explore the map below and take a journey to our communities </p>
                </div>         
                </div>   
            </div>
    <div>
         <ul className="landsofdiscovery">
          <li><a href className="landsofdiscovery1"><u>North America & Caribbean</u></a></li>
          <li><a href="#" className="landsofdiscovery1" >Hawaii</a></li>
          <li><a href="#" className="landsofdiscovery1">Europe</a></li>
        </ul>
    </div>
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




//         <div>
    //   <Router>
    //     <nav classNameName="navbar" >
    //       {/* <Bar classNameName="navbar1"  /> */}
    //       <ul> <img classNameName="logo" ></img>
    //         <li><a href="#" classNameName="cool-link">AboutDLC</a></li>
    //         <li><a href="#" classNameName="cool-link" >OurWorlds</a></li>
    //         <li><a href="#" classNameName="cool-link" >Experiences</a></li>
    //         <li><a href="#" classNameName="cool-link" >Gallery</a></li>
    //         <li><a href="#" classNameName="cool-link" > Press</a></li>
    //         <li><a href="#" classNameName="cool-link" >Contact</a></li>
    //       </ul>
    //     </nav>
    //   </Router>
    // </div>