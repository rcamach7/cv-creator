import stockImage from "../assets/stock.jpeg";

function DisplayCV(props) {
  return (
    <div className="DisplayCV">
      <div className="displayCv-intro">
        <h1>{props.personalInformation.fullName}</h1>
        <h2>{props.personalInformation.personalTitle}</h2>
      </div>

      <div className="displayCv-body">
        {/* All CV info goes here */}
        <div className="body-generalInfo">
          <p className="cv-section">Description</p>
          <p>{props.personalInformation.personalDescription}</p>

          <p className="cv-section">Experience(s)</p>
          {props.experiences.map((exp, i) => {
            return (
              <div className="cv-experienceSection" key={i}>
                <p className="cv-experienceSection-child cv-subSection">
                  {exp.from} - {exp.to}
                </p>
                <div className="workDetails">
                  <p className="cv-subSection">{exp.position}</p>
                  <p>{exp.company}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
            );
          })}

          <p className="cv-section">Education</p>
          <div className="cv-educationSection">
            <p className="cv-educationSection-child cv-subSection">
              {props.education.from} - {props.education.to}
            </p>
            <div className="educationDetails">
              <p className="cv-subSection">{props.education.institution}</p>
              <p>{props.education.certification}</p>
              <p>{props.education.location}</p>
            </div>
          </div>
        </div>
        {/* The rest of the personal details goes here */}
        <div className="body-personalDetails">
          <img src={stockImage} alt="" />
          <p className="cv-section">Personal Details</p>

          <p className="cv-subSection">Address</p>
          <p>{props.personalInformation.personalAddress}</p>

          <p className="cv-subSection">Phone Number</p>
          <p>{props.personalInformation.personalPhone}</p>

          <p className="cv-subSection">Email Address</p>
          <p>{props.personalInformation.personalEmail}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayCV;
