"use client";

import { useState } from "react";
import AbcPlayer from "./abc-player";
import { defaultNotation } from "./data";

export const AbcPrompt = () => {
  const [notation, setNotation] = useState(defaultNotation);

  // create handler (there are often times that ChatGPT gives empty lines and this breaks ABC notation)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ABC Notation Player</h1>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 rounded mb-4"
        value={notation}
        onChange={(e) => setNotation(e.target.value)}
      />
      <AbcPlayer notation={notation} />
    </div>
  );
};
