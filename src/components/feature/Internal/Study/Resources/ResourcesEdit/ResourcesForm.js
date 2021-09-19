import { useResourcesForm } from "hooks";

import ResourcesInputs from "./ResourcesInputs";

function ResourcesForm({ study, onSubmit, Wrapper }) {
  const resourcesForm = useResourcesForm(study, onSubmit);

  const title = "Resources";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";

  const handleSubmit = () => {
    const isValid = resourcesForm.validate();

    if (isValid) {
      onSubmit(resourcesForm.values);
    }
  };

  return (
    <Wrapper title={title} description={description} handleSubmit={handleSubmit}>
      <ResourcesInputs
        values={resourcesForm.values}
        errors={resourcesForm.errors}
        hasChanged={resourcesForm.hasChanged}
        notDefault={resourcesForm.notDefault}
        createResource={resourcesForm.create}
        updateResource={resourcesForm.update}
        deleteResource={resourcesForm.delete}
        clearResources={resourcesForm.clear}
        resetResources={resourcesForm.reset}
        sortResources={resourcesForm.onSortEnd}
      />
    </Wrapper>
  );
}

export default ResourcesForm;
