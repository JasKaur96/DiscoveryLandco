import React, { Component } from 'react'
import './OurWorld.css'
import ImagesWorld from './Image';
import Footer from '../../Components/Footer/footer'

import Header from '../../Components/Header/Header';
export default class OurWorld extends Component {
    
    render(){
        return (<>
        
            <div className="main-div">  
            <div className="navbar" >
                <Header/>
            </div>
                <ImagesWorld/>
                <Footer/>
            </div></>
    )
    }
   
}
