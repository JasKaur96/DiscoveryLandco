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
                          </a>
                    </div>

                    <div>
                        {/* fhdhfxhccccccccccccccccccccccccccccccc
                        <svg  id = "leftarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"></svg> */}
                    </div>
                </div>
            </div>
            
           <div className="press-white-container">
                {/* <div className="father-main"> */}
                    {/* <div className="inner-content"> */}
                    <div className="ourmission">
                        <div className="ourmission-text">
                        <h1 style={{"font-family": "messina-sans","font-size":"80px","display": "block","text-align": "center" }} class="o-h3 c-img-txt__title" >Press</h1>                      
                    </div>

                    <div className="article-text" >
                        <div className="article-inner-content">    
                            <p style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "left" }}>
                            <h1 style={{"font-size":"45px"}}>Thinking of golf in retirement?</h1>
                            New Yourk times | March 7,2020</p>
                        </div><br></br>
                        <a  href="https://discoverylandco.com/experiences/golf" style={{"padding":"200px 50px"}}>
                            <div className="article-button" >
                                <button  aria-hidden="true">Read Article</button>
                            </div>
                            {/* <div className="c-btn__text c-btn__text--top | js-btn__text--top">Explore</div>
                            <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                        </a>

                        <div className="article2-inner-content">    
                            <p style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "left" }}>
                            <h1 style={{"font-size":"45px"}}>Most Influential Developers</h1>
                            Golf Inc.| January/February 2020</p>
                        </div><br></br>
                        <a  href="https://discoverylandco.com/experiences/golf" style={{"padding":"200px 50px"}}>
                            <div className="article2-button" >
                                <button  aria-hidden="true">Read Article</button>
                            </div>
                        
                          </a>

                    </div>
               
                    <div className="article-text" >
                        <div className="article-inner-content">    
                            <p style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "left" }}>
                            <h1 style={{"font-size":"45px"}}>Thinking of golf in retirement?</h1>
                            New Yourk times | March 7,2020</p>
                        </div><br></br>
                        <a  href="https://discoverylandco.com/experiences/golf" style={{"padding":"200px 50px"}}>
                            <div className="article-button" >
                                <button  aria-hidden="true">Read Article</button>
                            </div>
                            {/* <div className="c-btn__text c-btn__text--top | js-btn__text--top">Explore</div>
                            <div className="c-btn__text c-btn__text--bottom | js-btn__text--bottom" aria-hidden="true">Explore</div> */}
                        </a>

                        <div className="article2-inner-content">    
                            <p style={{"line-height":"1.5","color": "#777","font-family": "messina-sans","font-size":"25px","display": "block","text-align": "left" }}>
                            <h1 style={{"font-size":"45px"}}>Most Influential Developers</h1>
                            Golf Inc.| January/February 2020</p>
                        </div><br></br>
                        <a  href="https://discoverylandco.com/experiences/golf" style={{"padding":"200px 50px"}}>
                            <div className="article2-button" >
                                <button  aria-hidden="true">Read Article</button>
                            </div>
                        
                          </a>
                    </div>
                      
                    </div> 
                {/* </div> */}

           </div>

    <Footer/>
    </>
    )
    }
}

export default Press;


