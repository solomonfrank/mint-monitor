import React from "react";
import Header from "../Components/Header";
import "../css/style.css";

const PageLayout = (props) => {
  return (
    <>
      <Header />
      <aside>sidebar</aside>
      <main>{props.children}</main>
    </>
  );
};

export default PageLayout;
