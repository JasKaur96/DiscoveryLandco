import {Component} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Slideshow extends Component{
   
    render(){
        let settings = {
            dots: true,
            infinite: true,
            // lazyLoad: true,
            arrows: true,
    
            //to show 3 img in a carousel
            slidesToShow: 4,
            // slidesToScroll: 5,
            
            autoplay: 5000,
            speed: 5000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            // pauseOnHover: true,
            initialSlide: 1
          };
    
        return(
            <Slider {...settings}>            
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg" loading="lazy" alt="" />
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/6492/LM-Coco-Point-Barbuda-0266_397186feb8bd51bb37bc24fc2b9b500f.jpg" loading="lazy"  alt=""></img>
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg"  alt="" loading="lazy" ></img>
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg"  loading="lazy" alt=""></img>
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg"  loading="lazy"  alt=""></img>
                <img  alt=""></img>
            </Slider>
        )}
}

export default Slideshow;