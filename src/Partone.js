import React from 'react'
import './Partone.css';
import Sketch from './Chartp1.js';

const Partone = () => {
  return (
    <div className ="daholder">
      <div className="subtitlebg">
          <p className="subtitle1">Q1: Who are in the pantheon of Wikipedia? </p>
      </div>
      
      <div className="jieshi1">
        <p>
        <a href="https://pantheon.world/" target="_blank">Yu et al. </a>designed a celebrity ranking using Wikipedia's pageviews. 
        To understand the percentage of women in this list, we used their <a href="https://pantheon.world/data/api" target="_blank">API</a>  and showed the top 200 people:
        </p>
      </div>

      {/* <div className="biaoming">
          <h2>The top 200 people of Wikipedia's pageview ranking (2022)</h2>
      </div>
      
      <div id="DOne">
          <div></div>
      </div> */}
      
      <div className="jieshi">
        <p>
        From the chart, we can find that the majority of the individuals in this
         ranking are male, and there are only<strong> 2 </strong>females there: 
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
        Is this a coincidence? To test this assumption, 
        we grabbed data from the top 1000 and top 10,000. 
        Eventually, we found a similar result: <strong>Female characters 
        are much less represented in this list than male characters.</strong>
        <br/><br/>
        Why did this happen? What causes the absence of women?<br/><br/>
        To find answers to these questions, we need to use the data we can access. This means we need first to answer "Why women are on the list", and then we may find answers for "Why women are not on the list". 
        <br/><br/>
        People cannot exist independently of the times and society, and what one does must be influenced by the environment in which one lives. So, for the women on the list, we assumed that there are 2 factors that influenced their appearance: 
        </p>
      </div>

      <div className="con">
          <p>
              <span className="Up">1</span>
              <span className="con1">History<br/></span>
              <span className="con2">What historical reasons impacted women?<br/></span>
              <span className="con3">How do/did women distribute in the different intervals? And why there are differences?</span>
          </p>
          <p>
              <span className="Up2">2</span>
              <span className="con1-2">Locations<br/></span>
              <span className="con2-2">How do/did societies impact women?<br/></span>
              <span className="con3-2">What is/was the culture of their society? And what are/were the policies like? Are/Were there any religious reasons?</span>
          </p>
          <div className="jieshi">
             <p>
             Also, we wanted to research if occupations have any impact:
            </p>
          </div>
          <p>
              <span className="Up2">3</span>
              <span className="con1-2">Occupations<br/></span>
              <span className="con2-2">What are/were these females' occupations?<br/></span>
              <span className="con3-2">What are/were the occupations of most of them? What can we find out from the distribution of occupations?</span>
          </p>
      </div>


      <div className="jieshi1">
        <p>
        For the whole list, there are 2,4050 females on it. This data is too large to be displayed. Thus, we selected the top 1000 celebrities and analyzed females in this range.  
        </p>
      </div>


    </div>
  )
}

export default Partone
