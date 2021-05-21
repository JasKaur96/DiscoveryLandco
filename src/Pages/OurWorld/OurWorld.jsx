import React, { Component } from 'react'
import './OurWorld.css'
import ImagesWorld from './Image';
import Footer from '../../Components/Footer/footer'

export default class OurWorld extends Component {
    
    render(){
        return (
            <div className="main-div">  
                <ImagesWorld/>
                <Footer/>
            </div>
    )
    }
   
}
