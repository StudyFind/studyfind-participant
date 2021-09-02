import { useDetailsForm } from "hooks";

import DetailsInputs from "./DetailsInputs";

function DetailsForm({ study, onSubmit, Wrapper }) {
  const detailsForm = useDetailsForm(study, onSubmit);

  const title = "Details";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";

  const handleSubmit = () => {
    const isValid = detailsForm.validate();

    if (isValid) {
      onSubmit(detailsForm.values);
    }
  };

  return (
    <Wrapper title={title} description={description} handleSubmit={handleSubmit}>
      <DetailsInputs
        values={detailsForm.values}
        errors={detailsForm.errors}
        hasChanged={detailsForm.hasChanged}
        notDefault={detailsForm.notDefault}
        handleReset={detailsForm.reset}
        handleClear={detailsForm.clear}
        handleChange={detailsForm.update}
      />
    </Wrapper>
  );
}

export default DetailsForm;
