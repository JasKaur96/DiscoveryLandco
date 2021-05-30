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
                            <h5>NEWS</h5>
                            <h1 style={{"font-size":"65px"}}>Discovery's</h1><br></br><br></br>
                            Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.  </p>
                        </div>
                        <a href="https://discoverylandco.com/experiences/golf" style={{"padding":"200px 5px"}}>
                            <div className="explorebtn3" >
                                <button  aria-hidden="true">Read Article</button>
                            </div>
                            {/* <div className="c-btn__text c-btn__text--top | js-btn__text--top">Explore</div>
                            <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                        </a>
                    </div>

                    <div>
                        fhdhfxhccccccccccccccccccccccccccccccc
                  <button id = "left">
                <svg  id = "leftarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
            </button>
                   </div>
                </div>
            </div>
            
           

    <Footer/>
    </>
    )
    }
}

export default Press;


