import './App.css';
import { Component } from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/Header";
import{ BrowserRouter as Router,Route,Switch,Link, BrowserRouter}from 'react-router-dom'
import OurWorld from './Pages/OurWorld/OurWorld';
import About from './Pages/About';
import Image from './Pages/OurWorld/Image';
import Gallery from './Pages/Gallery/Gallery';
import Experiences from './Pages/Experiences/Experiences';
import Press from './Pages/Press/Press';
import Routing from './Routes/Routing';


class App extends Component{
  render(){
    return (
        <div className="App">
          <Routing/>
        </div>
    )
  }

}

export default App;





