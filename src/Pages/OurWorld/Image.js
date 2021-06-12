import React, { Component } from 'react';
import './OurWorld.css';

import Header from '../../Components/Header/Header';
import Aos from 'aos';
import "aos/dist/aos.css"
const Images = [
    {
        id: 1,
        redirect: "https://discoverylandco.com/communities/north-shore-preserve",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/8812/DJI_0265_RET_2_210405_212842_d169f13de117664acdaa1543841b7c16.jpg",
        title:"North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
    {
        id: 2,
        redirect: "https://discoverylandco.com/communities/james-island",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/6965/DJI_0374-copy-2_d169f13de117664acdaa1543841b7c16.jpg",
        title: "James Island",
        description: "Southern Gulf Island, British Columbia"
    },
    {
        id: 3,
        redirect:"https://discoverylandco.com/communities/costa-terra-golf-and-ocean-club",
        image:"https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_d169f13de117664acdaa1543841b7c16.jpg",
        title: "Costaterra",
        description: "Comporta, Portugal"
    },
    {
        id: 4,
        redirect: "https://discoverylandco.com/communities/barbuda-ocean-club",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/352/driftwood3-carousel_d169f13de117664acdaa1543841b7c16.jpg",
        title: "North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
    {
        id: 6,
        redirect: "https://dxaurk9yhilm4.cloudfront.net/images/702/Troubadour_carousel6_d169f13de117664acdaa1543841b7c16.jpg",  image: "https://dxaurk9yhilm4.cloudfront.net/images/8812/DJI_0265_RET_2_210405_212842_d169f13de117664acdaa1543841b7c16.jpg",
        image:"https://dxaurk9yhilm4.cloudfront.net/images/350/playa4-carousel_bab59bdddd9759d14006fbf9d95d20c9.jpg",
        title:"North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
    {
        id: 8,
        redirect: "https://discoverylandco.com/communities/barbuda-ocean-club",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/692/Summit7_d169f13de117664acdaa1543841b7c16.jpg",
        title: "North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
    {
        id: 9,
        redirect: "https://discoverylandco.com/communities/barbuda-ocean-club",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/702/Troubadour_carousel6_d169f13de117664acdaa1543841b7c16.jpg",
        title: "Troubadour",
        description: "Nashville, Tennessee"
    },
    {
        id: 10,
        redirect: "https://discoverylandco.com/communities/north-shore-preserve",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/354/dunedeck-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          title:"North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
    {
        id: 12,
        redirect: "https://discoverylandco.com/communities/james-island",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/6965/DJI_0374-copy-2_d169f13de117664acdaa1543841b7c16.jpg",
        title: "North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
    {
        id: 13,
        redirect: "https://discoverylandco.com/communities/barbuda-ocean-club",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/6473/LM-Coco-Point-Barbuda-0920_d169f13de117664acdaa1543841b7c16.jpg",
        title: "North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
    {
        id: 14,
        redirect: "https://discoverylandco.com/communities/barbuda-ocean-club",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/6473/LM-Coco-Point-Barbuda-0920_d169f13de117664acdaa1543841b7c16.jpg",
        title: "North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
    {
        id: 7,
        redirect: "https://discoverylandco.com/communities/james-island",
        image: "https://dxaurk9yhilm4.cloudfront.net/images/6965/DJI_0374-copy-2_d169f13de117664acdaa1543841b7c16.jpg",
        title: "North Shore Preserve",
        description: "Kaua'i, Hawaii"
    },
]

export default class Gallery  extends Component{
    constructor(props){
        super(props);
        this.state = {
            images: Images,
            selectedImage: Images[0],
        };
    }

    render(){
        const { images, selectedImage } = this.state;

        return(<>
          {/* <div className="navbar" id="header-navbar">
                <Header/>
            </div> */}
            <div className= "main-div " >
            <br></br><br></br><br></br><br></br>
                <article className="u-bg-black">
                    <div  className="worlds">     
                    {images.map((image, index) => (                
                        <a data-transition="worlds" class="js-world">
                            <figure class="world-thumb">
                                <div key={index}>
                                    <img data-aos="zoom-in-up" className="img-world" src={image.image} />
                                    <h1 className="title">{image.title}</h1>
                                    <p className="world">{image.description}</p>
                                </div>
                            </figure>
                        </a>
                    ))} 
                    </div>                  
                </article>
            </div>
            </>
        )
    }
}