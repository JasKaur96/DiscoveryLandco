import {Component} from 'react'
import logo1 from "../../Assets/newLogo.png";
import './footer1.css'
export default class Contact extends Component {
    render() {
      return (
        <div className="body">
          <div className="logo-footer" >
            <img src={logo1} alt="logo1" alt="logo1"></img>
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
   );
    }
  }
