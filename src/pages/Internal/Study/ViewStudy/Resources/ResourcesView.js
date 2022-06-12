import ResourcesEmpty from "components/feature/Study/ResourcesView/ResourcesEmpty";
import ResourcesList from "components/feature/Study/ResourcesView/ResourcesList";
import TabHeader from "../TabHeader";

function ResourcesView({ study }) {
  if (!study?.resources?.length) {
    return <ResourcesEmpty />;
  }

  return (
    <>
      <TabHeader heading="Resources"></TabHeader>
      <ResourcesList resources={study.resources} />
    </>
  );
}

export default ResourcesView;
