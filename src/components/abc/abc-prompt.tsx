"use client";

import AbcPlayer from "./abc-player";
import { AbcPromptProps } from "./abc";

export const AbcPrompt: React.FC<AbcPromptProps> = ({
  notation,
  setNotation,
}) => {
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
