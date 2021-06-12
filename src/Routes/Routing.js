import { BrowserRouter , Route, Switch } from "react-router-dom";
import Dashboard from '../Components/Dashboard/Dashboard'
import About from '../Pages/About'
import OurWorld from '../Pages/OurWorld/OurWorld';
import Gallery from '../Pages/Gallery/Gallery';
import Experiences from '../Pages/Experiences/Experiences';
import Press from '../Pages/Press/Press';

import { Component } from "react";
import Bar from "../Components/Menubar/SideBar";

class Routing extends Component{
    render(){
    return(
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/about" component={About}></Route> 
            <Route path="/ourworld" component={OurWorld}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/experiences" component={Experiences}></Route>
            <Route path="/press" component={Press}></Route>
            <Route  path="/bar" component={Bar} ></Route>
         </Switch>   
    </BrowserRouter>
    )
    }
}

export default Routing;
