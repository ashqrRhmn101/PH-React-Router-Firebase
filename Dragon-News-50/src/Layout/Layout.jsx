import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import NavBar from "../Components/NavBar";

const Layout = () => {
  return (
    <div>
      <header >
        <Header />

        <section>
          <LatestNews />
        </section>

        <nav className="w-11/12 mx-auto py-5">
          <NavBar />
        </nav>
      </header>

      {/* Main Start */}
      <main className="w-11/12 mx-auto my-4 *:border grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftAside />
        </aside>

        <section className="col-span-6">
          <Outlet />
        </section>

        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Layout;
