import React from 'react'
import './Partone.css';
import Sketch from './Chartp1.js';

const Partone = () => {
  return (
    <div className ="daholder">

      <div className="jieshi1">
        <p>
        Separating paragraphs with blank lines is easiest
        for readers to scan, but they can also be separated
        by indenting their first lines. This is often used
        to take up less space, such as to save paper in print. 
        </p>
      </div>

      <div className="biaoming">
          <h2>The top 200 memorable in Wikipedia in 2022</h2>
      </div>
      
      <div id="DOne">
          <div></div>
      </div>
      
      <div className="jieshi">
        <p>
        From the chart, we found that in X there are the most women. add some introductions 
        to this and try to explain why there are more females have this occupation. The
        crazy fox jumped over the lazy dog.
        </p>
      </div>

      <div id="chartOne">
        <Sketch />
        <div className="legend">
          <span id="female"><strong>Female: 2</strong></span>
          <span id="male"><strong>Male: 198</strong></span>
        </div>
      </div>

      <div className="jieshi">
        <p>
        Separating paragraphs with blank lines is easiest
        for readers to scan, but they can also be separated
        by indenting their first lines. This is often used
        to take up less space, such as to save paper in print.
        </p>
      </div>

      <div className="con">
          <p>
              <span className="Up">1</span>
              <span className="con1">History<br/></span>
              <span className="con2">What historical reasons impacted women?<br/></span>
              <span className="con3">How women distribute in different interval? and Why there are differences? </span>
          </p>
          <p>
              <span className="Up2">2</span>
              <span className="con1-2">Locations<br/></span>
              <span className="con2-2">How societies impact women?<br/></span>
              <span className="con3-2">What is their social culture like? and What were policies like? Any religious reasons?</span>
          </p>
          <div className="jieshi">
             <p>
                From the chart, we found that in X there are the most women. add some introductions 
                to this and try.
            </p>
          </div>
          <p>
              <span className="Up2">3</span>
              <span className="con1-2">Occupations<br/></span>
              <span className="con2-2">What are/were their occupations?<br/></span>
              <span className="con3-2">From the chart, we found that in X there are the most women. add some introductions</span>
          </p>
      </div>


      <div className="jieshi">
        <p>
        From the chart, we found that in X there are the most women. add some introductions 
        to this and try to explain why.
        </p>
      </div>


    </div>
  )
}

export default Partone
