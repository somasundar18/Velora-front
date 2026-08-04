import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "../police style/index.css";

import Registration from "../police page/Registration.jsx";
import Login from "../police page/login.jsx";
import ForgotPassword from "../police page/ForgotPassword.jsx";
import OTP from "../police page/OTP.jsx";

import Dashboard from "../police page/Dashboard.jsx";
import RecentCases from "../police page/Recentcase.jsx";
import TodaysCase from "../police page/TodaysCase.jsx";
import PendingCases from "../police page/PendingCases.jsx";
import Riskzone from "../police page/Riskzone.jsx";


function Policeroute() {
  return (
    <Router basename="/police">

      <Routes>

        {/* Default */}
        <Route path="/" element={<Navigate to="/register" replace />} />


        {/* Authentication */}
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />


        {/* Police Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recentcase" element={<RecentCases />} />
        <Route path="/todayscase" element={<TodaysCase />} />
        <Route path="/pendingcases" element={<PendingCases />} />
        <Route path="/riskzone" element={<Riskzone />} />


        {/* Future Pages */}
        <Route path="/heatmap" element={<Dashboard />} />
        <Route path="/riskprediction" element={<Dashboard />} />
        <Route path="/officers" element={<Dashboard />} />
        <Route path="/patrol" element={<Dashboard />} />


        {/* Wrong URL */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>

    </Router>
  );
}


export default Policeroute;