import React from 'react'
import {Component} from 'react'
import logo1 from "../../Assets/logo.png";
import './header.css'
import {Link} from 'react-router-dom'; 
class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>   
        <div>
            {/* <div className="hero-vid video">
                <video src="https://player.vimeo.com/external/504987430.hd.mp4?s=5887082673ab2d83fe3c560bb10ba8b39d36d865&amp;profile_id=175"
                muted="" loop="" ></video>
            </div> */}
            {/* <div class="c-site-head__logo | js-logo-link" aria-label="Home" >
            
            </div> */}
            <nav className="nav" >
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
                </label>
                <input type="checkbox" id="check1" />
                <label htmlFor="check1" className="checkbtn1">
                <i className="fas fa-bars" ></i>
                </label>
                <ul className="extra">
                    <li>magazine</li>
                    <li>company</li>
                    <li>carrers</li>
                    <li>foundation</li>
                    <li>contacts</li>
                </ul>

          
            <div class="navbar" id="header-navbar">
               </div>
                <ul >
                <li><Link to="/" ><img className="logo" src={logo1}></img></Link></li>
                <li><a><Link className="active" to="/about" >About DLC</Link></a></li>
                <li><a><Link to="/world">Our Worlds</Link></a></li>
                <li><a><Link to="/experience">Experiences</Link></a></li>
                <li><a><Link to="/gallery" >Gallery</Link></a></li>
                <li><a><Link to="/press">Press</Link></a></li>
                <li><a><Link to="/contact">Contact</Link></a></li>
                </ul>
                <button type="button" className="c-site-head__toggle | js-menu-toggle" tab-index="-1" data-stick="stickyMenu"
                aria-label="Toggle menu">
                <div className="c-burger c-burger--dark">
                <div className="c-burger__line | js-burger__line"></div>
                    <div className="c-burger__line | js-burger__line"></div>
                    <div className="c-burger__line | js-burger__line"></div>

                    <div className="c-burger-close">
                        <div className="c-burger-close__line | js-burger-close__line--1"></div>
                        <div className="c-burger-close__line | js-burger-close__line--2"></div>
                    </div>  
                </div>
           </button>
            </nav>
          


           {/* <img className="logo" src={logo1}></img>
           <ul className="menu-ul">
           <li><a><Link to="/" >About DLC</Link></a></li>
                <li><a><Link to="#">Our Worlds</Link></a></li>
                <li><a><Link to="/experience">Experiences</Link></a></li>
                <li><a><Link to="/gallery" >Gallery</Link></a></li>
                <li><a><Link to="/press">Press</Link></a></li>
                <li><a><Link to="/contact">Contact</Link></a></li>
           </ul> */}
        </div>            
        </>
        )
    }
}

export default Header;




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