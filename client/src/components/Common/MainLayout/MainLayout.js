import { Outlet } from "react-router";
import NavBar from "../NavBar/Navbar";

import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;
