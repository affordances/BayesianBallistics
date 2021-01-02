import { useState } from "react";

export const useShots = () => {
  const [
    mostRecentUnsavedShotPosition,
    setMostRecentUnsavedShotPosition,
  ] = useState([]);
  const [savedShots, setSavedShots] = useState([]);
  const [targetDimensions, setTargetDimensions] = useState(null);

  return {
    mostRecentUnsavedShotPosition,
    setMostRecentUnsavedShotPosition,
    savedShots,
    setSavedShots,
    targetDimensions,
    setTargetDimensions,
  };
};
