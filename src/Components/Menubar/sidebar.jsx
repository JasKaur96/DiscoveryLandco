import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css"
import logo from '../../Assets/icons/logo.svg';

import cross from '../../Assets/icons/cross.svg';
// import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';


export default class SideBar extends Component{
  
    handleClose=()=>{
        window.location.href="http://localhost:3000"
        
        console.log("HandleClose")
    }
    magazine = () =>{
        window.location.href="https://discoverylandco.com/discovery-life-magazine"
    }

    company = () =>{
        window.location.href="https://discoverylandco.com/company"
    }

    foundation = () =>{
        window.location.href="https://discoverylandco.com/foundation"
    }

    careers = () =>{
        window.location.href="https://discoverylandco.com/careers"
    }
    contacts = () =>{
        window.location.href="https://discoverylandco.com/contact"
    }

    render(){
    return (<>
    
        <div className="bm-menu">
        <ul>
            <li><Link to="/" ><img className="logo" style={{"width":"250px"}} src={logo}></img></Link></li>
            <li><Link className="logo-cross" ><img className="logo" style={{"width":"20px"}} onClick={this.handleClose} src={cross}></img></Link></li>                
        </ul><br></br><br></br>
            <p  className="bm-item-list " onClick={this.magazine}>
                <h1 style={{"font-size":"65px"}}  className="menu-font">Magazine</h1>
            </p>
            <p className="bm-item-list"  onClick={this.company}>
                <h1 style={{"font-size":"65px"}} className="menu-font"> Company </h1>
             </p>
            <p className="bm-item-list"  onClick={this.foundation}>
            <h1 style={{"font-size":"65px"}} className="menu-font"> Foundation </h1> 
            </p>
            <p className="bm-item-list"  onClick={this.careers}>
                <h1 style={{"font-size":"65px"}} className="menu-font"> Careers   </h1> 
            </p>
            <p className="bm-item-list"  onClick={this.contacts}>             
                <h1 style={{"font-size":"65px"}} className="menu-font">    Contacts   </h1> 
            </p>
        
        </div>
      </>   
    );
    }
};