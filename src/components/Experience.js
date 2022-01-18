import { useState } from "react";

function Experience(props) {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div className="Experiences">
      <form className="experience-form">
        <input
          type="text"
          id="experience-position"
          placeholder="Position Held"
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          id="experience-company"
          placeholder="Company Name"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          id="experience-from"
          placeholder="Start Date"
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          id="experience-to"
          placeholder="End Date"
          onChange={(e) => setTo(e.target.value)}
        />
      </form>
      <button
        onClick={() =>
          props.handleExperienceSave(props.id, position, company, from, to)
        }
      >
        Save
      </button>
      <button onClick={() => props.handleDeleteExperience(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default Experience;
