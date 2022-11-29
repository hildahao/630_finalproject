
import {Bar} from 'react-chartjs-2';
import React, { Component } from 'react';

import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
    } from 'chart.js';
  
  
  ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
  
    export default class Chart extends Component {
      static propTypes = {
      };
    
      constructor(props) {
        super(props);
        this.state = {};
      }
    
      render() {
        const options = {
          indexAxis: 'y',
        };

        const data = {
        

          labels: ['Politician', 'Companion', 'Writer','Religious Figure' ,'Actor','Singer' ,'Nobleman', 'Social Activist','Philosopher', 'Physician','Physicist', 'Military Personnel','Painter', 'Fashion Designer','Mathematician','Diplomat','Celebrity','Occultist','Extremist','Chemist','Dancer','Astronaut'],
          datasets: [
            {
              axis: 'y',
              label: 'number of people',
              backgroundColor: '#D9CCC3',
              borderColor: '#D9CCC3',
              borderWidth: 2,
              hoverBackgroundColor: '#C0AC9D',
              hoverBorderColor: '#756A64',
              data: [24, 17, 11, 10, 9, 8, 7, 4,3,2,1,1,1,1,1,1,1,1,1,1,1,1],
              fill: false,
            },
          ],
        };
        return (
          <Bar 
          data={data}
          width="600" 
          height="200" 
          margin="0"
          options={options}
          />
        );
      }
    }
