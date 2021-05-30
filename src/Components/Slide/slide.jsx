import {Component} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Slideshow extends Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }

      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    render(){
        let settings = {
            dots: true,
            infinite: true,
            // lazyLoad: true,
            arrows: true,
       
          
            //to show 3 img in a carousel
            slidesToShow: 4,
            slidesToScroll: 5,
            
            autoplay: 8000,
            speed: 9000,
            autoplaySpeed: 8000,
            cssEase: "linear",
            // pauseOnHover: true,
            initialSlide: 1
          };
    
        return(<>
            <div className="buttonsExplore">
                    <button  onClick={this.previous}> 
                    <div className="leftbutton" onClick={this.previous}>
                        <svg  className = "leftarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
                    </div>
                    </button>
                    <span></span>
                    <button onClick={this.next}>
                    <div className="rightbutton" onClick={this.next}>
                        <svg  className = "rightarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
                    </div>
                    </button>
                </div>  
            <Slider ref={c => (this.slider = c)} {...settings}>  
                <div>
                    <img style={{"width":"800px","height":"900px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg" loading="lazy" alt="" />
                    <div className="image_title">
                        <h1 className="image_title">Troubadour</h1>
                        <p className="">Nashville, Tennessee</p>
                        <span className="">Explore</span>
                    </div>
                </div>
                <div>
                    <img style={{"width":"800px","height":"900px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/6492/LM-Coco-Point-Barbuda-0266_397186feb8bd51bb37bc24fc2b9b500f.jpg" loading="lazy"  alt=""></img>
                    <div class="c-slide__content | js-slide__content">
                        <h1 class="c-slide__title">Troubadour</h1>
                        <p class="c-slide__text">Nashville, Tennessee</p>
                        <span class="c-slide__link">Explore</span>
                    </div>
                </div>
                <div>
                <img style={{"width":"800px","height":"900px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg"  alt="" loading="lazy" ></img>
                <div class="c-slide__content | js-slide__content">
                        <h1 class="c-slide__title">Troubadour</h1>
                        <p class="c-slide__text">Nashville, Tennessee</p>
                        <span class="c-slide__link">Explore</span>
                    </div>
                </div>
                <div>
                <img style={{"width":"800px","height":"900px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg"  loading="lazy" alt=""></img>
                    <div class="c-slide__content | js-slide__content">
                        <h1 class="c-slide__title">Troubadour</h1>
                        <p class="c-slide__text">Nashville, Tennessee</p>
                        <span class="c-slide__link">Explore</span>
                    </div>
                </div>
                <div>
                <img style={{"width":"800px","height":"900px"}} src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg"  loading="lazy"  alt=""></img>
                  <div class="c-slide__content | js-slide__content">
                        <h1 class="c-slide__title">Troubadour</h1>
                        <p class="c-slide__text">Nashville, Tennessee</p>
                        <span class="c-slide__link">Explore</span>
                    </div>
                </div>
                {/* <img  alt=""></img> */}
            </Slider>
            </>
        )}
}

export default Slideshow;