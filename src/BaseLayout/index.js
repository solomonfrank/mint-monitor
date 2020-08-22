import React from "react";
import "../css/style.css";

const PageLayout = (props) => {
  return (
    <>
      <header>header</header>
      <aside>sidebar</aside>
      <main>{props.children}</main>
    </>
  );
};

export default PageLayout;
