import "./App.css";
import { useState } from "react";
import PersonalInformation from "./components/PersonalInformation";

function App() {
  // All Relevant Information For CV
  const [fullName, setFullName] = useState("");
  const [personalTitle, setPersonalTitle] = useState("");
  const [personalAddress, setPersonalAddress] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [personalDescription, setPersonalDescription] = useState("");

  const printState = () => {
    console.log(
      `Full Name: ${fullName}\npersonalTitle: ${personalTitle}\npersonalAddress: ${personalAddress}\npersonalPhone: ${personalPhone}\npersonalEmail: ${personalEmail}\npersonalDescription: ${personalDescription}`
    );
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
        </div>

        <div className="debug">
          <button onClick={() => printState()}>Print State</button>
        </div>
      </main>
    </div>
  );
}

export default App;
