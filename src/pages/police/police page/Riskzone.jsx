import React from 'react'
import UserLayout from "./UserLayout";
function Riskzone() {
  return (
    <UserLayout>
    <div className='com-map-ui'>
        <h2 style={{color:'black'}}>RISH ZONE MAP</h2>
        <div className='map-ui'>
            <div className="map-txt-ui">
                <h3>Real-time Risk Monitoring</h3>
                <div style={{paddingTop:'150px'}}>
                    <p>Enter location:</p> <br />
                      <input type="text" placeholder='search location' style={{
       padding: '10px',
        fontSize: '16px',
        border: '2px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        outline: 'none',
        backgroundColor: '#f9f9f9'
      }}/>

</div>
              
            </div>
            <div className="map-mapui">
                
            </div>

        </div>

        <div className="riskmark">
            <h4>High Risk Hotspots</h4>
            <p>3</p>
        </div>
        <div className="sos alter">
            <h4>Total SOS Alerts</h4>
            <p>3</p>
        </div>
        <div className="Safe Areas">
            <h4>Safe Area</h4>
            <p>4</p>
        </div>
    </div>
    </UserLayout>
  )
}

export default Riskzone
