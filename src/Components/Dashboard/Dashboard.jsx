import React from 'react'
import {Component} from 'react'
import logo1 from "../../Assets/logo.png";
import './Dashboard.css'
import {Link} from 'react-router-dom'; 
import Header from '../Header/header';
import Slideshow from '../Slide/slide';
class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>   
         <div class="navbar" id="header-navbar">
                <Header/>
        </div>
        <div id="header-video">
            <video
            src="https://player.vimeo.com/external/504987430.hd.mp4?s=5887082673ab2d83fe3c560bb10ba8b39d36d865&amp;profile_id=175"
            muted="" loop="" autoplay playsinline ></video>
       
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
        {/* <div id="ourworld-image-container">
            <img src="http://staging.discoverylandco.com/imager/images/27/DriftwoodDevelopment_JessicaJohnson_March2019_52_df8586bb4c14d18f77324f7452f392cd.jpg" alt="" id = "imageourworld"/>
        </div>                */}
    </div>
  
    {/* <div className="c-slider__slides"> */}
        {/* <img src="/static/hold/-n-drag.svg"></img> */}
        {/* <figure className="c-slide__bg o-cover | js-slide__bg">
                <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg" />
        </figure>
    </div> */}
    </div>
    <div>
        <Slideshow/>
    </div>
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