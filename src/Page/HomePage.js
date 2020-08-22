import React from "react";
import Transaction from "../Components/TransactionCard";
import Progress from "../Components/Progess";
import Chart from "../Components/Chart";
import DataTable from "../Components/Datable";

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
      <div className="transact-pay">
        <h3>Payment</h3>
      </div>
      <div className="transact-table">
        <div className="table-meta">
          <div className="table-meta-text">
            {" "}
            <p className="page-detail">showing 1 to 10 of 400 item</p>
          </div>
          <div className="table-meta-search">
            <div className="search-wrap">
              <div className="search-icon">
                <i class="fa fa-search"></i>
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="search"
              />
            </div>
          </div>
          <div className="table-meta-sort">
            {" "}
            <div className="sort-wrap">
              <p className="page-detail">shown</p>
              <select className="sort-input">
                <option>All</option>
                <option>Reconciled</option>
                <option>UnReconciled</option>
                <option>Payment</option>
              </select>
            </div>
          </div>
        </div>

        <DataTable />
        <div>
          <p className="page-detail">showing 1 to 10 of 400 item</p>
          <div className="btn-page">
            <button className="btn-next">Previous</button>
            <button className="btn-next active">1</button>
            <button className="btn-next">2</button>
            <button className="btn-next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
