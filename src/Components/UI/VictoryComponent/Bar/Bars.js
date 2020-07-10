import React from "react";
import { VictoryBar } from "victory";
import { VictoryChart } from "victory";
import {VictoryAxis} from 'victory'

const BarChart = props => {
  
    return  <VictoryChart
                domainPadding={{ x: 15 }}
                domain={{x: [0, 6], y:[0,10]}}
                scale={{x: "linear", y: "linear"}}
                style={{    
                    parent:{
                        width:'100%',
                        height: '100%',
                        stroke: 'red',
                        color:'white'
                    },

                }}
            >
                <VictoryBar
                data={props.data}
                labels={({ datum }) => `${Math.round(datum.y) }`}
                animate={{
                    duration: 1000
                  }}
                style={{
                    data: { fill: "#c43a31" },
                    labels: {
                    fontSize: 18, fill: "#27969d"
                    },
                    parent:{
                    width:'100%',
                    height: '100%'
                    },
                }}
            />
             <VictoryAxis
            style={{axis:{stroke:'red'}, tickLabels:{stroke:'red', fontSize:'20px'}}} />
            <VictoryAxis
            dependentAxis
            style={{axis:{stroke:'red'}, tickLabels:{stroke:'none', fontSize:'20px', opacity:'0'}}} />
                
         </VictoryChart>
   

}

export default BarChart;