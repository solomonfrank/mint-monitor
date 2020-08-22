import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "../css/style.css";

const PageLayout = (props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{props.children}</main>
    </>
  );
};

export default PageLayout;
