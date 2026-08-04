import React, {useState} from "react";
import UserLayout from "./UserLayout";



function PendingCases(){



const [search,setSearch]=useState("");

const [priority,setPriority]=useState("");

const [location,setLocation]=useState("");

const [date,setDate]=useState("");





const cases=[


{
id:"CASE201",
victim:"Ananya",
type:"Harassment",
location:"Railway Road",
priority:"High",
officer:"Inspector Arjun",
status:"Pending",
date:"2026-06-30",
time:"10:30 PM"

},



{
id:"CASE202",
victim:"Priya",
type:"Stalking",
location:"College Road",
priority:"Medium",
officer:"Officer Kumar",
status:"Pending",
date:"2026-06-30",
time:"08:45 PM"

},



{
id:"CASE203",
victim:"Divya",
type:"Chain Snatching",
location:"Bus Stand",
priority:"High",
officer:"Officer Ravi",
status:"Investigating",
date:"2026-06-29",
time:"06:20 PM"

},



{
id:"CASE204",
victim:"Kavya",
type:"Suspicious Activity",
location:"Market Road",
priority:"Low",
officer:"Officer Mani",
status:"Pending",
date:"2026-06-28",
time:"09:00 PM"

}


];








const filteredCases=cases.filter((item)=>{

return(

item.id.toLowerCase().includes(search.toLowerCase())
&&

(priority==="" || item.priority===priority)


&&


(location==="" || item.location===location)


&&


(date==="" || item.date===date)

)

});

return(


<UserLayout>
<div className="pendingPage">

{/* HEADER */}

<div className="header">


<div>

<h1>
Pending Cases
</h1>


<p>Police Case Investigation Management</p>


</div>



</div>

<br />
{/* FILTER */}


<div className="filterBox">

<h2>Search & Filter Pending Cases</h2>

<div className="filters">

<input placeholder="Search Case ID" value={search} onChange={(e)=>setSearch(e.target.value)} />

<select onChange={(e)=>setPriority(e.target.value)}>

<option value="">
Filter by Priority
</option>


<option>
High
</option>


<option>
Medium
</option>


<option>
Low
</option>


</select>


<select onChange={(e)=>setLocation(e.target.value)}>


<option value="">
Filter by Location
</option>


<option>
Railway Road
</option>


<option>
College Road
</option>


<option>
Bus Stand
</option>


<option>
Market Road
</option>


</select>

<input type="date" onChange={(e)=>setDate(e.target.value)}/>

</div>
</div>
<br />

{/* CARDS */}



<div className="cards">
<div className="card">


<h3>
Total Pending
</h3>


<h1>
32
</h1>


<p>
Active Cases
</p>


</div>







<div className="card high">


<h3>
High Priority
</h3>


<h1>
12
</h1>


<p>
Urgent Action
</p>

</div>

<div className="card medium">

<h3>Investigation</h3>


<h1>15</h1>

<p>Ongoing</p>


</div>

<div className="card low">
<h3>Average Delay</h3>

<h1>2H</h1>


<p>Response Time</p>
</div>
</div>

{/* TABLE */}
<div className="tableBox">


<h2>Pending Case Records</h2>

<table>
<thead>


<tr>


<th>
Case ID
</th>


<th>
Victim
</th>


<th>
Type
</th>


<th>
Location
</th>


<th>
Priority
</th>


<th>
Officer
</th>


<th>
Status
</th>


<th>
Date
</th>

</tr>

</thead>

<tbody>



{

filteredCases.map((item,index)=>(


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


<span className={item.priority}>

{item.priority}

</span>
</td>

<td>
{item.officer}
</td>
<td>
{item.status}
</td>
<td>
{item.date}
</td>
</tr>
))
}
</tbody>
</table>

</div>
{/* AI INSIGHT */}
<div className="aiBox">


<h2>
🤖 AI Pending Case Analysis
</h2>
<p>
AI detected more pending cases in 
<b>
  Railway Road
</b>
. Increase patrol monitoring.
</p>
</div>
</div>
</UserLayout>


)



}



export default PendingCases;