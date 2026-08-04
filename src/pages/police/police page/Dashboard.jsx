/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import velora_logo from "/src/assets/image/velora-trans.png";
import UserLayout from "./UserLayout";
import { useNavigate } from "react-router-dom";

import {
  IoAlertCircleOutline,
  IoFolderOpenOutline,
  IoWarningOutline,
  IoPeopleOutline,
  IoTimeOutline,
  IoCheckmarkCircleOutline,
  IoLocationOutline,
} from "react-icons/io5";

function Dashboard() {
  const navigate = useNavigate();

  const [sos, setSos] = useState([
    {
      id: "SOS101",
      victim: "Ananya",
      location: "Railway Road",
      time: "10:30 PM",
      risk: "High",
      status: "Pending",
    },
  ]);

  const [active, setActive] = useState(12);

  function createSOS() {
    const newSOS = {
      id: "SOS" + Math.floor(Math.random() * 999),
      victim: "Unknown",
      location: "Current Location",
      time: new Date().toLocaleTimeString(),
      risk: "High",
      status: "New",
    };

    setSos([...sos, newSOS]);
    setActive(active + 1);
  }

  return (
    <UserLayout>
      <div className="dashboard">
        {/* Main Dashboard */}

        <div className="main">
          <div className="navbar">
            <div>📅 {new Date().toLocaleString()}</div>
          </div>

          <h1>Police Command Center</h1>

          <p className="sub">Velora Powered Women's Safety Platform</p>

          {/* Cards */}

          <div className="cards">
            <Card
              title="Active SOS"
              value={active}
              icon={<IoAlertCircleOutline />}
            />

            <Card
              title="Unresolved Incidents"
              value="36"
              icon={<IoFolderOpenOutline />}
            />

            <Card
              title="High Risk Areas"
              value="8"
              icon={<IoWarningOutline />}
            />

            <Card
              title="Officers Duty"
              value="42"
              icon={<IoPeopleOutline />}
            />

            <Card
              title="Response Time"
              value="4 min"
              icon={<IoTimeOutline />}
            />

            <Card
              title="Resolved Today"
              value="28"
              icon={<IoCheckmarkCircleOutline />}
            />
          </div>

          <div className="section">
            {/* SOS */}

            <div className="box">
              <h2>Live SOS Alerts</h2>

              {sos.map((x, index) => (
                <div className="sos" key={index}>
                  <h3>{x.id}</h3>

                  <p>Victim : {x.victim}</p>

                  <p>
                    <IoLocationOutline /> {x.location}
                  </p>

                  <p>
                    Risk : <span className="red">{x.risk}</span>
                  </p>

                  <button onClick={() => navigate("/riskzone")}>
                    Location
                  </button>
                </div>
              ))}
            </div>

            {/* Map */}
          </div>

          {/* Incident */}

          <div className="box">
            <h2>Incident Management</h2>

            <table>
              <tr>
                <th>ID</th>
                <th>Victim</th>
                <th>Type</th>
                <th>Status</th>
              </tr>

              <tr>
                <td>INC101</td>

                <td>Priya</td>

                <td>Harassment</td>

                <td>Pending</td>
              </tr>

              <tr>
                <td>INC102</td>

                <td>Divya</td>

                <td>Stalking</td>

                <td>Resolved</td>
              </tr>
            </table>
          </div>

          <div className="section">
            <div className="box">
              <h2>AI Risk Prediction</h2>

              <div className="prediction">
                Railway Road
                <b>85%</b>

                <p>Increase Patrol</p>
              </div>

              <div className="prediction">
                Bus Stand
                <b>60%</b>

                <p>Monitor Area</p>
              </div>
            </div>

            <div className="box">
              <h2>Notifications</h2>

              <p>🚨 SOS Received</p>

              <p>🤖 AI Recommendation Updated</p>

              <p>👮 Officer Assigned</p>
            </div>
          </div>

          <div className="timeline box">
            <h2>Activity Timeline</h2>

            <p>10:20 - SOS Received</p>

            <p>10:22 - Officer Assigned</p>

            <p>10:30 - Incident Updated</p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="card">
      <h2>{icon}</h2>

      <h3>{title}</h3>

      <h1>{value}</h1>

      <p>Updated now</p>
    </div>
  );
}

export default Dashboard;