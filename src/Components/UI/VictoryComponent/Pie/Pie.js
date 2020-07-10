import React from "react";
import { VictoryPie } from "victory";

const PieChart = props => {
  return <VictoryPie
  data= {props.data}
  animate={{
    duration: 1000
  }}
  colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
  style={{
      labels: {
        fontSize: 18, fill: "#27969d"
      },
      parent:{
        width:'100%',
        height: '100%'
      },
      
      }}
  />;
};

export default PieChart;