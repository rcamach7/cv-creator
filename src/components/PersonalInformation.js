import { useState } from "react";

function PersonalInformation(props) {
  const [fullName, setFullName] = useState("");
  const [personalTitle, setPersonalTitle] = useState("");
  const [personalAddress, setPersonalAddress] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [personalDescription, setPersonalDescription] = useState("");
  return (
    <div className="PersonalInformation">
      <form className="personalInformation-form">
        <h3>Personal Information</h3>
        <input
          type="text"
          id="full-name"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          id="personal-title"
          placeholder="Current Title"
          onChange={(e) => setPersonalTitle(e.target.value)}
        />
        <input
          type="text"
          id="personal-address"
          placeholder="Current Address"
          onChange={(e) => setPersonalAddress(e.target.value)}
        />
        <input
          type="text"
          id="personal-phone"
          placeholder="Phone Number"
          onChange={(e) => setPersonalPhone(e.target.value)}
        />
        <input
          type="text"
          id="personal-email"
          placeholder="Current Email Address"
          onChange={(e) => setPersonalEmail(e.target.value)}
        />
        <textarea
          type="text"
          id="personal-description"
          placeholder="Description Of Yourself"
          onChange={(e) => setPersonalDescription(e.target.value)}
        />
      </form>
      <button
        onClick={() =>
          props.handleSavePersonalInformation(
            fullName,
            personalTitle,
            personalAddress,
            personalPhone,
            personalEmail,
            personalDescription
          )
        }
      >
        Save
      </button>
    </div>
  );
}

export default PersonalInformation;
