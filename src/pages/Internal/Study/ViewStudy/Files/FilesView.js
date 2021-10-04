import FilesEmpty from "components/feature/Study/FilesView/FilesEmpty";
import FilesGrid from "components/feature/Study/FilesView/FilesGrid";
import FilesLoading from "components/feature/Study/FilesView/FilesLoading";

import TabHeader from "../TabHeader";

function FilesView({ setEdit, files, loading, handleOpen, handleDelete }) {
  const handleEdit = () => {
    setEdit(true);
  };

  if (!loading && !files?.length) {
    return <FilesEmpty onButtonClick={handleEdit} />;
  }

  return (
    <>
      <TabHeader heading="Files"></TabHeader>
      {loading ? (
        <FilesLoading />
      ) : (
        <FilesGrid
          files={files}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}

export default FilesView;
