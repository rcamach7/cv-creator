import { useState, useEffect } from "react";

function PersonalInformation(props) {
  const [fullName, setFullName] = useState("");
  const [personalTitle, setPersonalTitle] = useState("");
  const [personalAddress, setPersonalAddress] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [personalDescription, setPersonalDescription] = useState("");
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (!(props.personalInformation.fullName === "")) {
      setFullName(props.personalInformation.fullName);
      setPersonalTitle(props.personalInformation.personalTitle);
      setPersonalAddress(props.personalInformation.personalAddress);
      setPersonalPhone(props.personalInformation.personalPhone);
      setPersonalEmail(props.personalInformation.personalEmail);
      setPersonalDescription(props.personalInformation.personalDescription);
    }
  }, [props.personalInformation]);

  return (
    <div className="PersonalInformation">
      <form className="personalInformation-form">
        <h2 className="personalInformation-title">Enter Information</h2>
        <h3>Personal Information</h3>
        <input
          type="text"
          id="full-name"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          id="personal-title"
          placeholder="Current Title"
          value={personalTitle}
          onChange={(e) => setPersonalTitle(e.target.value)}
        />
        <input
          type="text"
          id="personal-address"
          placeholder="Current Address"
          value={personalAddress}
          onChange={(e) => setPersonalAddress(e.target.value)}
        />
        <input
          type="text"
          id="personal-phone"
          placeholder="Phone Number"
          value={personalPhone}
          onChange={(e) => setPersonalPhone(e.target.value)}
        />
        <input
          type="text"
          id="personal-email"
          placeholder="Current Email Address"
          value={personalEmail}
          onChange={(e) => setPersonalEmail(e.target.value)}
        />
        <textarea
          type="text"
          id="personal-description"
          placeholder="Description Of Yourself"
          value={personalDescription}
          onChange={(e) => setPersonalDescription(e.target.value)}
        />
        <label htmlFor="image_uploads" className="label-file-upload">
          Choose Icon Picture
        </label>
        <input
          className="file-upload"
          type="file"
          id="image_uploads"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setIcon(e.target.files[0])}
        />
      </form>
      <button
        className="save-btn"
        onClick={() =>
          props.handleSavePersonalInformation(
            fullName,
            personalTitle,
            personalAddress,
            personalPhone,
            personalEmail,
            personalDescription,
            icon
          )
        }
      >
        Save
      </button>
    </div>
  );
}

export default PersonalInformation;
