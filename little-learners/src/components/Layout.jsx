import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="m-auto max-w-[1430px]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
