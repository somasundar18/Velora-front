import Navbar from "../common/Navbar/Navbar";
import Sidebar from "../common/Sidebar/Sidebar";
import Back from "../common/BackButton/BackButton";

function UserLayout({ children }) {
  return (
    <div className="user-layout">
      <Navbar />
      <div className="layout-body">
        <Sidebar />
          <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default UserLayout;