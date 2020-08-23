import React from "react";
import { useTable } from "react-table";
import Button from "./Button";
import Avatar from "./Avatar";

export default function DataTable() {
  const colorStatus = {
    unReconciled: "gray",
    success: "green",
    Reconciled: "green",
    Pending: "orange",
    total: "blue",
  };
  const data = React.useMemo(
    () => [
      {
        col1: "Apple Mac",
        col2: "$8900",
        col3: "1233435465",
        col4: "12.00",
        col5: "Reconciled",
      },
      {
        col1: "Apple Mac",
        col2: "$8900",
        col3: "1233435465",
        col4: "12.00",
        col5: "Pending",
      },
      {
        col1: "Apple Mac",
        col2: "$8900",
        col3: "1233435465",
        col4: "12.00",
        col5: "UnReconciled",
      },
    ],
    []
  );

  const cellValue = (cell) => {
    if (cell.column.id == "col5") {
      const colorName = colorStatus[cell.value];

      return (
        <>
          <li style={{ display: "flex" }}>
            <div className="trans-status">
              <Button style={{ color: colorName }}>
                <i class="fa fa-circle" aria-hidden="true"></i>
                {cell.value}
              </Button>
            </div>
            <div>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </li>
        </>
      );
    } else if (cell.column.id == "col1") {
      return (
        <>
          <li className="item-type">
            <div className="item-type-avatar">
              {" "}
              <Avatar>VW</Avatar>
            </div>
            <div className="item-type-text">
              <span>{cell.value}</span>
            </div>
          </li>
        </>
      );
    } else {
      return cell.value;
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Item Type",
        accessor: "col1",
      },
      {
        Header: "Price",
        accessor: "col2",
      },
      {
        Header: "Transaction No",
        accessor: "col3",
      },
      {
        Header: "Time",
        accessor: "col4",
      },
      {
        Header: "Status",
        accessor: "col5",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="table-container">
      <table
        className=""
        {...getTableProps()}
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              style={{ borderBottom: "none" }}
            >
              {headerGroup.headers.map((column) => {
                return (
                  <th
                    {...column.getHeaderProps()}
                    className="tbl-td"
                    style={{
                      background: "#F0F1F5",
                      color: "#bdbdbd",
                      fontWeight: "bold",
                      textAlign: "left",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        borderBottom: "1px solid #E5E5E5",
                        background: "white",
                      }}
                    >
                      {cellValue(cell)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
