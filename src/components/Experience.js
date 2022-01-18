import { useState, useEffect } from "react";

function Experience(props) {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    if (!(props.experiences[0].position === "")) {
      props.experiences.forEach((exp) => {
        if (exp.id === props.id) {
          setPosition(exp.position);
          setCompany(exp.company);
          setLocation(exp.location);
          setFrom(exp.from);
          setTo(exp.to);
        }
      });
    }
  }, [props.experiences]);

  return (
    <div className="Experiences">
      <form className="experience-form">
        <input
          type="text"
          id="experience-position"
          placeholder="Position Held"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          id="experience-company"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          id="experience-location"
          placeholder="Location"
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
          id="experience-to"
          placeholder="End Date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </form>
      <button
        className="save-btn"
        onClick={() =>
          props.handleExperienceSave(
            props.id,
            position,
            company,
            location,
            from,
            to
          )
        }
      >
        Save
      </button>
      <button
        className="del-btn"
        onClick={() => props.handleDeleteExperience(props.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Experience;
