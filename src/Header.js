import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Web">
      <div className="App-header">
          
          {/* <img src={bg} alt="bg" id="bg"/> */}
            <div className="App-header">
            <p className ='date'><span><em>For the women who must not be forgotten</em></span>
            <span id="riqi"><em>12/12/2022</em></span>
            </p>
            <p className="bigtitle">
            <span id="name">THE ABSENT WOMEN: </span>
            <br/>
            <em>the gender data gap <br/>in the PANTHEON OF WIKIPEDIA</em>
            </p>
            
            

            <div className="kongs"></div>

            <div className="dizhu">
              <span>A visual essay about the famous female figures in the database of Wikipedia</span>
            </div>

            <div className="kongs"></div>

            </div>
      </div>

      
      
    </div>
  );
}

export default Header;