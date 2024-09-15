import { useState } from "react";
import "./App.css";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [value, setValue] = useState("");
  const [def, setDef] = useState("");
  const [empty, isEmpty] = useState(false);
  const handlerfunction = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    isEmpty(true);
    if (value === "") {
      setDef("Word not found in the dictionary.");
      return;
    }
    let formData = data.find(
      (e) => value.toUpperCase() === e.word.toUpperCase()
    );
    if (formData) {
      setDef(formData.meaning);
    } else {
      setDef("Word not found in the dictionary.");
    }

    setValue("");
  };
  return (
    <>
      <h1>Dictionary App</h1>
      <form action="">
        <input
          type="text"
          value={value}
          placeholder="Search for a word"
          onChange={handlerfunction}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
      <h3>Definition:</h3>
      {empty && <p>{def}</p>}
    </>
  );
}

export default App;
