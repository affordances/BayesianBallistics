import { useState } from "react";

export const useShots = () => {
  const [
    mostRecentUnsavedShotPosition,
    setMostRecentUnsavedShotPosition,
  ] = useState([]);
  const [savedShots, setSavedShots] = useState([]);
  const [targetDimensions, setTargetDimensions] = useState(null);

  console.log("mostRecentUnsavedShotPosition", mostRecentUnsavedShotPosition);

  return {
    mostRecentUnsavedShotPosition,
    setMostRecentUnsavedShotPosition,
    savedShots,
    setSavedShots,
    targetDimensions,
    setTargetDimensions,
  };
};
