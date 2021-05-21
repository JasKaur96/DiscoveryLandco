import { Router , Route, Switch } from "react-router-dom";
import Dashboard from '../Components/Dashboard/Dashboard'
import About from '../Pages/About'


function Routing() {
    return(
    <Router> 
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/about" component={About}></Route>
        </Switch>   
    </Router>
    )
}

export default Routing;

// export default class Routing extends Component{
//     render(){
//         return(
//             <Router>
//                 {/* <div> */}
//                     <Switch>
//                         <Route exact path="/" component={Dashboard}></Route>
//                         <Route path="/about" component={About}></Route>
//                     </Switch>
//                 {/* </div> */}
//             </Router>
//         )
//     }
// }