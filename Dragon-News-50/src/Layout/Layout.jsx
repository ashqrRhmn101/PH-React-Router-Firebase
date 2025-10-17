import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <header></header>
      <main>
        <section></section>
        <section>
          <Outlet />
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default Layout;
