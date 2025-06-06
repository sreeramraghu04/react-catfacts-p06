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
      <div className="bg-cyan-200 shadow-md rounded-md p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-teal-500 mb-12 font-mono underline mt-5">
          Cat-Facts
        </h1>

        <button
          onClick={FetchData}
          className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md shadow-md mb-4 cursor-pointer"
        >
          Get a Cat-Fact
        </button>

        <div className="text-gray-500 font-serif mt-4  text-center">
          {catFact}
        </div>
      </div>
    </div>
  );
}

export default App;
