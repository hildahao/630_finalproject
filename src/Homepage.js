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
            <h2> The rise of women in history over years from 3500BC till today</h2>
        </div>

        <div className="D3biao1">
            <ScatterPlot person_data={data}/> 
        </div>

        <div className="jieshi1">
        <p>
        From the chart, we found that in X there are the most women. add some introductions 
        to this and try to explain why there are more females have this occupation. The
        crazy fox jumped over the lazy dog. The crazy fox jumped over the lazy dog The 
        crazy fox jumped over the lazy dog The crazy fox jumped over the lazy dog The crazy
        fox jumped over the lazy dog The crazy fox jumped over the lazy dog. The crazy fox 
        jumped. 
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
        From the chart, we found that in X there are the most women. add some introductions 
        to this and try to explain why there are more females have this occupation. The
        crazy fox jumped over the lazy dog. The crazy fox jumped over the lazy dog The 
        crazy fox jumped over the lazy dog The crazy fox jumped over the lazy dog The crazy
        fox jumped over the lazy dog The crazy fox jumped over the lazy dog. The crazy fox 
        jumped. 
        </p>
      </div>
      
      <div className="kong"></div>

    </div>
    )
}

export default Homepage;