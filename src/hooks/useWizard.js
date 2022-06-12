import { useState } from "react";

function useWizard(numberOfSteps) {
  const [stepIndex, setStepIndex] = useState(0);

  const handleBack = () => {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (stepIndex < numberOfSteps - 1) {
      setStepIndex((prev) => prev + 1);
    }
  };

  const handleSelect = (index) => {
    setStepIndex(index);
  };

  return { stepIndex, handleNext, handleBack, handleSelect };
}

export default useWizard;
