import React from 'react'
import {Component} from 'react'
import './header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../Assets/icons/logo.svg';

import menu from '../../Assets/icons/hamburger.svg';
import logoBlack from '../../Assets/icons/logo-black.svg'
// import { AppBar, IconButton, Toolbar, MenuIcon } from '@material-ui/core';
// import MenuIcon from '@material-ui/core/MenuIcon'
// import SideBar from '../Menubar/sidebar';
// import Bar from '../Menubar/menu';
class Header extends Component{
   constructor(props){
       super(props)
       this.state = {
           height : false,
          
       }
   } 

   componentDidMount(){
        window.addEventListener("scroll",this.updateHeight)
   }

   componentWillUnmount(){
    window.removeEventListener("scroll",this.updateHeight)
   }

   updateHeight = () =>{
       if(window.pageYOffset > 1000){
            this.setState({
                height : true
            })
       }else{
           this.setState({
               height : false
           })
    }
    //    this.setState({
    //        height: window.pageYOffset
    //    })

       console.log("Updateheight method in header", window.pageYOffset)
   }
    render(){
        console.log("State variable :",this.state.height);
        return(<>   
        
            <div className={this.state.height ?"header-nav" : "nav"}>
            <ul>
                    <li><Link to="/" ><img className="logo" style={{"width":"250px"}} src={logo}></img></Link></li>
                    <li><Link className="left"  to="/about" >AboutDLC</Link></li>
                    <li><Link className="left" to="/ourworld" >OurWorld</Link></li>  
                    <li><Link className="left" to="/experiences">Experiences</Link></li>
                    <li><Link className="left" to="/gallery" >Gallery</Link></li>
                    <li><Link className="left" to="/press" >Press</Link></li>
                    <li><Link to="/bar"><img className="logo-menu" style={{"width":"35px"}} src={menu}></img></Link></li>
                        
                    {/* <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                        {/* <MenuIcon /> */}
                        {/* </IconButton>
                    </Toolbar></AppBar> */}
                   
            </ul>
            </div>           
        </>
        )
    }
}

export default Header;



