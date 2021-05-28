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
                    <li><a className="left"><Link to="/about" >AboutDLC</Link></a></li>
                    <li><a className="left"><Link to="/ourworld" >OurWorld</Link></a></li>  
                    <li><a className="left"><Link to="/experiences">Experiences</Link></a></li>
                    <li><a className="left"><Link to="/gallery" >Gallery</Link></a></li>
                    <li><a className="left"><Link to="/press" >Press</Link></a></li>
            </ul>
            </nav>           
        </>
        )
    }
}

export default Header;



