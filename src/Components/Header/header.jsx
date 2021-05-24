import React from 'react'
import {Component} from 'react'
import logo1 from "../../Assets/logo.png";
import './header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Bar from '../Menubar/menu';
import about from '../../Pages/About'
import experience from '../../Pages/Experiences/Experiences'

class Header extends Component{
   
    render(){
        return(<>   
            <nav>
            <ul>
                    <li><Link to="/" ><img className="logo" style={{"width":"250px"}} src={logo1}></img></Link></li>
                    <li><Link to="/about" style={{"color":"black"}}>About DLC</Link></li>
                    <li><Link to="/ourworld" style={{"color":"black"}}>OurWorld</Link></li>  
                    <li><a><Link to="/experience"  style={{"color":"black"}}>Experiences</Link></a></li>
                    <li><a><Link to="/gallery" style={{"color":"black"}} >Gallery</Link></a></li>
                    <li><a><Link to="/press"  style={{"color":"black"}}>Press</Link></a></li>
            </ul>
            </nav>           
        </>
        )
    }
}

export default Header;



