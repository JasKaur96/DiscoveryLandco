import React, { Component } from 'react'
import Footer from "../../Components/Footer/footer";
import '../Gallery/Gallery.css';

import Aos from 'aos';
import "aos/dist/aos.css"
import Header from '../../Components/Header/Header';
export default class Gallery extends Component{
    render(){
        return (
            <>   
            <div className="navbar">
                <Header/>
            </div>
            <div>
              <img data-aos="zoom-in"src="https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg" style={{"width":"100%","height":"600px"}} alt=""></img>
           
            </div>
           
            <div className="gallery-container">
            
                <div className="grow">
                    <div className="ele">
                        <div className="imgcon">
                            <img data-aos="zoom-in" src="https://dxaurk9yhilm4.cloudfront.net/images/7390/Stocksy_txp3615512ad2e200_OriginalDelivery_1580323-1_210301_201432_d169f13de117664acdaa1543841b7c16.jpg" alt="" className = "gimg"/>
                        </div>
                        <div className="title">
                        <div>
                            Outdoor Pursuits
                        </div>
                               
                        </div>
                    </div><br></br>
                    <div className="ele">
                        <div className="imgcon">
                            <img data-aos="zoom-in" src="https://dxaurk9yhilm4.cloudfront.net/images/7386/img_210122_130752_1_d169f13de117664acdaa1543841b7c16.jpg" alt="" className = "gimg"/>
                        </div>
                        <div>
                          <div className="title">    

                                Golf
                        </div></div>
                    </div><br></br>
                    <div className="ele">
                        <div className="imgcon">
                            <img data-aos="zoom-in"src="https://dxaurk9yhilm4.cloudfront.net/images/7394/preview-30_210301_201612_d169f13de117664acdaa1543841b7c16.jpeg" alt="" class = "gimg"/>
                        </div>
                        <div className="title">
                            Lifestyle                            </div>
                        </div>
                    </div>
                    <div className="grow">
                        <div className="ele">
                            <div className="imgcon">
                                <img data-aos="zoom-in" src="https://dxaurk9yhilm4.cloudfront.net/images/7398/Playa-Grande14_DJI_0965-1-1_210301_201716_d169f13de117664acdaa1543841b7c16.jpg" alt=""
                                className = "gimg"/>
                            </div>
                            <div className="title">
                                Landscapes
                        </div>
                    </div>
                    <div className="ele">
                        <div className="imgcon">
                            <img data-aos="zoom-in" src="https://dxaurk9yhilm4.cloudfront.net/images/7402/golf-club-house_d3867277feb154defec9b24a5714fadb-1_210301_201855_d169f13de117664acdaa1543841b7c16.jpg" alt=""
                            className = "gimg"/>
                        </div>
                        <div className="title">
                            Clubhouses  
                        </div>
                    </div>
                    <div className="ele">
                        <div className="imgcon">
                            <img data-aos="zoom-in" src="https://dxaurk9yhilm4.cloudfront.net/images/7406/Wellness-gallery-1_11014826b3e36b3697374f276a89b517-2_210301_202121_d169f13de117664acdaa1543841b7c16.jpg" alt=""
                            className = "gimg"/>
                        </div>
                    <div className="title">
                        Wellness</div>
                </div>

            </div>
        </div>
        <Footer/>
        </>
        )
    }
    
}
