import { useState } from "react";
import { useNavigate } from "react-router-dom";


import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
function AddEmergencyContact() {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([
       {
            name: "",
            relationship: "",
            phone: ""
        }
    ]);
    const handleChange = (index, field, value) => {
       const updatedContacts = [...contacts];
       updatedContacts[index][field] = value;
       setContacts(updatedContacts);
    };
    const addContact = () => {
        setContacts([
            ...contacts,
            {
                name: "",
                relationship: "",
                phone: ""
            }
        ]);
    };
    const saveContacts = () => {
        console.log(contacts);
        navigate("/dashboard");
    };
    return (
       <div className="contact">
           <div className="contact-container">
               <h1>Add Emergency Contact</h1>
                <p> Add trusted people who will receive your emergency alerts. </p>
                {contacts.map((contact, index) => (
                    <div key={index}  className="contact-group" >
                      <h1>Contact {index + 1}</h1>
                        <Input type="text" placeholder="Contact Name" value={contact.name} onChange={(e) => handleChange(index, "name", e.target.value)}/>
                        <Input type="text" placeholder="Relationship" value={contact.relationship} onChange={(e) =>handleChange(index, "relationship", e.target.value)}/>
                        <Input type="text" placeholder="Mobile Number" value={contact.phone} onChange={(e) =>handleChange(index, "phone", e.target.value)}/>
                   </div>
                ))}
                <div className="button-group">
                <Button text="+ Add Another Contact"  onClick={addContact} />
                <Button text="Save Contacts" onClick={saveContacts}/>
                </div>
            </div>
        </div>
    );
}
export default AddEmergencyContact;