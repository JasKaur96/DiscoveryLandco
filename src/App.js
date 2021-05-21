import './App.css';
import { Component } from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import{ BrowserRouter as Router,Route,Switch,Link, BrowserRouter}from 'react-router-dom'
import OurWorld from './Pages/OurWorld/OurWorld';
import About from './Pages/About';
import Image from './Pages/OurWorld/Image';
// import Routing from './Routes/Routing'


const Routing = () => {
  return(
    <Router> 
        <Switch>
            {/* <Route exact path="/" component={Dashboard}></Route> */}
            <Route path="/About" component={About}></Route>
            <Route path="/" component={OurWorld}></Route>
            {/* <Route path="/" component={Image}></Route> */}
        
        </Switch>   
    </Router>
  );
}

class App extends Component{
  render(){
    return (
        // <BrowserRouter><Routing/></BrowserRouter>
        <div>
          <Routing/>
          {/* <OurWorld/> */}
        </div>
       
    )
  }

}

export default App;





