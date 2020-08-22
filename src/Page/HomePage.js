import React from "react";
import Transaction from "../Components/TransactionCard";
import Progress from "../Components/Progess";
import Chart from "../Components/Chart";

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
      <div className="transact-history">
        <div className="full-graph">
          <div className="graph-direct">
            <p>Today {new Date().toDateString()}</p>
            <div className="graph-control">
              <button>
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </button>
              <button>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="spark">
            <Chart />
          </div>
        </div>
        <div className="summary">
          <div className="order-summary">
            <p class="payment-type">Orders</p>
            <Progress />
            <p>
              Pending Order:<span className="pending">20</span>
            </p>
            <p>
              Processed Order:<span className="success">20</span>
            </p>
            <p>
              Total Order:<span className="total">20</span>
            </p>
          </div>
          <div className="order-summary">
            <p class="payment-type">Payment</p>
            <Progress />
            <p>
              UnReconciled Order:<span className="pending">20</span>
            </p>
            <p>
              Reconciled Order:<span className="success">20</span>
            </p>
            <p>
              Total Payment:<span className="total">20</span>
            </p>
          </div>
          <div className="payment-summary"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
