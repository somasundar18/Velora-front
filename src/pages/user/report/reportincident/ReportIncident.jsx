
import UserLayout from "../../../../layouts/UserLayout";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import {useNavigate} from "react-router-dom";
function ReportIncident() {
    const navigate = useNavigate();
    return (
        <UserLayout>
            <div className="report">
                <h1>Report Incident</h1>
                <p>
                   Help us improve community safety by reporting
                   any suspicious or unsafe incidents.
               </p>
                <Input type="text" placeholder="Incident Type"/>
                <Input type="text" placeholder="Location"/>
                <Input type="date"/>
                <textarea  className="report-description" placeholder="Describe the incident..."></textarea>
                <Button text="Upload Evidence" onClick={() => navigate("/upload-evidence")} />
                <Button text="Submit Report" onClick={() => navigate("/report-success")} />
           </div>
       </UserLayout>
    );
}

export default ReportIncident;