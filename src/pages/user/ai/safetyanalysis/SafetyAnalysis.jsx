import {useNavigate} from "react-router-dom";
import UserLayout from "../../../../layouts/UserLayout";

import Button from "../../../../common/Button/Button";
import ai from "../../../../assets/images/ai.png";
function SafetyAnalysis() {
  const navigate = useNavigate();
    return (
        <UserLayout>
            <div className="analysis">
                <h1>AI Safety Analysis</h1>
                <p className="location">
                    📍 MG Road, Bangalore
                </p>
                <div className="analysis-frame">
                    <h2>Area Safety Analysis</h2>
                    <div className="analysis-placeholder">
                        <img src={ai} alt="AI" className="ai-image" />
                    </div>
                </div>
                <div className="statistics">
                    <div className="card">
                        <h1>87</h1>
                        <p>Safety Score</p>
                    </div>
                    <div className="small-cards">
                        <div className="mini-card">
                            <h2>2</h2>
                            <p>Incidents Today</p>
                        </div>
                        <div className="mini-card">
                            <h2>5</h2>
                           <p>Safe Zones Nearby</p>
                        </div>
                        <div className="mini-card">
                            <h2>94%</h2>
                            <p>AI Confidence</p>
                       </div>
                    </div>
                </div>
                <h2 style={{ color :"white" }}>AI Insights</h2>
                <div className="insight">
                    🟢 Safety score improved by 8 points this week.
                </div>
                <div className="insight">
                    🟡 Two incidents reported within 500 m.
                </div>
                <div className="insight">
                    🔵 Police patrol increased by 30%.
                </div>
                <Button text="Ask AI" onClick={() => navigate("/ai")} />
            </div>
        </UserLayout>
    );
}
export default SafetyAnalysis;