import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PersonalInformation from "./components/PersonalInformation";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  // All Relevant Information For CV
  const [personalInformation, setPersonalInformation] = useState({
    id: uuidv4(),
    fullName: "",
    personalTitle: "",
    personalAddress: "",
    personalPhone: "",
    personalEmail: "",
    personalDescription: "",
  });
  const [experiences, setExperiences] = useState([
    {
      id: uuidv4(),
      position: "",
      company: "",
      from: "",
      to: "",
    },
  ]);
  const [education, setEducation] = useState({
    institution: "",
    certification: "",
    location: "",
    from: "",
    to: "",
  });

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

  const handleSaveEducation = (
    institutionIn,
    certificationIn,
    locationIn,
    fromIn,
    toIn
  ) => {
    const updatedEducation = { ...education };
    updatedEducation.institution = institutionIn;
    updatedEducation.certification = certificationIn;
    updatedEducation.location = locationIn;
    updatedEducation.from = fromIn;
    updatedEducation.to = toIn;

    setEducation(updatedEducation);
  };

  const handleSavePersonalInformation = (
    fullNameIn,
    personalTitleIn,
    personalAddressIn,
    personalPhoneIn,
    personalEmailIn,
    personalDescriptionIn
  ) => {
    const updatedPersonalInformation = { ...personalInformation };
    updatedPersonalInformation.fullName = fullNameIn;
    updatedPersonalInformation.personalTitle = personalTitleIn;
    updatedPersonalInformation.personalAddress = personalAddressIn;
    updatedPersonalInformation.personalPhone = personalPhoneIn;
    updatedPersonalInformation.personalEmail = personalEmailIn;
    updatedPersonalInformation.personalDescription = personalDescriptionIn;

    setPersonalInformation(updatedPersonalInformation);
  };

  const printState = () => {
    console.log(personalInformation);
    console.log(experiences);
    console.log(education);
  };

  return (
    <div className="App">
      <header className="App-header">CV CREATOR</header>
      <main className="main-container">
        <div className="input-container">
          <PersonalInformation
            handleSavePersonalInformation={handleSavePersonalInformation}
          />
          <div className="Experiences">
            <h3>Experience(s)</h3>
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

          <div className="Education-Container">
            <h3>Education</h3>
            <Education handleSaveEducation={handleSaveEducation} />
          </div>
        </div>

        <div className="output-container">Hello World</div>

        <div className="debug">
          <button onClick={() => printState()}>Print State</button>
        </div>
      </main>
    </div>
  );
}

export default App;
