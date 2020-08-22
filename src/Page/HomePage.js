import React from "react";
import Transaction from "../Components/TransactionCard";

const HomePage = () => {
  const transactionSummary = [
    {
      title: "Daily Transaction Volumn",
      amount: 2457,
    },
    {
      title: "Daily Transaction Volumn",
      amount: 2457590,
    },
    {
      title: "Daily Transaction Volumn",
      amount: 2457000,
    },
    {
      title: "Daily Transaction Volumn",
      amount: 245700,
    },
  ];
  return (
    <div className="container">
      <div className="card-wrap">
        {transactionSummary.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
