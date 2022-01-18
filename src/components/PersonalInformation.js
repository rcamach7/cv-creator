function PersonalInformation(props) {
  return (
    <div className="PersonalInformation">
      <form className="personalInformation-form">
        <h3>Personal Information</h3>
        <input
          type="text"
          id="full-name"
          placeholder="Full Name"
          onChange={(e) => props.setFullName(e.target.value)}
        />
        <input
          type="text"
          id="personal-title"
          placeholder="Current Title"
          onChange={(e) => props.setPersonalTitle(e.target.value)}
        />
        <input
          type="text"
          id="personal-address"
          placeholder="Current Address"
          onChange={(e) => props.setPersonalAddress(e.target.value)}
        />
        <input
          type="text"
          id="personal-phone"
          placeholder="Phone Number"
          onChange={(e) => props.setPersonalPhone(e.target.value)}
        />
        <input
          type="text"
          id="personal-email"
          placeholder="Current Email Address"
          onChange={(e) => props.setPersonalEmail(e.target.value)}
        />
        <textarea
          type="text"
          id="personal-description"
          placeholder="Description Of Yourself"
          onChange={(e) => props.setPersonalDescription(e.target.value)}
        />
      </form>
    </div>
  );
}

export default PersonalInformation;
