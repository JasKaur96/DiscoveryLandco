import { Router , Route, Switch } from "react-router-dom";
import Dashboard from '../Components/Dashboard/Dashboard'
import About from '../Pages/About'
import OurWorld from '../Pages/OurWorld/OurWorld';
import Gallery from '../Pages/Gallery/Gallery';
import Experiences from '../Pages/Experiences/Experiences';
import Press from '../Pages/Press/Press';

function Routing() {
    return(
    <Router> 
        <Switch>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route path="/about" component={About}></Route> 
            <Route path="/ourworld" component={OurWorld}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/experiences" component={Experiences}></Route>
            <Route path="/press" component={Press}></Route>
         </Switch>   
    </Router>
    )
}

export default Routing;
