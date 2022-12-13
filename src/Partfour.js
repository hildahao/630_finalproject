import React from 'react';
import './Partfour.css';
import Bar from './Bar';

function Disi() {
  return(
    <div className="holder">
       <div className="subtitlebg">
          <p className="subtitle1">Q4: What are/were their occupations? </p>
      </div>

      <div className="biaoming">
          <h2>Occupations of females in Top 1000</h2>
      </div>

      <div id="chartFour">
      <Bar />
      </div>

      <div className="zkong"></div>

      <div className="jieshi">
        <p>
        This graph shows the occupational distribution of women. As can be seen from the 
        table, the top five occupations are: 
          Politician,
          Companion,
          Writer,
          Religious figure,
          and Actor.
        <br/><br/>
        Attention to a profession does not determine whether the profession is good or bad. However, <strong>it does reflect the inclinations and preferences of those who read it</strong>. In this chart, female politicians occupy the first place. In fact, the attention of politicians is not related to gender. Politicians are also in first place in a similar ranking of male celebrities. This may be because politicians have wide popularity, while female politicians, being rarer, may get more coverage and attention. One thing to acknowledge, however, is that most people may not follow politicians out of interest in politics but perhaps out of interest in celebrity gossip. This may be more evident with female politicians (e.g., people may be more interested in female politicians' marital and private lives).
         
        </p>
      </div>

    </div>
  );
  
  

}

export default Disi;