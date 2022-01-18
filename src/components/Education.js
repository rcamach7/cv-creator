import { useState, useEffect } from "react";

function Education(props) {
  const [institution, setInstitution] = useState("");
  const [certification, setCertification] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    if (!(props.education.institution === "")) {
      setInstitution(props.education.institution);
      setCertification(props.education.certification);
      setLocation(props.education.location);
      setFrom(props.education.from);
      setTo(props.education.to);
    }
  }, [props.education]);

  return (
    <div className="Education">
      <form className="educational-form">
        <input
          type="text"
          id="education-university"
          placeholder="Educational Institution Attended"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />
        <input
          type="text"
          id="education-degree"
          placeholder="Certification or Degree Earned"
          value={certification}
          onChange={(e) => setCertification(e.target.value)}
        />
        <input
          type="text"
          id="education-location"
          placeholder="State or City Of Institution"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          id="experience-from"
          placeholder="Start Date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          id="education-to"
          placeholder="End Date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </form>
      <button
        className="save-btn"
        onClick={() =>
          props.handleSaveEducation(
            institution,
            certification,
            location,
            from,
            to
          )
        }
      >
        Save
      </button>
    </div>
  );
}

export default Education;
