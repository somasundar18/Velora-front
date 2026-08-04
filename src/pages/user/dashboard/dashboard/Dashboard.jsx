import React from 'react'

import UserLayout from "../../../../layouts/UserLayout";

import Header from "../header/Header";
import SafetyScore from "../safetyscore/SafetyScore";
import SOSCard from "../soscard/SOSCard";
import NearbySafeZones from "../nearbysafezones/NearbySafeZones";
import EmergencyContacts from "../emergencycontacts/EmergencyContacts";
import RecentAlerts from "../recentalerts/RecentAlerts";
function Dashboard() {
  return (
     <UserLayout>
      <div className="dashboard">
        <Header />
        <div className="dashboard-row">
          <SOSCard />
          <SafetyScore />
        </div>
        <div className="dashboard-row">
          <NearbySafeZones />
          <EmergencyContacts />
        </div>
        <RecentAlerts />
      </div>
    </UserLayout>
  );
}
export default Dashboard