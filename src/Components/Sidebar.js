import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <button className="btn btn-blue">GENERATE INVOICE</button>
      <div className="sidebar-list">
        <div>
          <h5 className="list-title">Main</h5>
          <ul>
            <li>
              <Link className="active">
                <i class="fa fa-tachometer" aria-hidden="true"></i>
                <span className="hide-menu">Overview</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="list-title">Payment</h5>
          <ul>
            <li>
              <Link>
                <i class="fa fa-credit-card" aria-hidden="true"></i>
                <span className="hide-menu">All Paymenent</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa fa-university" aria-hidden="true"></i>
                <span className="hide-menu">Reconciled Paymenent</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa fa-gift" aria-hidden="true"></i>
                <span className="hide-menu">Reconciled Paymenent</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa fa-money" aria-hidden="true"></i>
                <span className="hide-menu">Manual Paymenent</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="list-title">Order</h5>
          <ul>
            <li>
              <Link>
                <i class="fa fa-gift" aria-hidden="true"></i>
                <span className="hide-menu">All Order</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa fa-credit-card" aria-hidden="true"></i>
                <span className="hide-menu">Pending Paymenent</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa fa-book" aria-hidden="true"></i>
                <span className="hide-menu">Reconciled Order</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa fa-user" aria-hidden="true"></i>
                <span className="hide-menu">Merchent Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
