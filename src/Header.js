import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Web">
      <div className="App-header">
          
          {/* <img src={bg} alt="bg" id="bg"/> */}
            <div className="App-header">
            <p className ='date'>12/2022</p>
            <p className="bigtitle">
            Who won their places <br/>in the pantheon of Wikipedia? 
            <br/>And who holds them up to the altar?
            </p>

            <p className="des">
              The crazy fox jumped over the lazy dog. 
              The crazy fox jumped over the lazy dog The crazy<br/>
              fox jumped over the lazy dog The crazy fox jumped 
              over the lazy dog The crazy fox jumped <br/>over the lazy
              dog The crazy fox jumped over the lazy dog
            </p>
            </div>
      </div>

      <div className="subtitlebg">
          <p className="subtitle1">Q1: Who are in the pantheon of Wikipedia? </p>
      </div>
      
    </div>
  );
}

export default Header;