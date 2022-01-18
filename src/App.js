import "./App.css";
import { useState } from "react";
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

  const printState = () => {
    // console.log(
    //   `Full Name: ${fullName}\npersonalTitle: ${personalTitle}\npersonalAddress: ${personalAddress}\npersonalPhone: ${personalPhone}\npersonalEmail: ${personalEmail}\npersonalDescription: ${personalDescription}`
    // );
    console.log(experiences);
  };

  const addExperience = () => {
    // ID
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();

    const curExperiences = experiences;
    curExperiences.push(<Experience key={uniqid} />);

    setExperiences(curExperiences);
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
            {experiences.forEach((experience) => {
              return experience;
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
