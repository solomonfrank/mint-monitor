import React from "react";
import Chart from "./Chart";

const Transaction = ({ transaction }) => {
  return (
    <div className="transact-card">
      <div className="card-cont">
        <p>{transaction.title}</p>
        <p>{transaction.amount}</p>
      </div>
      <div className="card-graph">
        <Chart height={30} width={50} />
      </div>
    </div>
  );
};

export default Transaction;
