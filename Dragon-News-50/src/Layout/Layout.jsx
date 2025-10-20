import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import NavBar from "../Components/NavBar";
import Loading from "../Pages/Loading";

const Layout = () => {
  const { state } = useNavigate();
  // console.log(state);
  return (
    <div>
      {/* Header Section */}
      <header>
        <Header />

        <section>
          <LatestNews />
        </section>

        <nav className="w-11/12 mx-auto py-5">
          <NavBar />
        </nav>
      </header>

      {/* Main Start */}
      <main className="w-11/12 mx-auto my-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Aside */}
        <aside className="md:col-span-3 order-1 md:order-1 sticky md:top-0 h-fit">
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section className="md:col-span-6 order-2 md:order-2">
          {state == "loading" ? <Loading /> : <Outlet />}
        </section>

        {/* Right Aside */}
        <aside className="md:col-span-3 order-3 sticky md:top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Layout;
