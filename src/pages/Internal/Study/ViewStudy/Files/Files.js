import { useEffect } from "react";
import { useFiles } from "hooks";

import FilesView from "./FilesView";

function Files({ study }) {
  const { files, loading, handleFetch, handleOpen } = useFiles(study.id);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <FilesView
      files={files}
      loading={loading}
      handleFetch={handleFetch}
      handleOpen={handleOpen}
    />
  );
}

export default Files;
