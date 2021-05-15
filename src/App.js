import './App.css';
import { Component } from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/footer";

class App extends Component{
  render(){
    console.log("Inside Render()")
    return (
      <>
        <Dashboard/>
        <Footer/>
      </>
    )
  }

}

export default App;