import React from 'react'
import {Component} from 'react'

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(      
            <nav className="nav" >
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
                </label>
                <input type="checkbox" id="check1" />
                <label for="check1" className="checkbtn1">
                <i className="fas fa-bars" ></i>
                </label>
                <ul class="extra">
                    <li>magazine</li>
                    <li>company</li>
                    <li>carrers</li>
                    <li>foundation</li>
                    <li>contacts</li>
                </ul>
        
                <label className="logo">Discovery</label>
                <ul >
                    <li><a className="active" href="/" >About DLC</a></li>
                    <li><a href="#">Our Worlds</a></li>
                    <li><a href="/experience">Experiences</a></li>
                    <li><a href="/gallery" >Gallery</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
          </nav>
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