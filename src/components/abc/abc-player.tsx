"use client";

import { useEffect } from "react";
import abcjs from "abcjs";

interface AbcPlayerProps {
  notation: string;
}

const AbcPlayer: React.FC<AbcPlayerProps> = ({ notation }) => {
  useEffect(() => {
    if (notation) {
      const tuneObjectArray = abcjs.renderAbc("abc-container", notation);
      const synthControl = new abcjs.synth.SynthController();
      synthControl.load("#audio");

      if (tuneObjectArray.length > 0) {
        const tuneObject = tuneObjectArray[0];
        synthControl.setTune(tuneObject, true).then(() => {
          synthControl.play();
        });
      }
    }
  }, [notation]);

  return (
    <div className="p-4">
      <div id="abc-container" className="my-4"></div>
      <div id="audio" className="my-4"></div>
    </div>
  );
};

export default AbcPlayer;
