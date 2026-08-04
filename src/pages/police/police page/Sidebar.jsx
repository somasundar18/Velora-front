/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoHomeOutline,
  IoAlertCircleOutline,
  IoFolderOpenOutline,
  IoMapOutline,
  IoBarChartOutline,
  IoLogOutOutline,
} from "react-icons/io5";

function Sidebar({ collapse, setCollapse }) {
  const location = useLocation();

  return (
    <div className={collapse ? "sidebar small" : "sidebar"}>
      <div className="SidebarAlign">

        <Link
          to="/dashboard"
          className={`menu ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          <IoHomeOutline /> {!collapse && "Dashboard"}
        </Link>

        <Link
          to="/recentcase"
          className={`menu ${
            location.pathname === "/recentcase" ? "active" : ""
          }`}
        >
          <IoAlertCircleOutline /> {!collapse && "Recent Case"}
        </Link>

        <Link
          to="/pendingcases"
          className={`menu ${
            location.pathname === "/pendingcases" ? "active" : ""
          }`}
        >
          <IoFolderOpenOutline /> {!collapse && "Incident Management"}
        </Link>

        <Link
          to="/Riskzone"
          className={`menu ${
            location.pathname === "/Riskzone" ? "active" : ""
          }`}
        >
          <IoMapOutline /> {!collapse && "Riskzone"}
        </Link>

        <Link
          to="/todayscase"
          className={`menu ${
            location.pathname === "/todayscase" ? "active" : ""
          }`}
        >
          <IoBarChartOutline /> {!collapse && "Analytics"}
        </Link>

        <br /><br /><br /> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <Link
          to="/login"
          className="logout"
        >
          <IoLogOutOutline /> {!collapse && "Logout"}
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;