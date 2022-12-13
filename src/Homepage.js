import React, { useEffect, useState } from "react";
import BubbleChart from "./BubbleChart";
import ScatterPlot from "./ScatterPlot";
import './Homepage.css';



const Homepage = () =>{

    //state of this component
    const [data,setData] = useState([]);

    //component did mount
    useEffect(()=>{
    (async() =>{
    const data =  await getpersondata();
    setData(data);
    })()
        
    },[]);

    //get data from api
    async function getpersondata() 
    {
    const api_url = 'https://api.pantheon.world/person';
    const response = await fetch(api_url);
    return response.json();
    }

    // console.log(data);


    return(
        <div id="liangbiao">
      {/* <h1> The distribution of influencial females based on geography</h1> */}
      
        <div className="subtitlebg">
          <p className="subtitle1">Q2: What historical reasons impacted women? </p>
        </div>

        <div className="biaoming">
            <h2> The rise of females in history over years from 3500BC till today</h2>
        </div>

        <div className="D3biao1">
            <ScatterPlot person_data={data}/> 
        </div>

        <div className="jieshi1">
        <p>
        According to the chart, we find a gradual increase in female celebrities 
        after 1800 AD. Combined with <a href="https://cn.weforum.org/agenda/2021/06/xing-bie-cha-yi-de-5000-nian-li-shi/" target="blank">historical data</a>, I believe that one reason 
        for this change may be the <strong>increase in educational opportunities.</strong> Before 
        access to education, the rise of women either because they came from 
        influential families or married to influential families. But around 1800, 
        thanks to the efforts of feminists, universities worldwide began to open 
        their doors to women. And these educational opportunities led to more 
        women writing, entering the sciences, becoming political figures, etc. 
        <br/><br/>
        Although educational opportunities are essential, according to the data released 
        by the <a href="https://www.unesco.org/zh/gender-equality/education" target="blank">UN</a>, as of 2022, women still account for nearly two-thirds of the total adult 
        illiterate population. There is still a long way to go to achieve universal access to education for women
        </p>
        </div>

        <div className="kong"></div>
        
        <div className="subtitlebg">
          <p className="subtitle1">Q3: How do societies affect women? </p>
        </div>
     
      <div className="biaoming">
        <h2> The distribution of influencial females based on geography</h2>
      </div>

      <div className="D3biao2">
            <BubbleChart person_data={data}/>
      </div>

      <div className="jieshi1">
        <p>
        The chart shows that the highest number of female celebrities appear in 
        European countries and the United States. This may be related to the feminist 
        ideology developing in these regions. There are several other social factors 
        as well. For example, there are several queens in the British list, which may 
        be because the Catholic monogamy system allows women to be heirs to the throne. 
        In the United States, actors and singers dominate the list because the country's 
        thriving entertainment industry brings them to the world's attention.
        <br/><br/>
        There are also Asian and African countries on this list, such as Turkey and Egypt. 
        The female celebrities in these 2 countries are mainly <a href="https://pantheon.world/explore/rankings?show=people&years=-3501,2022&place=egy&gender=F" target="blank"> religious figures</a>  and <a href="https://pantheon.world/explore/rankings?show=people&years=-3501,2022&place=tur&gender=F" target="blank">politicians</a>. 
        However, many of these celebrities appeared in the BC era. This may be due to historical 
        reasons. In ancient Egypt, for example, women had a relatively high political status, 
        and the queen could run the country together with the king. But this status was destroyed 
        in the subsequent wars of aggression.
        <br/><br/>
        <strong>It is worth stating that we are quoting data from the English Wikipedia, which may have led to a relatively large proportion of European and American countries. </strong>
        And another important point is the reader's preferences and interests. We will elaborate on this in the following part.
      
        </p>
      </div>
      
      <div className="kong"></div>

    </div>
    )
}

export default Homepage;