import React from "react";
import UserLayout from "./UserLayout";

function RecentCases(){

const cases=[


{
id:"CASE101",
victim:"Ananya",
type:"Harassment",
location:"Railway Road",
severity:"High",
officer:"Inspector Arjun",
status:"Investigating",
time:"10:30 PM"
},



{
id:"CASE102",
victim:"Priya",
type:"Stalking",
location:"Bus Stand",
severity:"Medium",
officer:"Officer Kumar",
status:"Pending",
time:"08:45 PM"
},



{
id:"CASE103",
victim:"Divya",
type:"Suspicious Activity",
location:"College Road",
severity:"Low",
officer:"Officer Ravi",
status:"Resolved",
time:"06:20 PM"
}


];

return(
<UserLayout>
<div className="casePage">
<div className="top">
<div>
<h1>Recent Case</h1>
<p>AI Women's Safety Incident Management</p>
</div>
</div>

<div className="caseCards">

<div className="caseCard">

<h3>Total Cases</h3>
<h1>121</h1>

<p>This Month</p>

</div>

<div className="caseCard redCard">
<h3>High Risk</h3>

<h1>18</h1>

<p>Need Attention</p>
</div>

<div className="caseCard">
<h3>Resolved</h3>

<h1>96</h1>

<p>Completed Cases</p>

</div>
<div className="caseCard">

<h3>Active Investigation</h3>

<h1>10</h1>

<p>Ongoing</p>

</div>

</div>

<div className="tableBox">


<h2>Case Records</h2>
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

{

cases
.map((item,index)=>(

<tr key={index}>


<td>
{item.id}
</td>


<td>
{item.victim}
</td>


<td>
{item.type}
</td>


<td>
📍 {item.location}
</td>



<td>

<span className={item.severity==="High"?"high":

item.severity==="Medium"

?"medium"

:"low"

}>


{item.severity}


</span>


</td>

<td>
👮 {item.officer}
</td>



<td>
{item.status}
</td>

<td>
{item.time}
</td>

<td>

</td>

</tr>

))


}

</tbody>

</table>
</div>

<div className="caseDetails">

<div>


<h2>Latest Activity</h2>


<p>
🚨 CASE101 - SOS Received
</p>


<p>
👮 subash Officer Assigned
</p>


<p>📁 Investigation Started</p>

</div>





<div>


<h2>
AI Case Analysis
</h2>


<p>

Risk Prediction :

<b>
 85%
</b>


</p>

<p>location:Railway Road</p>

<p>

Recommended:

Increase Patrol


</p>


</div>





</div>





</div>
</UserLayout>


)


}



export default RecentCases;