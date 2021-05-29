import React from 'react'
import {Component} from 'react'
import './header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../Assets/icons/logo.svg';
import logoBlack from '../../Assets/icons/logo-black.svg'
class Header extends Component{
   constructor(props){
       super(props)
       this.state = {
           height : false,
           color:"#000000"
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
            </ul>
            </div>           
        </>
        )
    }
}

export default Header;



