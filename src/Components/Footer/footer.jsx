import {Component} from 'react'
import logo1 from "../../Assets/newLogo.png";
import './footer1.css'
export default class Contact extends Component {
    render() {
      return (
        <div className="body">
          <div className="logo-footer" >
            <img src={logo1} alt="logo1"></img>
        </div>
        <div className="getintouch">
            <p>GET IN TOUCH</p>
            <a>(480)624-5200</a>
            <a>mail@discoverylandco.com</a>
        </div>
        <div className="navlinks">
            <a>About DlC</a>
            <a>Our Worlds</a>
            <a>Experiences</a>
            <a>Gallery</a>
            <a>Press</a>
            <a>Contact</a>
        </div>
        <div className="details">
            <a>Magazine</a>
            <a>Careers</a>
            <a>Foundation</a>
            <a>Company</a>
            <a>Privacy</a>
        </div>
        <div className="rights">
            <p> @Discovery Land Company. All Rights Reserved.
            </p>
        </div>
    </div>
    //          <footer>
    //             <div className="footer">
    //               <div className="logo1" >
    //                 <img src={logo1} alt="logo1" alt="logo1"></img>
    //               </div>
    //               <div className="footerInfo">
    //                 <h6></h6>
    //                 <nav className="footerNav">
    //                   <div class="inTouch">
    //                     <ul>
    //                       <li><a href="#" style={{ color: 'grey' }} ><b>GET IN TOUCH</b></a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">(480)624-5200</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link"><u>mail@discoverylandco.com</u></a></li>
    //                     </ul>
    //                   </div>
    //                   <div className="company">
    //                     <ul>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">About DLC</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">Our Worlds</a></li>
    //                       <li><a href="#" style={{ color: 'white' }}className="cool-link">Experiences</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">Gallery</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">Press</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">Contact</a></li>
    //                     </ul>
    //                   </div>
    //                   <div className="company" >
    //                     <ul className="company1" >
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link" >Magazine</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">Careers</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">Foundation</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">Company</a></li>
    //                       <li><a href="#" style={{ color: 'white' }} className="cool-link">Privacy</a></li>
    //                     </ul>
    //                   </div>
    //                 </nav>
    //               </div>
    //             </div>
    //             <div className="last">
    //               <p>© Discovery Land Company. All rights reserved.</p>
    //             </div>
    //           </footer>
      );
    }
  }