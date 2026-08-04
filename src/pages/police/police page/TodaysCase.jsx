import React from "react";
import UserLayout from "./UserLayout";

import {
  IoAlertCircleOutline,
  IoWarningOutline,
  IoPeopleOutline,
  IoTimeOutline,
  IoLocationOutline,
  IoSparklesOutline,
} from "react-icons/io5";

function TodaysCase() {
  const cases = [
    {
      id: "CASE101",
      victim: "Ananya",
      type: "Harassment",
      location: "Railway Road",
      severity: "High",
      officer: "Inspector Arjun",
      status: "Investigating",
      time: "10:30 PM",
    },

    {
      id: "CASE102",
      victim: "Priya",
      type: "Stalking",
      location: "College Road",
      severity: "Medium",
      officer: "Officer Kumar",
      status: "Pending",
      time: "08:45 PM",
    },

    {
      id: "CASE103",
      victim: "Divya",
      type: "Chain Snatching",
      location: "Bus Stand",
      severity: "Low",
      officer: "Officer Ravi",
      status: "Resolved",
      time: "06:20 PM",
    },
  ];

  return (
    <UserLayout>
      <div className="casePage">
        {/* TOP */}

        <div className="caseHeader">
          <div>
            <h1>Today's Cases</h1>

            <p>Police Incident Monitoring System</p>
          </div>
        </div>

        {/* STAT CARDS */}

        <div className="caseCards">
          <div className="caseCard">
            <h3>Total Cases</h3>
            <h1>24</h1>

            <p>Today Reports</p>
          </div>

          <div className="caseCard danger">
            <h3>High Risk</h3>

            <h1>8</h1>

            <p>Need Action</p>
          </div>

          <div className="caseCard warning">
            <h3>Pending</h3>

            <h1>10</h1>

            <p>Under Investigation</p>
          </div>

          <div className="caseCard success">
            <h3>Resolved</h3>

            <h1>16</h1>

            <p>Completed</p>
          </div>
        </div>

        {/* TODAY SUMMARY */}

        <div className="summaryBox">
          <h2>Today's Case Summary</h2>

          <div className="summary">
            <p>
              <IoAlertCircleOutline /> Emergency Reports : <b>12</b>
            </p>

            <p>
              <IoWarningOutline /> High Risk Areas : <b>5</b>
            </p>

            <p>
              <IoPeopleOutline /> Officers Assigned : <b>20</b>
            </p>

            <p>
              <IoTimeOutline /> Avg Response : <b>4 min</b>
            </p>
          </div>
        </div>

        {/* TABLE */}

        <div className="tableBox">
          <h2>Recent Cases</h2>

          <table>
            <thead>
              <tr>
                <th>Case ID</th>

                <th>Victim</th>

                <th>Type</th>

                <th>Location</th>

                <th>Severity</th>

                <th>Officer</th>

                <th>Status</th>

                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              {cases.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>

                  <td>{item.victim}</td>

                  <td>{item.type}</td>

                  <td>
                    <IoLocationOutline /> {item.location}
                  </td>

                  <td>
                    <span className={item.severity}>{item.severity}</span>
                  </td>

                  <td>{item.officer}</td>

                  <td>{item.status}</td>

                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI INSIGHT */}

        <div className="aiBox">
          <h2>
            <IoSparklesOutline /> AI Safety Insight
          </h2>

          <p>
            Today's analysis shows increased activity in
            <b> high-risk zones</b>
          </p>
        </div>

        <div className="activity">
          <h2>Live Activity</h2>

          <p>10:20 PM - SOS Alert Received</p>

          <p>10:22 PM - Officer Assigned</p>

          <p>10:35 PM - Investigation Started</p>
        </div>
      </div>
    </UserLayout>
  );
}

export default TodaysCase;