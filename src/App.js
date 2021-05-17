import './App.css';
import { Component } from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/footer";

import Header from "./Components/Header/header";
import{
  BrowserRouter as Router,Route,Link
}from 'react-router-dom'
class App extends Component{
  render(){
    console.log("Inside Render()")
    return (
      <Router>
        <Dashboard/>
        {/* <Header/> */}
        <div>
          <br></br>
        </div>
        {/* <div><Footer/></div> */}
      </Router>
    )
  }

}

export default App;