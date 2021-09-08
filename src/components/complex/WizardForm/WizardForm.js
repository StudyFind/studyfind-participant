import { useWizard } from "hooks";

import WizardFormSteps from "./WizardFormSteps";
import WizardFormButtons from "./WizardFormButtons";

function WizardForm({ steps, loading, handleSubmit, allowSkippingSteps }) {
  const { stepIndex, handleBack, handleNext, handleSelect } = useWizard({ steps });

  return (
    <>
      <WizardFormSteps
        stepIndex={stepIndex}
        numberOfSteps={steps.length}
        handleBack={handleBack}
        handleNext={handleNext}
        allowSkippingSteps={allowSkippingSteps}
        handleSelect={handleSelect}
      />
      {steps[stepIndex]}
      <WizardFormButtons
        isFirstStep={stepIndex === 0}
        isFinalStep={stepIndex === steps.length - 1}
        loading={loading}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default WizardForm;
