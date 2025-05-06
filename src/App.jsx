import React, { useState } from "react";
import axios from "axios";

function App() {
  const [catFact, setCatFact] = useState(
    "Click the button to get something new about cats!"
  );

  const FetchData = async () => {
    const { data } = await axios.get("https://catfact.ninja/fact");
    setCatFact(data.fact);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-100 p-4">
      <div className="bg-cyan-200 shadow-md rounded-md p-25 max-w-md w-full text-center">
        <h1 className="xs:text-xl text-3xl lg:font-bold text-teal-500 mb-10 font-mono underline">
          Cat-Facts
        </h1>

        <button
          onClick={FetchData}
          className="text-xl bg-teal-500 hover:bg-teal-700 text-white lg:font-semibold py-3 px-6 rounded-md shadow-md mb-4 cursor-pointer"
        >
          Get a Cat-Fact
        </button>

        <div className="text-gray-500 text-lg font-serif mt-4">{catFact}</div>
      </div>
    </div>
  );
}

export default App;
