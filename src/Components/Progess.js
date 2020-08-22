import React from "react";
import { Line } from "rc-progress";

const Progress = () => (
  <>
    <Line
      percent="90"
      strokeWidth="1"
      strokeColor="green"
      trailColor="yellow"
    />
  </>
);

export default Progress;
