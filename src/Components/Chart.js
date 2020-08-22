import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const sparklineData = [
  936,
  968,
  1025,
  999,
  998,
  1014,
  999,
  968,
  1025,
  999,
  1017,
  1010,
  1010,
  1007,
];

const Chart = (props) => (
  <Sparklines data={sparklineData} width={props.width} height={props.height}>
    <SparklinesLine style={{ stroke: "none" }} color="blue" />
  </Sparklines>
);

export default Chart;
