import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PersonalInformation from "./components/PersonalInformation";
import Experience from "./components/Experience";

function App() {
  // All Relevant Information For CV
  const [fullName, setFullName] = useState("");
  const [personalTitle, setPersonalTitle] = useState("");
  const [personalAddress, setPersonalAddress] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [personalDescription, setPersonalDescription] = useState("");
  // Experiences Array, since we can have more than one
  const [experiences, setExperiences] = useState([]);

  const addExperience = () => {
    const updatedExperiences = [
      ...experiences,
      {
        id: uuidv4(),
        position: "",
        company: "",
        from: "",
        to: "",
      },
    ];

    setExperiences(updatedExperiences);
  };

  const handleExperienceSave = (
    experienceId,
    positionIn,
    companyIn,
    fromIn,
    toIn
  ) => {
    experiences.forEach((experience) => {
      if (experience.id === experienceId) {
        experience.position = positionIn;
        experience.company = companyIn;
        experience.from = fromIn;
        experience.to = toIn;
      }
    });
  };

  const handleDeleteExperience = (id) => {
    let indexToDelete = -1;
    experiences.forEach((experience, i) => {
      if (experience.id === id) {
        indexToDelete = i;
      }
    });

    const updatedExperiences = [...experiences];
    updatedExperiences.splice(indexToDelete, 1);

    setExperiences(updatedExperiences);
  };

  const printState = () => {
    console.log(experiences);
  };

  return (
    <div className="App">
      <header className="App-header">CV CREATOR</header>
      <main className="main-container">
        <div className="input-container">
          <PersonalInformation
            setFullName={setFullName}
            setPersonalTitle={setPersonalTitle}
            setPersonalAddress={setPersonalAddress}
            setPersonalPhone={setPersonalPhone}
            setPersonalEmail={setPersonalEmail}
            setPersonalDescription={setPersonalDescription}
          />
          <div className="Experiences">
            <h3>Experiences</h3>
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  id={experience.id}
                  handleExperienceSave={handleExperienceSave}
                  handleDeleteExperience={handleDeleteExperience}
                />
              );
            })}
            <button onClick={() => addExperience()}>Add Experience</button>
          </div>
        </div>

        <div className="debug">
          <button onClick={() => printState()}>Print State</button>
        </div>
      </main>
    </div>
  );
}

export default App;
