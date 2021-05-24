import React from 'react'
import {Component} from 'react'
import logo1 from "../../Assets/logo.png";
import './header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Bar from '../Menubar/menu';
import about from '../../Pages/About'
class Header extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(<>   
        <div>
            {/* <nav className="nav" >
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
           */}


           <div>
      <Router>
        <nav className="navbar" >
          <Bar className="navbar1" style={{ float: "right" }} />
          <ul>
           {/* <img className="logo" src={logo1} alt="logo"></img> */}
                <li><Link to="/" ><img className="logo" src={logo1}></img></Link></li>
                <li><a><Link className="active" to="about" >About DLC</Link></a></li>
                <li><a><Link to="/world">Our Worlds</Link></a></li>
                <li><a><Link to="/experience">Experiences</Link></a></li>
                <li><a><Link to="/gallery" >Gallery</Link></a></li>
                <li><a><Link to="/press">Press</Link></a></li>
                <li><a><Link to="/contact">Contact</Link></a></li>
          </ul>
        </nav>
      </Router>
    </div>
        </div>            
        </>
        )
    }
}

export default Header;



