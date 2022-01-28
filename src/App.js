
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderM from './components/header/header';
import SideNavM from './components/sideNav/sideNav';
import EngInst from "./pages/enginst/enginst";
import Home from "./pages/home/home";
import WorkArounds from "./pages/workArounds/workArounds";
import './App.scss';

class App extends Component {
  
  constructor()
  {
    super();
    this.state = {
      route: "home" 
    }
  }
  
  
  
  
  
  
  
  render()  {
    return (
    <div className='app'>
      <HeaderM/>
      <SideNavM/>
      <div className="component_render">
      
        <Routes>
          {this.state.route === "home"}
          ?<Route index path="/home" element={<Home/>} ></Route>
          :<Route path="fallasComunes/glosarioSRCs" element={ <EngInst/> }></Route>
            <Route path="fallasComunes/workArounds" element= { <WorkArounds/>}></Route>
            <Route path="fallasComunes/AportesIngenieria"></Route>
            <Route path="sistemasGolden/Denali"></Route>
        </Routes>
      
      </div>
    </div>      
    )
  }
}

export default App;
