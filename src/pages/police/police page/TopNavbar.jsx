import React from 'react'
import police_logo from '/src/assets/image/Tamil_Nadu_Police_Logo.png';
import velora_logo from '/src/assets/image/velora-trans.png'

function TopNavbar() {
  return (
    <div>
      <nav className="top-navbar">

        {/* Left Logo */}
        <div className="nav-left">
          <img src={police_logo} alt="Velora Logo" className="top-logo"/>
        </div>

        {/* Right Profile */}
        <div className="nav-right">

          {/* velora name logo */}
          <img src={velora_logo} alt="Profile" className="profile-img"/>

          <div className="profile-details">
            <h4>Velora</h4>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default TopNavbar

