import React from 'react'
import {Component} from 'react'
import water from "../../Assets/water.jpg";
import Footer from "../../Components/Footer/footer";
import Header from '../../Components/Header/Header';
import '../Press/Press.css';
class Press extends Component{
    constructor(props){
        super(props)
    } 
    render(){
        return(<>   
            <div className="navbar" id="header-navbar">
                <Header/>
            </div>
            <div className="header-video">
               <img src="https://dxaurk9yhilm4.cloudfront.net/images/889/DJI_0161-copy_2cbd80a0345be3b5a0b7649a1a2d057f.jpg" style={{"height":"1100px","width":"2290px"}} alt="Discovery’s newest property in Kaua’i North Shore Preserve"></img>
                <div className="c-site-head__logo | js-logo-link" aria-label="Home" >
                    <div className="logocontainer">
                    </div>
                </div>
            </div>

            <div className="press-container">
                <div >
                <h2 class="news">Latest news</h2>
                    <div className="press-image1">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/8790/DJI_0265_RET_2_210405_191033_8cfe90628771654de81065d52a5bfbcf.jpg" style={{"height":"1200px","width":"1470px"}} alt="Discovery’s newest property in Kaua’i North Shore Preserve"/>                         
                    </div><br></br>
                    <div className="press-container1" style={{"backgroud-color":"gray"," display":" flex","flex-direction":" column"
                            ,"align-items":"center"}}>
                    </div>
                    <div className="press-text" style={{"backgroud-color":"white"," display":" flex","flex-direction":" column"
                                            ,"align-items":"center"}}>
                        <div className="inner-content">    
                        <p style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "left" }}>
                        <h1 >Golf</h1>
                            We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.
                        </p>
                        </div>
                        <a href="https://discoverylandco.com/experiences/golf" >
                            <div className="explorebtn">
                                <button  aria-hidden="true">Explore</button>
                            </div>
                            {/* <div className="c-btn__text c-btn__text--top | js-btn__text--top">Explore</div>
                            <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                        </a>

                        <div >
                        </div>
                    </div>
                </div>
            </div>
            
           

    <Footer/>
    </>
    )
    }
}

export default Press;


