import React from 'react';
import {VictoryAxis} from 'victory';
import {VictoryChart} from 'victory';
import {VictoryBar} from 'victory'

const Axis = props => {
    return (  
           <VictoryChart
           animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
            style={{    
                parent:{
                    width:'40%',
                    height: '40%',
                    stroke: 'red',
                    color:'white'
                },
            }}
            >
            <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            data={props.data}
            animate={{
                duration: 1000
              }}
                domain={{x: [0, 6], y: [0, 10]}}
                data={props.data}
            />
            <VictoryAxis
            style={{axis:{stroke:'red'}, tickLabels:{stroke:'red'}}} />
            <VictoryAxis
            dependentAxis
            style={{axis:{stroke:'red'}}} />
            </VictoryChart>
    )
}
export default Axis;