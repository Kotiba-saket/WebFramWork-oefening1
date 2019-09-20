import React, {useState} from 'react';
import logo from './logo.svg';
import SwatchesPicker from './ColorPicker'
import Logo from './Logo'
import './App.css';

function App() {
  let [Color ,set_Color] = useState("blue");

  const ChangeColor = (Color_Object) => {
    set_Color(Color_Object.hex);
    //console.log(Color_Object);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo}  color = {Color} className= '.App-logo' /> */}
       <Logo color = {Color}/>
      
        <SwatchesPicker color = {ChangeColor}/>
        
      </header>
    </div>
  );
}

export default App;
