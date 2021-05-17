import {Component} from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// const breakPoints = [
//     {width:1, itemsToShow: 1},
//     {width:550, itemsToShow: 2},
//     {width:768, itemsToShow: 3},
//     {width:1200, itemsToShow: 4},
// ]
class Slideshow extends Component{
    constructor(){
        super()
    }

    render(){
        return(
        <div>
            <Carousel class="item" >
                <Carousel.Item className="image">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg"></img>
                </Carousel.Item>
                <Carousel.Item className="image">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg"></img>
                </Carousel.Item>
                <Carousel.Item className="image">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg"></img>
                </Carousel.Item>
                <Carousel.Item className="image">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg"></img>
                </Carousel.Item>
                <Carousel.Item className="image">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg"></img>
                </Carousel.Item>
                <Carousel.Item className="image">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg"></img>
                </Carousel.Item>
            </Carousel>
        </div>
        )}
}

export default Slideshow;