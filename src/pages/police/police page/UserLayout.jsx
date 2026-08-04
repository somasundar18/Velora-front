import React, { useState } from "react";
import Navbar from "./TopNavbar.jsx";
import Sidebar from "./Sidebar.jsx";

function UserLayout({ children }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="user-layout">
      <Navbar />
      <div className="layout-body">
        <Sidebar collapse={collapse} setCollapse={setCollapse} />
        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default UserLayout;