import { useState } from "react";

function Education(props) {
  const [institution, setInstitution] = useState("");
  const [certification, setCertification] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div className="Education">
      <form className="educational-form">
        <input
          type="text"
          id="education-university"
          placeholder="Educational Institution Attended"
          onChange={(e) => setInstitution(e.target.value)}
        />
        <input
          type="text"
          id="education-degree"
          placeholder="Certification or Degree Earned"
          onChange={(e) => setCertification(e.target.value)}
        />
        <input
          type="text"
          id="education-location"
          placeholder="State or City Of Institution"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          id="experience-from"
          placeholder="Start Date"
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          id="education-to"
          placeholder="End Date"
          onChange={(e) => setTo(e.target.value)}
        />
      </form>
      <button
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
