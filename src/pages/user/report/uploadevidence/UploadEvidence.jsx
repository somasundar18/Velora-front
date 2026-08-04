
import UserLayout from "../../../../layouts/UserLayout";
import Button from "../../../../common/Button/Button";
import {useNavigate} from "react-router-dom";
function UploadEvidence() {
    const navigate = useNavigate();
    return (
        <UserLayout>
            <div className="upload">
                <h1>Upload Evidence</h1>
                <p>
                   Upload photos, videos or documents
                   related to the incident.
               </p>
                <div className="upload-box">
                    <input  type="file" multiple/>
                    <p>Drag & Drop files here</p>
                    <span> or click to browse</span>
                </div>
                <Button text="Upload Files" />
                <Button text="Continue to report" onClick={() => navigate("/report")} />
            </div>
        </UserLayout>
    );
}
export default UploadEvidence;