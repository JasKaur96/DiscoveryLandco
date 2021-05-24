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
// import Routing from './Routes/Routing'


const Routing = () => {
  return(
    <Router> 
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/ourworld" component={OurWorld}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/experience" component={Experiences}></Route>
            <Route path="/press" component={Press}></Route>
        
         </Switch>   
     </Router>
   );
}

class App extends Component{
  render(){
    return (
        <div>
          <Routing/>
        </div>
    )
  }

}

export default App;





