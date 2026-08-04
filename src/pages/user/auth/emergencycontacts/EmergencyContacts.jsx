
import UserLayout from "../../../../layouts/UserLayout";
import { useNavigate } from "react-router-dom";
import { FaUserCircle,FaPhoneAlt,FaPlus, FaTrash} from "react-icons/fa";

function EmergencyContacts() {
    const navigate = useNavigate();
    const contacts = [
        {
            id: 1,
            name: "Mom",
            phone: "+91 9876543210",
            type: "Primary Contact"
        },
        {
            id: 2,
            name: "Brother",
            phone: "+91 9876543211",
            type: "Emergency Contact"
        },
        {
            id: 3,
            name: "Best Friend",
            phone: "+91 9876543212",
            type: "Emergency Contact"
        }
    ];
    return (
        <UserLayout>
            <div className="contacts">
                <div className="contacts-header">
                    <h1>Emergency Contacts</h1>
                    <button className="add-contact-btn" onClick={() => navigate("/add-emergency-contact")}>
                        <FaPlus />
                        Add Contact
                    </button>
               </div>
                {contacts.map((contact) => (
                    <div className="contact-card" key={contact.id}>
                        <FaUserCircle className="contact-icon" />
                        <div className="contact-info">
                            <h2>{contact.name}</h2>
                            <p style={{ color: "#ffffff" }}>{contact.phone}</p>
                            <span style={{ color: "#ffffff" }}>{contact.type}</span>
                        </div>
                        <div className="contact-actions">
                            <FaPhoneAlt className="call-icon" />
                            <FaTrash className="delete-icon" />
                       </div>
                    </div>
                ))}
            </div>
        </UserLayout>
    );
}
export default EmergencyContacts;